const LivreBlancPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl text-center text-gradient mb-2">Imarat El Djazair</h1>
        <p className="text-center text-muted-foreground mb-12">
          Sovereign Digital Ecosystem • Decentralized • Non-Aligned
        </p>

        <div className="card-shine rounded-xl border border-border p-6 md:p-8 mb-8">
          <p className="text-sm text-secondary-foreground">
            <strong className="text-foreground">Imarat El Djazair</strong> is a project aiming to build an{" "}
            <strong className="text-accent">autonomous economic and digital ecosystem</strong>, independent from any foreign
            domination, notably the <strong>United States</strong> and <strong>China</strong>.
          </p>
        </div>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl text-gradient">🌍 Vision</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our vision is to build a digital economy based on sovereignty, strategic neutrality, and fair cooperation.
            Imarat El Djazair rejects dependence on dominant international currencies and promotes an alternative, free,
            and balanced model.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-3xl text-gradient-gold">🪙 Tokens & Internal Economy</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The <strong className="text-foreground">official tokens</strong> of the Imarat El Djazair ecosystem are{" "}
            <strong className="text-accent">inter-convertible</strong> according to transparent internal rules. They are{" "}
            <strong className="text-foreground">not pegged</strong> or controlled by the US dollar or Chinese currency.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The value of tokens is based on their real utility, exchange within the community, and mutual trust.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl text-gradient">🏗️ Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🎬", title: "Cinéma", desc: "Films gratuits du domaine public" },
              { icon: "📻", title: "Radios", desc: "Radios algériennes et internationales" },
              { icon: "📺", title: "IPTV", desc: "Télévision en direct" },
              { icon: "📰", title: "Articles", desc: "Analyses et réflexions" },
              { icon: "🕌", title: "Religion", desc: "Contenu spirituel" },
              { icon: "💱", title: "Swap", desc: "Échange de tokens décentralisé" },
            ].map((item) => (
              <div key={item.title} className="card-shine rounded-lg border border-border p-4">
                <span className="text-lg">{item.icon}</span>
                <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card-shine rounded-xl border border-primary/20 p-6 text-center">
          <h2 className="text-2xl text-gradient mb-3">Rejoignez l'écosystème</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Participez à la construction d'une économie numérique souveraine et décentralisée.
          </p>
          <a
            href="https://thirdweb.com/polygon/0x07221c2D1dc1D5485Bf069871E2820864B4948F7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
          >
            Acheter DZD
          </a>
        </section>
      </div>
    </div>
  );
};

export default LivreBlancPage;
