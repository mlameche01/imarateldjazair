import { useState } from "react";
import { ExternalLink, Tv } from "lucide-react";

// Plateformes gratuites, sans abonnement. Ajoutez-en d'autres ici.
const SOURCES = [
  {
    id: "arte",
    label: "ARTE (FR)",
    title: "ARTE.tv — cinéma, séries et documentaires",
    desc: "Plateforme gratuite et sans compte : films, séries, documentaires et direct, en français.",
    url: "https://www.arte.tv/fr/",
  },
  {
    id: "arte-direct",
    label: "ARTE Direct",
    title: "ARTE — chaîne en direct",
    desc: "La chaîne ARTE en direct, gratuite, en français.",
    url: "https://www.arte.tv/fr/direct/",
  },
  {
    id: "f24-fr",
    label: "France 24 (FR)",
    title: "France 24 — en direct en français",
    desc: "Information en continu en français, gratuite.",
    url: "https://www.france24.com/fr/direct",
  },
  {
    id: "f24-ar",
    label: "فرانس 24 (AR)",
    title: "فرانس 24 — بث مباشر بالعربية",
    desc: "قناة إخبارية مجانية بث مباشر باللغة العربية.",
    url: "https://www.france24.com/ar/live",
  },
];

const CinemaPage = () => {
  const [current, setCurrent] = useState(SOURCES[0]);
  const [showFrame, setShowFrame] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20 pb-4 px-4 flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold text-gradient">Cinéma & TV</h1>
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-semibold hover:bg-primary/30 transition-colors"
        >
          Ouvrir <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {SOURCES.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setCurrent(s);
              setShowFrame(false);
            }}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              current.id === s.id
                ? "text-primary bg-primary/10 border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {!showFrame ? (
        <div className="card-shine rounded-xl border border-primary/20 p-8 text-center max-w-xl mx-auto mt-6">
          <Tv className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl text-gradient mb-2">{current.title}</h2>
          <p className="text-sm text-muted-foreground mb-6">
            {current.desc} Certains sites interdisent l'affichage dans une autre page : si « Afficher ici » reste vide,
            utilisez « Ouvrir ».
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Ouvrir
            </a>
            <button
              onClick={() => setShowFrame(true)}
              className="px-6 py-2.5 rounded-md border border-accent/50 text-accent font-medium text-sm hover:bg-accent/10 transition-colors"
            >
              Afficher ici
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full rounded-xl overflow-hidden border border-primary/20 min-h-[calc(100vh-14rem)]">
          <iframe
            key={current.id}
            src={current.url}
            title={current.title}
            className="w-full h-full min-h-[calc(100vh-14rem)] border-0"
            allow="fullscreen; autoplay; encrypted-media; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default CinemaPage;
