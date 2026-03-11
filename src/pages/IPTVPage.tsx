import { useState } from "react";
import { Play, Tv, Globe, Star } from "lucide-react";

interface Channel {
  name: string;
  category: string;
  streamUrl: string;
  country: string;
}

const channels: Channel[] = [
  // Algériennes
  { name: "ENTV (Programme National)", category: "algerie", streamUrl: "https://www.youtube.com/embed/DnCKgsvHmPA?autoplay=1", country: "🇩🇿" },
  { name: "Canal Algérie", category: "algerie", streamUrl: "https://www.youtube.com/embed/6FROq_vJVWs?autoplay=1", country: "🇩🇿" },
  { name: "TV Coran Algérie", category: "algerie", streamUrl: "https://www.youtube.com/embed/QwNFGYBJ2NE?autoplay=1", country: "🇩🇿" },
  { name: "Echorouk TV", category: "algerie", streamUrl: "https://www.youtube.com/embed/S10fH7t0wSI?autoplay=1", country: "🇩🇿" },
  { name: "Ennahar TV", category: "algerie", streamUrl: "https://www.youtube.com/embed/u4r8M9vl8L0?autoplay=1", country: "🇩🇿" },
  { name: "El Bilad TV", category: "algerie", streamUrl: "https://www.youtube.com/embed/6s3bRn0f3qg?autoplay=1", country: "🇩🇿" },
  // Infos internationales
  { name: "Al Jazeera Arabic", category: "info", streamUrl: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1", country: "🇶🇦" },
  { name: "France 24 Français", category: "info", streamUrl: "https://www.youtube.com/embed/l8PMl7tUDIE?autoplay=1", country: "🇫🇷" },
  { name: "RT France", category: "info", streamUrl: "https://www.youtube.com/embed/1gRnuEB1MqY?autoplay=1", country: "🇷🇺" },
  { name: "TRT World", category: "info", streamUrl: "https://www.youtube.com/embed/CV5Fooi8YJE?autoplay=1", country: "🇹🇷" },
  { name: "Sky News Arabia", category: "info", streamUrl: "https://www.youtube.com/embed/mS6BJYvl1tE?autoplay=1", country: "🇦🇪" },
  // Religieuses
  { name: "Makkah Live", category: "religion", streamUrl: "https://www.youtube.com/embed/bB4cARj0nEY?autoplay=1", country: "🇸🇦" },
  { name: "Madinah Live", category: "religion", streamUrl: "https://www.youtube.com/embed/MASVKZ7ZTXM?autoplay=1", country: "🇸🇦" },
  { name: "Quran TV", category: "religion", streamUrl: "https://www.youtube.com/embed/rLcuw1zeJhQ?autoplay=1", country: "🇸🇦" },
  // Sport
  { name: "beIN Sports News", category: "sport", streamUrl: "https://www.youtube.com/embed/ha3sYr-jRBg?autoplay=1", country: "🇶🇦" },
];

const categories = [
  { id: "all", label: "Toutes", icon: Tv },
  { id: "algerie", label: "Algérie", icon: Star },
  { id: "info", label: "Infos", icon: Globe },
  { id: "religion", label: "Religion", icon: Star },
  { id: "sport", label: "Sport", icon: Play },
];

const IPTVPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeChannel, setActiveChannel] = useState<Channel>(channels[0]);

  const filtered = activeCategory === "all"
    ? channels
    : channels.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Player */}
      <div className="w-full bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video">
            <iframe
              src={activeChannel.streamUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title={activeChannel.name}
            />
          </div>
          <div className="px-4 py-3 flex items-center gap-3">
            <span className="text-2xl">{activeChannel.country}</span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{activeChannel.name}</h2>
              <p className="text-xs text-muted-foreground">En direct</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((channel) => (
            <button
              key={channel.name}
              onClick={() => setActiveChannel(channel)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                activeChannel.name === channel.name
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <span className="text-2xl">{channel.country}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">{channel.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{channel.category === "algerie" ? "Algérie" : channel.category === "info" ? "International" : channel.category}</p>
              </div>
              <Play className="w-4 h-4 text-primary shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPTVPage;
