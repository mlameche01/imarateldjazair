// Page "Atlas Browser" (remplace l'ancienne page Articles).
// Renseigner ici les vraies URLs de téléchargement une fois les fichiers hébergés.
const VERSION = "1.3.0";
const WINDOWS_URL = "#"; // ex: https://.../atlas-browser-1.3.0-win-x64.zip
const LINUX_URL = "#"; // ex: https://.../atlas-browser_1.3.0_amd64.deb

const AtlasMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#102b37" />
    <path
      d="M32 10v44M10 32h44M17 17l30 30M47 17L17 47"
      stroke="#2ee6d6"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const features = [
  { n: "01", tag: "Bloquer", title: "Pubs et traqueurs", desc: "Bloqués grâce à une liste de domaines intégrée au navigateur." },
  { n: "02", tag: "Choisir", title: "Images à la demande", desc: "Un simple interrupteur pour charger ou non les images." },
  { n: "03", tag: "Installer", title: "Chromium intégré", desc: "Aucun navigateur tiers n'est nécessaire : Atlas embarque son moteur." },
];

const ArticlesPage = () => {
  return (
    <div id="top" className="min-h-screen pt-16 bg-[#102b37] text-[#e8f3f2] scroll-smooth">
      {/* Barre interne */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2">
            <AtlasMark />
            <span className="text-2xl">Atlas</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#principes" className="hover:text-white">Pourquoi Atlas</a>
            <a href="#telecharger" className="hover:text-white">Téléchargements</a>
          </nav>
          <a
            href="#telecharger"
            className="rounded-full bg-[#2ee6d6] text-[#102b37] px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            Télécharger ↘
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#2ee6d6] mb-4">WINDOWS · LINUX</p>
          <h1 className="text-6xl md:text-8xl leading-none mb-6">
            Le web. <em className="text-[#2ee6d6] not-italic md:italic">Moins lourd.</em>
          </h1>
          <p className="text-white/70 max-w-md mb-8">
            Atlas bloque les publicités et les traqueurs, et vous laisse décider si les images
            doivent se charger. Vous gardez la main sur votre consommation de données.
          </p>
          <a
            href="#telecharger"
            className="inline-block rounded-full bg-[#2ee6d6] text-[#102b37] px-6 py-3 font-semibold hover:opacity-90"
          >
            Choisir ma version ↓
          </a>
          <p className="text-xs text-white/50 mt-4">Chromium intégré · pas besoin de Chrome</p>
          <p className="text-xs text-white/40 mt-2 max-w-md">
            Moins de requêtes superflues, sans pourcentage d'économie inventé.
          </p>
        </div>

        {/* Maquette du navigateur */}
        <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <div className="ml-3 flex-1 rounded-full bg-white/10 px-4 py-1 text-xs text-white/50">
              Rechercher ou saisir une adresse
            </div>
          </div>
          <div className="p-10 flex flex-col items-center text-center gap-4">
            <AtlasMark className="w-20 h-20" />
            <div className="w-full max-w-xs rounded-full bg-white/10 px-4 py-2 text-sm text-white/50">
              Rechercher sur le web
            </div>
            <p className="text-xs text-[#2ee6d6]">● Blocage des publicités activé</p>
            <p className="text-sm text-white/60">Vos données, à votre rythme.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi Atlas */}
      <section id="principes" className="max-w-6xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <p className="text-xs tracking-[0.3em] text-white/50 mb-3">02 — POURQUOI ATLAS</p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-4xl md:text-6xl">
            La donnée mobile n'est pas <em className="text-[#2ee6d6]">infinie.</em>
          </h2>
          <a href="#telecharger" className="text-sm text-[#2ee6d6] hover:underline">
            Découvrez les versions ↗
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.n} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs tracking-widest text-[#2ee6d6] mb-4">{f.n} / {f.tag.toUpperCase()}</p>
              <h3 className="text-2xl mb-2">{f.title}</h3>
              <p className="text-sm text-white/65">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/45 mt-6">
          Les économies dépendent des pages, du réseau et des réglages ; le blocage peut casser certains sites.
        </p>
      </section>

      {/* Téléchargements */}
      <section id="telecharger" className="max-w-6xl mx-auto px-4 md:px-8 py-16 border-t border-white/10">
        <p className="text-xs tracking-[0.3em] text-white/50 mb-3">03 — TÉLÉCHARGEMENTS · VERSION {VERSION}</p>
        <h2 className="text-4xl md:text-6xl mb-10">
          Choisissez votre <em className="text-[#2ee6d6]">Atlas.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <h3 className="text-3xl mb-1">Windows</h3>
            <p className="text-sm text-white/60 mb-4">Application autonome · 64 bits · archive ZIP (~146 Mo)</p>
            <ul className="text-sm text-white/70 space-y-1 mb-6">
              <li>• Windows 10 / 11 x64</li>
              <li>• Extraire l'archive, puis lancer <code className="text-[#2ee6d6]">Atlas Browser.exe</code></li>
            </ul>
            <a
              href={WINDOWS_URL}
              className="mt-auto text-center rounded-full bg-[#2ee6d6] text-[#102b37] px-6 py-3 font-semibold hover:opacity-90"
            >
              Télécharger pour Windows ↓
            </a>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <h3 className="text-3xl mb-1">Linux</h3>
            <p className="text-sm text-white/60 mb-4">Paquet Debian / Ubuntu · 64 bits · .deb (~99 Mo)</p>
            <ul className="text-sm text-white/70 space-y-1 mb-6">
              <li>• Installer via le gestionnaire de logiciels, ou :</li>
              <li>
                <code className="text-[#2ee6d6] break-all">sudo apt install ./atlas-browser_{VERSION}_amd64.deb</code>
              </li>
            </ul>
            <a
              href={LINUX_URL}
              className="mt-auto text-center rounded-full bg-[#2ee6d6] text-[#102b37] px-6 py-3 font-semibold hover:opacity-90"
            >
              Télécharger pour Linux ↓
            </a>
          </div>
        </div>
        <p className="text-xs text-white/45 mt-6 max-w-2xl">
          Atlas est basé sur Chromium, projet open source. Cette première version n'est pas signée
          numériquement : Windows SmartScreen peut afficher un avertissement.
        </p>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <AtlasMark className="w-6 h-6" />
            <span>Le web, moins lourd.</span>
          </div>
          <span>© Atlas Browser · Windows &amp; Linux</span>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;
