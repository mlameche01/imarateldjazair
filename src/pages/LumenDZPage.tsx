import { ExternalLink } from "lucide-react";

const LumenDZPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-4 px-4 flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold text-gradient">LumenDZ</h1>
        <a
          href="https://lumendz.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-semibold hover:bg-primary/30 transition-colors"
        >
          Ouvrir en plein écran <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <div className="flex-1 w-full rounded-xl overflow-hidden border border-primary/20 shadow-[0_0_40px_rgba(0,255,240,0.08)] min-h-[calc(100vh-12rem)]">
        <iframe
          src="https://lumendz.lovable.app/"
          title="LumenDZ"
          className="w-full h-full min-h-[calc(100vh-12rem)] border-0"
          allow="fullscreen; clipboard-write; autoplay; encrypted-media"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LumenDZPage;
