import { ExternalLink, Download, Github } from "lucide-react";

const SOURCE_URL = "https://de-lightpro.github.io/heian-wallet/";
const GITHUB_URL = "https://github.com/de-lightpro/heian-wallet";

const stats = [
  { value: "8 441", label: "lignes de code" },
  { value: "20", label: "écrans" },
  { value: "8", label: "jours de développement" },
  { value: "100+", label: "paiements par lot" },
];

const features = [
  { icon: "📄", title: "Paiements par lot (CSV)", desc: "Envoyez plus de 100 paiements en une seule opération à partir d'un fichier CSV." },
  { icon: "🔄", title: "Échange intégré", desc: "Swap directement dans le wallet avec contrôle du slippage." },
  { icon: "🔑", title: "Wallet HD multi-comptes", desc: "Plusieurs comptes dérivés d'une seule phrase de récupération (BIP-39/44)." },
  { icon: "🔌", title: "Connecteur dApp", desc: "Provider EIP-6963 pour se connecter aux applications décentralisées." },
  { icon: "🏷️", title: "Résolution ENS", desc: "Envoyez à un nom lisible plutôt qu'à une adresse hexadécimale." },
  { icon: "🧾", title: "Mémos TIP-20", desc: "Ajoutez un mémo à chaque paiement pour suivre vos factures." },
  { icon: "📊", title: "Export des transactions", desc: "Exportez votre historique au format CSV pour votre comptabilité." },
  { icon: "🌙", title: "Mode sombre & responsive", desc: "Interface adaptée à tous les écrans, clair ou sombre." },
  { icon: "👥", title: "Gestion des contacts", desc: "Enregistrez vos destinataires fréquents pour payer en deux clics." },
];

const security = [
  { icon: "🔐", title: "Chiffrement AES-256-GCM", desc: "Vos clés sont chiffrées localement avant tout stockage." },
  { icon: "🗝️", title: "Non-custodial", desc: "Vos clés restent chez vous. Personne d'autre n'y a accès." },
  { icon: "🚫", title: "Aucune donnée transmise", desc: "Aucune télémétrie, aucun suivi, aucun serveur tiers." },
  { icon: "🛡️", title: "Aucun code distant", desc: "Tout le code est embarqué dans l'extension, rien n'est chargé à distance." },
  { icon: "⏱️", title: "Verrouillage automatique", desc: "Le wallet se verrouille après une période d'inactivité." },
  { icon: "📚", title: "Standards BIP-39/44", desc: "Compatible avec les standards ouverts de l'industrie." },
];

const steps = [
  { title: "Installer l'extension", desc: "Ajoutez HEIAN Wallet à Chrome en un clic." },
  { title: "Créer ou importer un wallet", desc: "Générez une nouvelle phrase de récupération ou importez la vôtre." },
  { title: "Se connecter au réseau Tempo", desc: "Le wallet se connecte au réseau Tempo (Testnet à ce jour)." },
  { title: "Connecter vos dApps", desc: "Autorisez les applications compatibles à interagir avec votre wallet." },
];

const HeianWalletPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="px-4 md:px-12 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs">
            Extension Chrome • Open source • Gratuit
          </span>
          <h1 className="text-4xl md:text-6xl text-gradient mb-4">Le wallet conçu pour Tempo</h1>
          <p className="text-muted-foreground mb-8">
            HEIAN Wallet est un wallet non-custodial, gratuit et open source, pour payer, échanger et gérer vos
            comptes sur la blockchain Tempo — avec paiements par lot, mémos de facturation et connexion aux dApps.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              <Download className="w-4 h-4" />
              Installer gratuitement
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-md border border-accent/50 text-accent font-medium text-sm hover:bg-accent/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code source
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-shine rounded-xl border border-border p-5 text-center">
              <div className="text-3xl text-gradient-gold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 md:px-12 py-16 bg-card/50">
        <h2 className="text-3xl md:text-4xl text-center text-gradient mb-10">Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="card-shine rounded-xl border border-border p-6 hover:border-primary/30 transition-colors">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-lg mt-2 mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section id="security" className="px-4 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl text-center text-gradient mb-3">Sécurité</h2>
        <p className="text-center text-sm text-muted-foreground mb-10">Pensé pour que vous gardiez le contrôle.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {security.map((f) => (
            <div key={f.title} className="card-shine rounded-xl border border-border p-6">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-lg mt-2 mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-4 md:px-12 py-16 bg-card/50">
        <h2 className="text-3xl md:text-4xl text-center text-gradient mb-10">Comment ça marche</h2>
        <ol className="max-w-3xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card-shine rounded-xl border border-border p-5 flex gap-4 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-12 py-16">
        <div className="max-w-2xl mx-auto card-shine rounded-xl border border-primary/20 p-8 text-center">
          <h2 className="text-2xl md:text-3xl text-gradient mb-3">Prêt à essayer HEIAN Wallet ?</h2>
          <p className="text-sm text-muted-foreground mb-6">Gratuit, open source et sans compte à créer.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Installer
            </a>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Page officielle
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeianWalletPage;
