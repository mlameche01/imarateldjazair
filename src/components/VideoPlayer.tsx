import { X } from "lucide-react";
import { Movie } from "@/data/movies";

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

const VideoPlayer = ({ movie, onClose }: VideoPlayerProps) => {
  const videoSrc = `${movie.video}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="fixed inset-0 z-[100] bg-background/98 flex flex-col">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h2 className="text-2xl md:text-3xl tracking-wide">{movie.title}</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden">
          <iframe
            src={videoSrc}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            title={movie.title}
          />
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
