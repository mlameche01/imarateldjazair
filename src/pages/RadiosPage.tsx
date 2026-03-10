import { useState, useRef } from "react";
import { Radio, Volume2, VolumeX } from "lucide-react";

const radios = [
  { name: "Radio Coran", url: "https://stream.radiojar.com/8s5u5tpdp7zuv" },
  { name: "Radio Bahdja", url: "https://webradio.tda.dz/Bahdja_64K.mp3" },
  { name: "Radio Tindouf", url: "https://webradio.tda.dz/Tindouf_64K.mp3" },
  { name: "Radio Médéa", url: "https://webradio.tda.dz/Medea_64K.mp3" },
  { name: "FIP", url: "https://icecast.radiofrance.fr/fip-midfi.mp3" },
  { name: "Europe 1", url: "https://europe1.leanstream.co/europe1-midfi.mp3" },
  { name: "France Inter", url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3" },
  { name: "RTL", url: "https://streamer-02.rtl.fr/rtl-1-44-128" },
];

const RadiosPage = () => {
  const [currentRadio, setCurrentRadio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playRadio = (url: string, name: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(url);
    audio.play();
    audioRef.current = audio;
    setCurrentRadio(name);
    setIsPlaying(true);
  };

  const stopRadio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
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
                currentRadio === radio.name ? stopRadio() : playRadio(radio.url, radio.name)
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

        {currentRadio && (
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
