const ArticlesPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-gradient mb-2">📰 Articles</h1>
        <p className="text-muted-foreground mb-10">Analyses géopolitiques, crypto et économie</p>

        {/* Article 1 */}
        <article className="card-shine rounded-xl border border-border p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl text-gradient-gold mb-4">
            🌍 L'Affiche qui Résume la Guerre des Monnaies du 21e Siècle
          </h2>
          <p className="text-muted-foreground italic mb-6">
            Trois blocs. Trois monnaies. Trois visions du monde. Qui gagnera ?
          </p>

          <section className="mb-8">
            <h3 className="text-xl text-accent mb-3">🔥 BLOC DE L'EST — MNBC BRICS : La Révolte des Émergents</h3>
            <p className="text-secondary-foreground text-sm mb-3">Couleurs : Rouge, or, ocre — puissance, tradition, résistance.</p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <h4 className="text-primary text-sm font-semibold mb-2">💥 Ce qu'elle montre :</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Les drapeaux de la Chine, la Russie, l'Inde, avec le Kremlin et des soldats en arrière-plan.</li>
                <li>• Une pièce dorée gravée « BRICS CBDC » — la future monnaie numérique commune.</li>
                <li>• Des liasses de billets, symbolisant les échanges commerciaux hors dollar.</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-primary text-sm font-semibold mb-2">🧠 Ce que ça signifie :</h4>
              <p className="text-sm text-muted-foreground">
                Les BRICS veulent rompre avec la domination du dollar américain. Leur arme : une monnaie numérique interopérable (CBDC), qui permettrait de payer sans passer par SWIFT.
              </p>
              <p className="text-xs text-primary mt-2">✅ Avantage : indépendance face aux sanctions.</p>
              <p className="text-xs text-destructive mt-1">❗ Risque : fragmentation du système financier mondial.</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl text-accent mb-3">🌐 BLOC DU MILIEU — CRYPTO DÉCENTRALISÉ : La Révolution Invisible</h3>
            <p className="text-secondary-foreground text-sm mb-3">Couleurs : Vert, marron, doré — naturel, technologique, libre.</p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <h4 className="text-primary text-sm font-semibold mb-2">💥 Ce qu'elle montre :</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Des jeunes utilisant des ordinateurs, entourés de Bitcoin, Ethereum, Solana.</li>
                <li>• Un réseau blockchain lumineux — symbole de décentralisation.</li>
                <li>• Le drapeau algérien et la carte de l'Afrique.</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-primary text-sm font-semibold mb-2">🧠 Ce que ça signifie :</h4>
              <p className="text-sm text-muted-foreground">
                C'est le monde sans frontières ni banquiers centraux. Les cryptos sont une réponse populaire à la crise de confiance dans les banques.
              </p>
              <p className="text-xs text-primary mt-2">✅ Avantage : liberté financière, innovation, inclusion.</p>
              <p className="text-xs text-destructive mt-1">❗ Risque : volatilité, fraude, absence de protection légale.</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl text-accent mb-3">🇺🇸 BLOC DE L'OUEST — MNBC DOLLAR : L'Empire Numérique</h3>
            <p className="text-secondary-foreground text-sm mb-3">Couleurs : Bleu, blanc, gris — froid, technologique, contrôlé.</p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <h4 className="text-primary text-sm font-semibold mb-2">💥 Ce qu'elle montre :</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• La Statue de la Liberté avec des caméras de surveillance.</li>
                <li>• Le Capitole, le drapeau américain et un personnage masqué.</li>
                <li>• Une pièce dorée avec « CBDC » — le dollar numérique sous contrôle central.</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="text-primary text-sm font-semibold mb-2">🧠 Ce que ça signifie :</h4>
              <p className="text-sm text-muted-foreground">
                Les États-Unis préparent leur dollar numérique, géré par la Fed. C'est aussi un outil de surveillance financière massive.
              </p>
              <p className="text-xs text-primary mt-2">✅ Avantage : efficacité, sécurité, stabilité.</p>
              <p className="text-xs text-destructive mt-1">❗ Risque : contrôle total, fin de l'anonymat, censure.</p>
            </div>
          </section>

          <section className="bg-card rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl text-gradient mb-4">📈 Et demain ? (Scénario 2030)</h3>
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• Zone BRICS (yuan numérique, rouble numérique, etc.)</li>
              <li>• Zone Occidentale (dollar numérique, euro numérique)</li>
              <li>• Zone "crypto-libre" (Bitcoin, stablecoins, DeFi)</li>
            </ul>
            <div className="bg-primary/5 rounded p-4">
              <p className="text-sm font-semibold text-accent mb-2">🎯 En résumé :</p>
              <p className="text-sm text-muted-foreground">
                ✅ La finance se transforme radicalement grâce à la technologie. ⚠️ Chaque choix de monnaie a des conséquences politiques et personnelles. 🌍 Le futur sera fragmenté, compétitif, et peut-être plus libre... ou plus contrôlé.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ArticlesPage;
