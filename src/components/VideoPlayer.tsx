import { X, Play, Pause, Maximize, Volume2, SkipForward, SkipBack } from "lucide-react";
import { useState } from "react";
import { Movie } from "@/data/movies";

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

const VideoPlayer = ({ movie, onClose }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] bg-background/98 flex flex-col">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h2 className="text-2xl md:text-3xl tracking-wide">{movie.title}</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl aspect-video bg-card rounded-lg overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setPlaying(!playing)}
              className="p-6 rounded-full bg-primary/90 glow hover:bg-primary transition-colors"
            >
              {playing ? (
                <Pause className="w-10 h-10 text-primary-foreground" />
              ) : (
                <Play className="w-10 h-10 text-primary-foreground fill-current" />
              )}
            </button>
          </div>

          {/* Ad banner placeholder */}
          {!playing && (
            <div className="absolute top-4 left-4 right-4 bg-secondary/80 backdrop-blur rounded px-4 py-2 text-center text-xs text-muted-foreground">
              🎬 Publicité — Le streaming gratuit grâce à nos partenaires
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
            <div
              className="w-full h-1 bg-secondary rounded-full mb-3 cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress(((e.clientX - rect.left) / rect.width) * 100);
              }}
            >
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setPlaying(!playing)} className="hover:text-primary transition-colors">
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <SkipBack className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                <SkipForward className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Volume2 className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                <span className="text-xs text-muted-foreground">0:00 / {movie.duration}</span>
              </div>
              <Maximize className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-4 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <span className="text-primary font-semibold">{movie.rating}/10</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.genre}</span>
        </div>
        <p className="text-sm text-secondary-foreground">{movie.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
