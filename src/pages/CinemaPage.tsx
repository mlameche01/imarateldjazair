import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import VideoPlayer from "@/components/VideoPlayer";
import SearchModal from "@/components/SearchModal";
import { movies, categories, Movie } from "@/data/movies";

const CinemaPage = () => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handlePlay = (movie: Movie) => {
    setSearchOpen(false);
    setCurrentMovie(movie);
  };

  return (
    <div className="min-h-screen pt-16">
      <HeroBanner movie={movies[2]} onPlay={handlePlay} />

      <div className="-mt-16 relative z-10 pt-4">
        {categories.map((cat) => (
          <CategoryRow
            key={cat.name}
            title={cat.name}
            movies={cat.movies}
            onPlay={handlePlay}
          />
        ))}
      </div>

      {currentMovie && (
        <VideoPlayer movie={currentMovie} onClose={() => setCurrentMovie(null)} />
      )}
      {searchOpen && (
        <SearchModal onClose={() => setSearchOpen(false)} onPlay={handlePlay} />
      )}
    </div>
  );
};

export default CinemaPage;
