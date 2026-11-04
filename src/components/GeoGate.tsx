import { useEffect, useState, type ReactNode } from "react";
import { ShieldAlert, Loader2 } from "lucide-react";

const CACHE_KEY = "geo-dz-check";

type GeoState = "loading" | "allowed" | "blocked";

/**
 * Restreint l'accès du site aux adresses IP algériennes.
 * Vérification côté client via ipapi.co (gratuit, sans clé).
 * En cas d'erreur réseau, l'accès est autorisé (fail-open)
 * pour ne jamais bloquer un visiteur algérien par accident.
 */
const GeoGate = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GeoState>(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached === "allowed" || cached === "blocked") return cached;
    return "loading";
  });

  useEffect(() => {
    if (state !== "loading") return;

    let cancelled = false;

    const check = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        clearTimeout(timeout);
        if (!res.ok) throw new Error("geo check failed");
        const data = await res.json();
        const result: GeoState =
          data?.country_code === "DZ" ? "allowed" : "blocked";
        if (!cancelled) {
          sessionStorage.setItem(CACHE_KEY, result);
          setState(result);
        }
      } catch {
        // Fail-open : ne jamais bloquer un Algérien à cause d'une panne du service
        if (!cancelled) {
          sessionStorage.setItem(CACHE_KEY, "allowed");
          setState("allowed");
        }
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, [state]);

  if (state === "loading") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-body text-sm">
          Vérification de votre localisation…
        </p>
      </div>
    );
  }

  if (state === "blocked") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="glass rounded-full p-6 glow">
          <ShieldAlert className="h-14 w-14 text-accent" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-gradient-gold tracking-wide">
          Accès réservé à l'Algérie
        </h1>
        <p className="text-muted-foreground font-body max-w-md leading-relaxed">
          Imarat El Djazair est un portail réservé aux visiteurs se connectant
          depuis l'Algérie. Votre adresse IP semble provenir d'un autre pays.
        </p>
        <p className="text-muted-foreground/60 font-body text-sm" dir="rtl">
          هذا الموقع مخصص للزوار من الجزائر فقط
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeoGate;
