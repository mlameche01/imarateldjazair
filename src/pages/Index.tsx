import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryRow from "@/components/CategoryRow";
import VideoPlayer from "@/components/VideoPlayer";
import SearchModal from "@/components/SearchModal";
import AuthModal from "@/components/AuthModal";
import { movies, categories, Movie } from "@/data/movies";

const Index = () => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const handlePlay = (movie: Movie) => {
    setSearchOpen(false);
    setCurrentMovie(movie);
  };

  return (
    <div className="min-h-screen">
      <Navbar
        onSearchOpen={() => setSearchOpen(true)}
        onAuthOpen={() => setAuthOpen(true)}
      />

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

      <footer className="px-4 md:px-12 py-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl tracking-wide text-gradient mb-4">STREAMIX</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Le streaming gratuit financé par la publicité. Des milliers de films et séries à portée de clic.
          </p>
          <div className="flex gap-6 mt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Conditions</a>
            <a href="#" className="hover:text-foreground">Confidentialité</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>

      {currentMovie && (
        <VideoPlayer movie={currentMovie} onClose={() => setCurrentMovie(null)} />
      )}
      {searchOpen && (
        <SearchModal onClose={() => setSearchOpen(false)} onPlay={handlePlay} />
      )}
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </div>
  );
};

export default Index;
