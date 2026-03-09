import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { Movie } from "@/data/movies";

interface CategoryRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
}

const CategoryRow = ({ title, movies, onPlay }: CategoryRowProps) => {
  return (
    <section className="px-4 md:px-12 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xl md:text-2xl tracking-wide">{title}</h3>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;
