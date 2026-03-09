import { Play } from "lucide-react";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

const MovieCard = ({ movie, onPlay }: MovieCardProps) => {
  return (
    <div
      className="group relative flex-shrink-0 w-[140px] md:w-[200px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
      onClick={() => onPlay(movie)}
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-primary glow">
            <Play className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium truncate">{movie.title}</p>
        <p className="text-xs text-muted-foreground">{movie.year} · {movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
