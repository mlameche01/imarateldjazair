import { useState } from "react";
import { ExternalLink, Play, Tv, Globe, Star } from "lucide-react";
import LiveHlsPlayer from "@/components/LiveHlsPlayer";
import { Button } from "@/components/ui/button";

interface Channel {
  name: string;
  category: string;
  streamUrl: string;
  country: string;
  type: "youtube" | "hls" | "external";
  officialUrl?: string;
}

const channels: Channel[] = [
  { name: "AL24 News", category: "info", streamUrl: "https://cdn.live.easybroadcast.io/abr_corp/66_al24_u4yga6h/corp/66_al24_u4yga6h_240p/chunks.m3u8", country: "🇩🇿", type: "hls" },
  { name: "Al Jazeera Arabic", category: "info", streamUrl: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1", country: "🇶🇦", type: "youtube" },
  { name: "France 24 Français", category: "info", streamUrl: "https://live.france24.com/hls/live/2037179/F24_FR_HI_HLS/master_2300.m3u8", country: "🇫🇷", type: "hls", officialUrl: "https://www.france24.com/fr/direct" },
  { name: "RT France", category: "info", streamUrl: "https://rt-fra.rttv.com/dvr/rtfrance/playlist.m3u8", country: "\uD83C\uDDF7\uD83C\uDDFA", type: "hls", officialUrl: "https://francais.rt.com/en-direct" },
  { name: "TV5 Monde", category: "info", streamUrl: "https://www.tv5monde.com/", country: "\uD83C\uDDEB\uD83C\uDDF7", type: "external", officialUrl: "https://www.tv5monde.com/" },
  { name: "One FM", category: "suisse", streamUrl: "https://onefmhd.vedge.infomaniak.com/livecast/ik:onefmhd/manifest.m3u8", country: "🇨🇭", type: "hls" },
  { name: "Event TV", category: "suisse", streamUrl: "https://edge13.vedge.infomaniak.com/livecast/ik:event/manifest.m3u8", country: "🇨🇭", type: "hls" },
  { name: "Compack Media", category: "suisse", streamUrl: "https://edge17.vedge.infomaniak.com/livecast/ik:compack_media_1/playlist.m3u8", country: "🇨🇭", type: "hls" },
  { name: "LFM TV", category: "suisse", streamUrl: "https://lfmhd.vedge.infomaniak.com/livecast/lfmhd/playlist.m3u8", country: "🇨🇭", type: "hls" },
  { name: "Rakuten Ciné", category: "suisse", streamUrl: "https://zylo-cinenanar-rakuten.amagi.tv/playlist.m3u8", country: "🌍", type: "hls" },
];

const categories = [
  { id: "all", label: "Toutes", icon: Tv },
  { id: "info", label: "Infos", icon: Globe },
  { id: "suisse", label: "Suisse FR", icon: Star },
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
      <div className="w-full bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video">
            {activeChannel.type === "external" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-4 text-center">
                <h2 className="text-2xl">TV5 Monde</h2>
                <p className="text-sm text-muted-foreground">TV5 Monde ne permet pas la lecture de ce flux sur ce site.</p>
                <Button asChild><a href={activeChannel.streamUrl} target="_blank" rel="noopener noreferrer"><ExternalLink />Ouvrir TV5 Monde</a></Button>
              </div>
            ) : activeChannel.type === "youtube" ? (
              <iframe
                src={activeChannel.streamUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title={activeChannel.name}
              />
            ) : (
              <LiveHlsPlayer src={activeChannel.streamUrl} name={activeChannel.name} officialUrl={activeChannel.officialUrl} />
            )}
          </div>
          <div className="px-4 py-3 flex items-center gap-3">
            <span className="text-2xl">{activeChannel.country}</span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{activeChannel.name}</h2>
              <p className="text-xs text-muted-foreground">En direct</p>
            </div>
            {activeChannel.officialUrl && <Button asChild variant="outline" size="sm" className="ml-auto"><a href={activeChannel.officialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Site officiel ${activeChannel.name}`}><ExternalLink /><span className="hidden sm:inline">Site officiel</span></a></Button>}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((channel) => (
            <Button
              key={channel.name}
              variant="secondary"
              onClick={() => setActiveChannel(channel)}
              className={`flex h-auto justify-start whitespace-normal items-center gap-3 p-4 rounded-lg border text-left transition-all ${
                activeChannel.name === channel.name
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <span className="text-2xl">{channel.country}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">{channel.name}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {channel.category === "suisse" ? "Suisse FR" : "International"}
                </p>
              </div>
              <Play className="w-4 h-4 text-primary shrink-0" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPTVPage;
