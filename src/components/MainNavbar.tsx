import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Moon } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { path: "/", label: "Accueil" },
  { path: "/algiers-radio", label: "Audius" },
  { path: "/iptv", label: "IPTV" },
  { path: "/articles", label: "Articles" },
  { path: "/jetons", label: "Jetons" },
  { path: "/religion", label: "Religion" },
  { path: "/livre-blanc", label: "Livre Blanc" },
  { path: "/bitrefill", label: "Bitrefill" },
];

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Imarat El Djazair" className="w-8 h-8" />
          <span className="text-lg md:text-xl font-semibold tracking-wide text-gradient">
            Imarat El Djazair
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://gate.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            Gate Wallet
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-1 glass">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://gate.io"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm text-primary"
          >
            Gate Wallet
          </a>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
