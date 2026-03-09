import { X, Play, Pause, Maximize, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Movie } from "@/data/movies";

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

const VideoPlayer = ({ movie, onClose }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalDuration, setTotalDuration] = useState("0:00");
  const [muted, setMuted] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(formatTime(video.currentTime));
    };
    const onLoaded = () => setTotalDuration(formatTime(video.duration));
    const onEnded = () => setPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    video.currentTime = pct * video.duration;
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background/98 flex flex-col">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h2 className="text-2xl md:text-3xl tracking-wide">{movie.title}</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative w-full max-w-5xl aspect-video bg-card rounded-lg overflow-hidden group">
          <video
            ref={videoRef}
            src={movie.video}
            className="w-full h-full object-contain bg-black"
            onClick={togglePlay}
            playsInline
          />

          {/* Center play button when paused */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={togglePlay}
                className="p-6 rounded-full bg-primary/90 glow hover:bg-primary transition-colors pointer-events-auto"
              >
                <Play className="w-10 h-10 text-primary-foreground fill-current" />
              </button>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className="w-full h-1 bg-secondary rounded-full mb-3 cursor-pointer"
              onClick={seek}
            >
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="hover:text-primary transition-colors">
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button onClick={() => skip(-10)} className="hover:text-foreground transition-colors">
                  <SkipBack className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
                <button onClick={() => skip(10)} className="hover:text-foreground transition-colors">
                  <SkipForward className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
                <button onClick={() => { setMuted(!muted); if (videoRef.current) videoRef.current.muted = !muted; }} className="hover:text-foreground transition-colors">
                  {muted ? <VolumeX className="w-4 h-4 text-muted-foreground" /> : <Volume2 className="w-4 h-4 text-muted-foreground" />}
                </button>
                <span className="text-xs text-muted-foreground">{currentTime} / {totalDuration}</span>
              </div>
              <button onClick={() => videoRef.current?.requestFullscreen()} className="hover:text-foreground transition-colors">
                <Maximize className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-4 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <span className="text-primary font-semibold">{movie.rating}/10</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.genre}</span>
        </div>
        <p className="text-sm text-secondary-foreground">{movie.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
