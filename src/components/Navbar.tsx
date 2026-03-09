import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

interface NavbarProps {
  onSearchOpen: () => void;
  onAuthOpen: () => void;
}

const Navbar = ({ onSearchOpen, onAuthOpen }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-gradient cursor-pointer">
          STREAMIX
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Accueil</a>
          <a href="#" className="hover:text-foreground transition-colors">Films</a>
          <a href="#" className="hover:text-foreground transition-colors">Séries</a>
          <a href="#" className="hover:text-foreground transition-colors">Ma Liste</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onSearchOpen}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onAuthOpen}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm bg-background/95 backdrop-blur-sm">
          <a href="#" className="py-2 text-muted-foreground hover:text-foreground">Accueil</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-foreground">Films</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-foreground">Séries</a>
          <a href="#" className="py-2 text-muted-foreground hover:text-foreground">Ma Liste</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
