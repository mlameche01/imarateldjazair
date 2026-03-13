import { useState, useRef } from "react";
import { Radio, Volume2, VolumeX, X } from "lucide-react";

type RadioType = "stream" | "iframe";

interface RadioItem {
  name: string;
  url: string;
  type: RadioType;
}

const radios: RadioItem[] = [
  { name: "Radio Tunisie", url: "http://rtstream.tanitweb.com/nationale", type: "stream" },
  { name: "Radio Bahdja", url: "https://my.radioalgerie.dz/player/bahdja.html", type: "iframe" },
  { name: "Radio Tindouf", url: "https://my.radioalgerie.dz/player/tindouf.html", type: "iframe" },
  { name: "Radio Médéa", url: "https://my.radioalgerie.dz/player/medea.html", type: "iframe" },
  { name: "Radio Culturelle", url: "http://rtstream.tanitweb.com/culturelle", type: "stream" },
  { name: "Europe 1", url: "https://europe1.leanstream.co/europe1-midfi.mp3", type: "stream" },
  { name: "France Inter", url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3", type: "stream" },
  { name: "RTL", url: "https://streamer-02.rtl.fr/rtl-1-44-128", type: "stream" },
];

const RadiosPage = () => {
  const [currentRadio, setCurrentRadio] = useState<string | null>(null);
  const [iframeRadio, setIframeRadio] = useState<RadioItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playRadio = (radio: RadioItem) => {
    // Stop any current audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIframeRadio(null);

    if (radio.type === "iframe") {
      setIframeRadio(radio);
      setCurrentRadio(radio.name);
      setIsPlaying(true);
    } else {
      const audio = new Audio(radio.url);
      audio.play();
      audioRef.current = audio;
      setCurrentRadio(radio.name);
      setIsPlaying(true);
    }
  };

  const stopRadio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIframeRadio(null);
    setIsPlaying(false);
    setCurrentRadio(null);
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-gradient mb-2">📻 Radios</h1>
        <p className="text-muted-foreground mb-10">Radios algériennes et internationales en direct</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {radios.map((radio) => (
            <button
              key={radio.name}
              onClick={() =>
                currentRadio === radio.name ? stopRadio() : playRadio(radio)
              }
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                currentRadio === radio.name
                  ? "border-primary bg-primary/10 glow"
                  : "border-border card-shine hover:border-primary/30"
              }`}
            >
              <div className={`p-2 rounded-full ${currentRadio === radio.name ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium flex-1">{radio.name}</span>
              {currentRadio === radio.name && (
                <Volume2 className="w-4 h-4 text-primary animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Iframe player for Algerian radios */}
        {iframeRadio && (
          <div className="mt-6 rounded-xl overflow-hidden border border-border">
            <div className="flex items-center justify-between bg-secondary/50 px-4 py-2">
              <span className="text-sm font-medium">{iframeRadio.name}</span>
              <button onClick={stopRadio} className="p-1 rounded-full hover:bg-secondary">
                <X className="w-4 h-4" />
              </button>
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
              <Volume2 className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">{currentRadio}</span>
            </div>
            <button onClick={stopRadio} className="p-2 rounded-full hover:bg-secondary">
              <VolumeX className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadiosPage;
