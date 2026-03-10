import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  links: { label: string; url: string }[];
  tokenUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Le Messager — TheTruthIsFromGod.com',
    description: 'Figure spirituelle désignée comme « Le Messager de la fin des temps ». Contenu basé sur des interprétations personnelles de textes religieux, analyses symboliques et réflexions liées aux événements contemporains.',
    links: [{ label: "Site officiel", url: "https://thetruthisfromgod.com/2025/02/16/le-messager-de-la-fin-des-temps/" }],
    tokenUrl: "https://thirdweb.com/polygon/0xDeb54D08E77037c504D3196cB7b2CffaD636Fd41",
  },
  {
    title: 'Mounir le Choyé',
    description: 'Projet humain et inspirant dédié à la mise en avant du travail, des actions et des initiatives positives de Mounir. Message clair visant à inspirer, motiver et apporter du positif.',
    links: [
      { label: "Odysee", url: "https://odysee.com/@mounir01:6" },
      { label: "YouTube", url: "https://youtube.com/@imarateldjazair" },
    ],
    tokenUrl: "https://thirdweb.com/polygon/0x27950e5cC9fbF2B27F8a0193e8216F4E2ab49f53",
  },
  {
    title: 'The Mahdi Has Appeared',
    description: 'Chaîne dédiée à révéler et éclairer les signes majeurs de la fin des temps à travers des analyses spirituelles approfondies. Preuves scripturaires et références religieuses.',
    links: [{ label: "YouTube", url: "https://www.youtube.com/channel/UCyZ9Sq0VhcRYC6Yo9kvZiug/join" }],
    tokenUrl: "https://thirdweb.com/polygon/0xaB786126c36f027A004833c914f1380997c23Fbd",
  },
  {
    title: 'He is the Mahdi.',
    description: 'Chaîne YouTube proposant des vidéos centrées sur l\'analyse et la réflexion autour de la spiritualité, textes religieux et questions d\'interprétation.',
    links: [{ label: "YouTube", url: "https://www.youtube.com/channel/UCIAlWFphI25U4_DNYeH1qcw" }],
    tokenUrl: "https://thirdweb.com/polygon/0x0463382bFABE75951ddC1e438EF5819729e81B83",
  },
  {
    title: 'Les Sept Chevaliers',
    description: 'Espace de réflexion et de partage consacré aux questions spirituelles, aux signes des temps et à la compréhension des messages religieux à la lumière des événements actuels.',
    links: [{ label: "YouTube", url: "https://www.youtube.com/@askrimohamed12" }],
    tokenUrl: "https://thirdweb.com/polygon/0x8aa3b6FfBADE75758f6A2Cc55a8d28d3a32B5aab",
  },
  {
    title: 'Alpha77',
    description: 'Exploration profonde des enjeux spirituels contemporains à travers une analyse réfléchie des signes des temps. Enseignements fondés sur des références religieuses et écrits sacrés.',
    links: [{ label: "YouTube", url: "https://www.youtube.com/@Alpha-qt5th" }],
  },
];

const ReligionPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-gradient mb-2">🕌 Religion & Spiritualité</h1>
        <p className="text-muted-foreground mb-10">Projets spirituels soutenus par l'écosystème</p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="card-shine rounded-xl border border-border p-6 md:p-8">
              <h2 className="text-xl md:text-2xl text-gradient-gold mb-3">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
                {project.tokenUrl && (
                  <a
                    href={project.tokenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-xs text-accent hover:bg-accent/20 transition-colors"
                  >
                    🪙 Soutenir
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReligionPage;
