import { useEffect, useState, useRef } from "react";
import { ExternalLink, Radio, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type RadioType = "stream" | "iframe";

interface RadioItem {
  name: string;
  url: string;
  type: RadioType;
  officialUrl?: string;
}

const radios: RadioItem[] = [
  { name: "Chaîne 1", url: "https://my.radioalgerie.dz/player/chaine1.html", type: "iframe" },
  { name: "Radio Bahdja", url: "https://my.radioalgerie.dz/player/bahdja.html", type: "iframe" },
  { name: "Radio Tindouf", url: "https://my.radioalgerie.dz/player/tindouf.html", type: "iframe" },
  { name: "Radio Médéa", url: "https://my.radioalgerie.dz/player/medea.html", type: "iframe" },
  { name: "Radio Culturelle", url: "https://my.radioalgerie.dz/player/culture.html", type: "iframe" },
  { name: "Europe 1", url: "https://stream.europe1.fr/europe1.mp3", type: "stream", officialUrl: "https://www.europe1.fr/" },
  { name: "France Inter", url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3", type: "stream" },
  { name: "RTL", url: "https://icecast.rtl.fr/rtl-1-44-128", type: "stream", officialUrl: "https://www.rtl.fr/" },
];

const RadiosPage = () => {
  const [currentRadio, setCurrentRadio] = useState<string | null>(null);
  const [iframeRadio, setIframeRadio] = useState<RadioItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorRadio, setErrorRadio] = useState<RadioItem | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => () => {
    audioRef.current?.pause();
    audioRef.current = null;
  }, []);

  const playRadio = (radio: RadioItem) => {
    // Stop any current audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");
      audioRef.current.load();
      audioRef.current = null;
    }
    setIframeRadio(null);
    setErrorRadio(null);
    setIsPlaying(false);

    if (radio.type === "iframe") {
      setIframeRadio(radio);
      setCurrentRadio(radio.name);
      setIsPlaying(true);
    } else {
      const audio = new Audio(radio.url);
      audioRef.current = audio;
      setCurrentRadio(radio.name);
      const fail = () => {
        if (audioRef.current !== audio) return;
        setIsPlaying(false);
        setErrorRadio(radio);
      };
      audio.addEventListener("error", fail);
      audio.addEventListener("playing", () => {
        if (audioRef.current !== audio) return;
        setIsPlaying(true);
        setErrorRadio(null);
      });
      audio.play().catch(fail);
    }
  };

  const stopRadio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");
      audioRef.current.load();
      audioRef.current = null;
    }
    setIframeRadio(null);
    setIsPlaying(false);
    setCurrentRadio(null);
    setErrorRadio(null);
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-gradient mb-2">📻 Radios</h1>
        <p className="text-muted-foreground mb-10">Radios algériennes et internationales en direct</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {radios.map((radio) => (
            <Button
              key={radio.name}
              onClick={() =>
                currentRadio === radio.name ? stopRadio() : playRadio(radio)
              }
              className={`flex h-auto justify-start whitespace-normal items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                currentRadio === radio.name
                  ? "border-primary bg-primary/10 glow"
                  : "border-border card-shine hover:border-primary/30"
              }`}
            >
              <div className={`p-2 rounded-full ${currentRadio === radio.name ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium flex-1">{radio.name}</span>
              {currentRadio === radio.name && isPlaying && (
                <Volume2 className="w-4 h-4 text-primary animate-pulse" />
              )}
            </Button>
          ))}
        </div>

        {errorRadio && <div role="alert" className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <p>La lecture de {errorRadio.name} est indisponible.</p>
          <Button variant="secondary" size="sm" onClick={() => playRadio(errorRadio)}>Réessayer</Button>
          {errorRadio.officialUrl && <Button asChild variant="outline" size="sm"><a href={errorRadio.officialUrl} target="_blank" rel="noopener noreferrer"><ExternalLink />Site officiel</a></Button>}
        </div>}

        {/* Iframe player for Algerian radios */}
        {iframeRadio && (
          <div className="mt-6 rounded-xl overflow-hidden border border-border">
            <div className="flex items-center justify-between bg-secondary/50 px-4 py-2">
              <span className="text-sm font-medium">{iframeRadio.name}</span>
              <Button variant="ghost" size="icon" aria-label="Arrêter la radio" onClick={stopRadio}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <iframe
              src={iframeRadio.url}
              className="w-full h-[200px] border-0"
              allow="autoplay; encrypted-media"
              title={iframeRadio.name}
            />
          </div>
        )}

        {/* Bottom bar for stream radios */}
        {currentRadio && !iframeRadio && (
          <div className="fixed bottom-0 left-0 right-0 glass border-t border-border p-4 flex items-center justify-between z-50">
            <div className="flex items-center gap-3">
              <Volume2 className={`w-5 h-5 text-primary ${isPlaying ? "animate-pulse" : ""}`} />
              <span className="text-sm font-medium">{currentRadio}</span>
            </div>
            <Button variant="ghost" size="icon" aria-label="Arrêter la radio" onClick={stopRadio}>
              <VolumeX className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadiosPage;
