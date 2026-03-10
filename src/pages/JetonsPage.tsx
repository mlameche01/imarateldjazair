import { ExternalLink } from "lucide-react";

interface Token {
  name: string;
  symbol: string;
  network: string;
  address: string;
  thirdwebUrl: string;
}

const tokens: Token[] = [
  { name: "DZ Denarius", symbol: "DZD", network: "Polygon Mainnet", address: "0x07221c2D1dc1D5485Bf069871E2820864B4948F7", thirdwebUrl: "https://thirdweb.com/polygon/0x07221c2D1dc1D5485Bf069871E2820864B4948F7" },
  { name: "USDM stablecoin", symbol: "USDM", network: "Polygon Mainnet", address: "0x1a1d986aff036865F5e4198D9ED573fe1D8EC4d4", thirdwebUrl: "https://thirdweb.com/137/0x1a1d986aff036865F5e4198D9ED573fe1D8EC4d4" },
  { name: "Youtube", symbol: "YOU", network: "Polygon Mainnet", address: "0x731329B52FDd332252D7EF218991D29D80BADECe", thirdwebUrl: "https://thirdweb.com/137/0x731329B52FDd332252D7EF218991D29D80BADECe" },
  { name: "USDT0", symbol: "USDT0", network: "Polygon Mainnet", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", thirdwebUrl: "https://thirdweb.com/polygon/0xc2132D05D31c914a87C6611C10748AEb04B58e8F" },
  { name: "USD Coin", symbol: "USDC", network: "Polygon Mainnet", address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", thirdwebUrl: "https://thirdweb.com/137/0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359" },
  { name: "FRAN digital", symbol: "FRN", network: "Polygon Mainnet", address: "0xbff1721bc1009E842eD701cD7AA72ecfbCBB29DA", thirdwebUrl: "https://thirdweb.com/137/0xbff1721bc1009E842eD701cD7AA72ecfbCBB29DA" },
  { name: "امارة الجزائر الرقمية", symbol: "XYZ", network: "Polygon Mainnet", address: "0xA1D6aCC3d6DA890568bebEBdd8C9819E5967f8a3", thirdwebUrl: "https://thirdweb.com/137/0xA1D6aCC3d6DA890568bebEBdd8C9819E5967f8a3" },
  { name: "الدرهم Dirham", symbol: "DIR", network: "Polygon Mainnet", address: "0x143D6D24f19Ef7d49F1d351Cd7028353E996921D", thirdwebUrl: "https://thirdweb.com/137/0x143D6D24f19Ef7d49F1d351Cd7028353E996921D" },
  { name: "Mauresque", symbol: "MOR", network: "Polygon Mainnet", address: "0x4D55176b5b7dC80DAC789DCd43fD2c7688569f29", thirdwebUrl: "https://thirdweb.com/137/0x4D55176b5b7dC80DAC789DCd43fD2c7688569f29" },
  { name: "Kane FM", symbol: "KA", network: "Polygon Mainnet", address: "0x06Fd0821f333651c488bd43681F50345f255D532", thirdwebUrl: "https://thirdweb.com/137/0x06Fd0821f333651c488bd43681F50345f255D532" },
  { name: "Algiers Radios", symbol: "ALG", network: "Polygon Mainnet", address: "0x7EFd1F12A949ba65f0965A21A427d6cb8D03210c", thirdwebUrl: "https://thirdweb.com/137/0x7EFd1F12A949ba65f0965A21A427d6cb8D03210c" },
  { name: "القائم", symbol: "MAHDI", network: "Polygon Mainnet", address: "0xaB786126c36f027A004833c914f1380997c23Fbd", thirdwebUrl: "https://thirdweb.com/137/0xaB786126c36f027A004833c914f1380997c23Fbd" },
];

const JetonsPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-gradient mb-2">🪙 Jetons</h1>
        <p className="text-muted-foreground mb-10">Tokens officiels de l'écosystème Imarat El Djazair sur Polygon</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tokens.map((token) => (
            <a
              key={token.symbol}
              href={token.thirdwebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-shine rounded-xl border border-border p-5 hover:border-primary/30 transition-all hover:glow group"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{token.name}</h3>
                  <span className="text-xs text-accent font-medium">{token.symbol}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{token.network}</p>
              <code className="text-[10px] text-muted-foreground/70 font-mono break-all">
                {token.address}
              </code>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JetonsPage;
