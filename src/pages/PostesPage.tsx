import { ExternalLink } from "lucide-react";

const PostesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-bold text-gradient">Postes</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Accédez au site Postes en cliquant sur le bouton ci-dessous.
      </p>
      <a
        href="https://mounirlechoy.tangled.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Ouvrir Postes <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  );
};

export default PostesPage;
