import { createClient } from "npm:@supabase/supabase-js@2";
import { ethers } from "npm:ethers@6";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const TOKEN = "0x20c0000000000000000000006764a89cD146E386";
const RPC = "https://rpc.moderato.tempo.xyz";
const AMOUNT = "100";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { address } = await req.json();
    if (typeof address !== "string" || !ethers.isAddress(address)) return json({ error: "Adresse invalide." }, 400);
    const ip = (req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0] || "").trim();
    if (!ip) return json({ error: "IP introuvable." }, 400);

    const key = Deno.env.get("FAUCET_PRIVATE_KEY");
    if (!key) return json({ error: "Faucet pas encore configuré." }, 503);

    const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const addr = address.toLowerCase();
    const { data: row, error: insErr } = await db.from("faucet_claims").insert({ ip, address: addr }).select("id").single();
    if (insErr) return json({ error: "Les 100 DZD ont déjà été donnés à cette connexion ou à cette adresse." }, 409);

    try {
      const provider = new ethers.JsonRpcProvider(RPC);
      const signer = new ethers.Wallet(key, provider);
      const token = new ethers.Contract(TOKEN, [
        "function decimals() view returns (uint8)",
        "function transfer(address,uint256) returns (bool)",
      ], signer);
      const decimals = await token.decimals();
      const tx = await token.transfer(address, ethers.parseUnits(AMOUNT, decimals));
      await db.from("faucet_claims").update({ tx_hash: tx.hash }).eq("id", row.id);
      return json({ ok: true, txHash: tx.hash });
    } catch (e) {
      await db.from("faucet_claims").delete().eq("id", row.id);
      console.error(e);
      return json({ error: "Envoi impossible pour le moment. Réessayez plus tard." }, 500);
    }
  } catch (e) {
    console.error(e);
    return json({ error: "Requête invalide." }, 400);
  }
});
