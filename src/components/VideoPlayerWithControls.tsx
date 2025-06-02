"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerWithControlsProps {
  url: string;
}

export default function VideoPlayerWithControls({
  url,
}: VideoPlayerWithControlsProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error playing video:", error);
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        aria-label="Video player"
        className="rounded-lg overflow-hidden border border-neutral-200"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay that shows when video is paused */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-200" />
      )}

      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-md bg-black/50 text-white hover:bg-black/70 text-sm font-medium transition-opacity duration-200 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
