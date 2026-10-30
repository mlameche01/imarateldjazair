import { useState } from "react";
import { ExternalLink, Tv } from "lucide-react";

const TOD_URL = "https://www.tod.tv/ar/tv-now";

const CinemaPage = () => {
  const [showFrame, setShowFrame] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20 pb-4 px-4 flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold text-gradient">Cinéma · TOD</h1>
        <a
          href={TOD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-semibold hover:bg-primary/30 transition-colors"
        >
          Ouvrir TOD <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {!showFrame ? (
        <div className="card-shine rounded-xl border border-primary/20 p-8 text-center max-w-xl mx-auto mt-6">
          <Tv className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl text-gradient mb-2">TOD — Télévision en direct</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Regardez les chaînes en direct sur TOD. Certains sites interdisent l'affichage dans une autre page :
            si l'aperçu ci-dessous reste vide, utilisez « Ouvrir TOD ».
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={TOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              Ouvrir TOD
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
        <div className="flex-1 w-full rounded-xl overflow-hidden border border-primary/20 min-h-[calc(100vh-12rem)]">
          <iframe
            src={TOD_URL}
            title="TOD"
            className="w-full h-full min-h-[calc(100vh-12rem)] border-0"
            allow="fullscreen; autoplay; encrypted-media; clipboard-write"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default CinemaPage;
