import { useEffect, useState, type ReactNode } from "react";
import { ShieldAlert, Loader2 } from "lucide-react";

const CACHE_KEY = "geo-africa-check-v3";

// Wilayas algériennes exclues : Tizi Ouzou (15) et Béjaïa (06)
const normalize = (s: unknown) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
const EXCLUDED_NAMES = ["tiziouzou", "bejaia", "bougie", "bgayet"];
const EXCLUDED_CODES = ["15", "06", "6", "DZ-15", "DZ-06"];
export const isExcludedWilaya = (data: {
  country_code?: string;
  region?: string;
  region_code?: string;
  city?: string;
}) => {
  if (data?.country_code !== "DZ") return false;
  if (data.region_code && EXCLUDED_CODES.includes(String(data.region_code))) return true;
  const region = normalize(data.region);
  const city = normalize(data.city);
  return EXCLUDED_NAMES.some((n) => region.includes(n) || city.includes(n));
};

type GeoState = "loading" | "allowed" | "blocked";

// Tous les pays africains (codes ISO 3166-1 alpha-2), sauf le Maroc (MA)
const ALLOWED_COUNTRIES = new Set([
  "DZ", // Algérie
  "AO", // Angola
  "BJ", // Bénin
  "BW", // Botswana
  "BF", // Burkina Faso
  "BI", // Burundi
  "CV", // Cap-Vert
  "CM", // Cameroun
  "CF", // Centrafrique
  "KM", // Comores
  "CG", // Congo
  "CD", // RD Congo
  "CI", // Côte d'Ivoire
  "DJ", // Djibouti
  "EG", // Égypte
  "ER", // Érythrée
  "SZ", // Eswatini
  "ET", // Éthiopie
  "GA", // Gabon
  "GM", // Gambie
  "GH", // Ghana
  "GN", // Guinée
  "GW", // Guinée-Bissau
  "GQ", // Guinée équatoriale
  "KE", // Kenya
  "LS", // Lesotho
  "LR", // Liberia
  "LY", // Libye
  "MG", // Madagascar
  "MW", // Malawi
  "ML", // Mali
  "MR", // Mauritanie
  "MU", // Maurice
  "MZ", // Mozambique
  "NA", // Namibie
  "NE", // Niger
  "NG", // Nigeria
  "UG", // Ouganda
  "RW", // Rwanda
  "ST", // São Tomé-et-Principe
  "SN", // Sénégal
  "SC", // Seychelles
  "SL", // Sierra Leone
  "SO", // Somalie
  "ZA", // Afrique du Sud
  "SS", // Soudan du Sud
  "SD", // Soudan
  "TZ", // Tanzanie
  "TD", // Tchad
  "TG", // Togo
  "TN", // Tunisie
  "ZM", // Zambie
  "ZW", // Zimbabwe
  "EH", // Sahara occidental
  "YT", // Mayotte
  "RE", // La Réunion
  "SH", // Sainte-Hélène
  "IO", // Territoire britannique de l'océan Indien
]);

/**
 * Restreint l'accès du site aux adresses IP africaines (sauf le Maroc).
 * Vérification côté client via ipapi.co (gratuit, sans clé).
 * En cas d'erreur réseau, l'accès est autorisé (fail-open)
 * pour ne jamais bloquer un visiteur africain par accident.
 */
const GeoGate = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GeoState>(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached === "allowed" || cached === "blocked") return cached;
    return "loading";
  });

  useEffect(() => {
    if (state !== "loading") return;

    let cancelled = false;

    const check = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        clearTimeout(timeout);
        if (!res.ok) throw new Error("geo check failed");
        const data = await res.json();
        const result: GeoState =
          data?.country_code &&
          ALLOWED_COUNTRIES.has(data.country_code) &&
          !isExcludedWilaya(data)
            ? "allowed"
            : "blocked";
        if (!cancelled) {
          sessionStorage.setItem(CACHE_KEY, result);
          setState(result);
        }
      } catch {
        // Fail-open : ne jamais bloquer un Africain à cause d'une panne du service
        if (!cancelled) {
          sessionStorage.setItem(CACHE_KEY, "allowed");
          setState("allowed");
        }
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, [state]);

  if (state === "loading") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-body text-sm">
          Vérification de votre localisation…
        </p>
      </div>
    );
  }

  if (state === "blocked") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="glass rounded-full p-6 glow">
          <ShieldAlert className="h-14 w-14 text-accent" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-gradient-gold tracking-wide">
          Accès réservé à l'Afrique
        </h1>
        <p className="text-muted-foreground font-body max-w-md leading-relaxed">
          Imarat El Djazair est un portail réservé aux visiteurs se connectant
          depuis le continent africain. Votre adresse IP semble provenir d'une
          région non autorisée.
        </p>
        <p className="text-muted-foreground/60 font-body text-sm" dir="rtl">
          هذا الموقع مخصص للزوار من القارة الإفريقية فقط
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeoGate;
