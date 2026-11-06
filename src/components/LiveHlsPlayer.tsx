import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveHlsPlayerProps {
  src: string;
  name: string;
  officialUrl?: string;
}

const LiveHlsPlayer = ({ src, name, officialUrl }: LiveHlsPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setFailed(false);
    let hls: Hls | undefined;
    const timeout = window.setTimeout(() => setFailed(true), 25000);
    const onPlaying = () => {
      window.clearTimeout(timeout);
      setFailed(false);
    };
    const onError = () => {
      window.clearTimeout(timeout);
      setFailed(true);
    };
    video.addEventListener("playing", onPlaying);
    video.addEventListener("error", onError);
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          onError();
          hls?.destroy();
        }
      });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
    } else {
      onError();
    }
    return () => {
      window.clearTimeout(timeout);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("error", onError);
      hls?.destroy();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [src, attempt]);

  return (
    <div className="relative w-full h-full bg-background">
      <video ref={videoRef} aria-label={name} className="w-full h-full" controls autoPlay muted playsInline />
      {failed && (
        <div className="absolute inset-0 bg-background/95 flex flex-col items-center justify-center gap-4 p-4 text-center">
          <p role="alert" className="text-sm text-muted-foreground">Le direct est momentanément indisponible.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="secondary" onClick={() => setAttempt((value) => value + 1)}><RefreshCw />Réessayer</Button>
            {officialUrl && <Button asChild variant="outline"><a href={officialUrl} target="_blank" rel="noopener noreferrer"><ExternalLink />Site officiel</a></Button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveHlsPlayer;