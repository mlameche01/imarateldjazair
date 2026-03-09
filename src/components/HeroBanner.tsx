import { Play, Info } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { Movie } from "@/data/movies";

interface HeroBannerProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

const HeroBanner = ({ movie, onPlay }: HeroBannerProps) => {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <img
        src={heroBanner}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />

      <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 max-w-xl z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-wide mb-3">
          {movie.title}
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="text-primary font-semibold">{movie.rating}/10</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.genre}</span>
        </div>
        <p className="text-sm md:text-base text-secondary-foreground leading-relaxed mb-6 line-clamp-3">
          {movie.description}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity glow"
          >
            <Play className="w-5 h-5 fill-current" />
            Regarder
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-semibold hover:bg-secondary/80 transition-colors">
            <Info className="w-5 h-5" />
            Plus d'infos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
