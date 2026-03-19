import { useState, useRef, useEffect } from "react";
import { Play, Tv, Globe, Star } from "lucide-react";
import Hls from "hls.js";

interface Channel {
  name: string;
  category: string;
  streamUrl: string;
  country: string;
  type: "youtube" | "hls";
}

const channels: Channel[] = [
  { name: "Al Jazeera Arabic", category: "info", streamUrl: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1", country: "🇶🇦", type: "youtube" },
  { name: "France 24 Français", category: "info", streamUrl: "https://www.youtube.com/embed/l8PMl7tUDIE?autoplay=1", country: "🇫🇷", type: "youtube" },
  { name: "RT France", category: "info", streamUrl: "https://rt-fra.rttv.com/dvr/rtfrance/playlist.m3u8", country: "🇷🇺", type: "hls" },
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

const HlsPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full bg-black"
      controls
      autoPlay
      muted
    />
  );
};

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
            {activeChannel.type === "youtube" ? (
              <iframe
                src={activeChannel.streamUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title={activeChannel.name}
              />
            ) : (
              <HlsPlayer src={activeChannel.streamUrl} />
            )}
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
                <p className="text-xs text-muted-foreground capitalize">
                  {channel.category === "suisse" ? "Suisse FR" : "International"}
                </p>
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
