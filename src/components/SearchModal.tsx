import { useState } from "react";
import { Search, X } from "lucide-react";
import { movies, Movie } from "@/data/movies";
import MovieCard from "./MovieCard";

interface SearchModalProps {
  onClose: () => void;
  onPlay: (movie: Movie) => void;
}

const SearchModal = ({ onClose, onPlay }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const filtered = query.length > 0
    ? movies.filter(
        (m) =>
          m.title.toLowerCase().includes(query.toLowerCase()) ||
          m.genre.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 pt-20">
        <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 mb-8">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un film, une série, un genre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
          <button onClick={onClose}>
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>

        {query.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {filtered.length} résultat{filtered.length !== 1 ? "s" : ""} pour "{query}"
            </p>
            <div className="flex flex-wrap gap-4">
              {filtered.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onPlay={onPlay} />
              ))}
              {filtered.length === 0 && (
                <p className="text-muted-foreground text-center w-full py-12">
                  Aucun résultat trouvé
                </p>
              )}
            </div>
          </div>
        )}

        {query.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
            <p className="text-muted-foreground">Tapez pour rechercher dans le catalogue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
