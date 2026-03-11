import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";

const HomePage = () => {
  const tokenAddress = "0x07221c2D1dc1D5485Bf069871E2820864B4948F7";

  const quickLinks = [
    { label: "🎬 Cinéma", desc: "Films gratuits du domaine public", path: "/cinema" },
    { label: "📻 Radios", desc: "Radios algériennes et internationales", path: "/radios" },
    { label: "📺 IPTV", desc: "Télévision en streaming", path: "/iptv" },
    { label: "📰 Articles", desc: "Analyses géopolitiques et crypto", path: "/articles" },
    { label: "🪙 Jetons", desc: "Tokens sur Polygon Mainnet", path: "/jetons" },
    { label: "🕌 Religion", desc: "Contenu spirituel et réflexions", path: "/religion" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroHome} alt="Imarat El Djazair" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl tracking-wider text-gradient mb-4">
            Imarat El Djazair
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Sovereign Digital Ecosystem • Decentralized • Non-Aligned
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Écosystème économique et numérique autonome, indépendant de toute domination étrangère
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/livre-blanc"
              className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Livre Blanc
            </Link>
            <Link
              to="/jetons"
              className="px-6 py-2.5 rounded-md border border-accent/50 text-accent font-medium text-sm hover:bg-accent/10 transition-colors"
            >
              Nos Jetons
            </Link>
          </div>
        </div>
      </section>

      {/* Token Address Banner */}
      <section className="bg-card border-y border-border px-4 py-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3 justify-center">
          <span className="text-sm text-muted-foreground">🚀 Adresse du token DZD :</span>
          <code className="text-xs md:text-sm bg-secondary px-3 py-1.5 rounded font-mono text-foreground">
            {tokenAddress}
          </code>
          <button
            onClick={() => navigator.clipboard.writeText(tokenAddress)}
            className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-medium hover:bg-primary/30 transition-colors"
          >
            Copier
          </button>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="px-4 md:px-12 py-16 bg-card/50">
        <h2 className="text-3xl md:text-4xl text-center text-gradient mb-10">Explorer l'Écosystème</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="card-shine rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:glow group"
            >
              <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">{link.label}</h3>
              <p className="text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-12 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl tracking-wide text-gradient mb-4">Imarat El Djazair</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
            Écosystème numérique souverain. Décentralisé. Non-aligné.
          </p>
          <div className="flex gap-6 justify-center text-xs text-muted-foreground">
            <Link to="/livre-blanc" className="hover:text-foreground">Livre Blanc</Link>
            <Link to="/jetons" className="hover:text-foreground">Jetons</Link>
            <Link to="/articles" className="hover:text-foreground">Articles</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
