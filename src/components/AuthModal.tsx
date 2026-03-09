import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md card-shine rounded-xl p-8 border border-border relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl tracking-wide mb-1">
          {mode === "login" ? "CONNEXION" : "INSCRIPTION"}
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          {mode === "login"
            ? "Connectez-vous pour accéder à votre compte"
            : "Créez un compte pour commencer à regarder"}
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === "signup" && (
            <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
              <User className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
              />
            </div>
          )}
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
            />
          </div>
          <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              placeholder="Mot de passe"
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity glow"
          >
            {mode === "login" ? "Se connecter" : "Créer un compte"}
          </button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-6">
          {mode === "login" ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-primary hover:underline"
          >
            {mode === "login" ? "S'inscrire" : "Se connecter"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
