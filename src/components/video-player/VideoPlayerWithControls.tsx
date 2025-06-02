"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon, type PlayIconHandle } from "./PlayIcon";

interface VideoPlayerWithControlsProps {
  url: string;
}

export default function VideoPlayerWithControls({
  url,
}: VideoPlayerWithControlsProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playIconRef = useRef<PlayIconHandle>(null);

  function handleHover() {
    if (playIconRef.current) {
      playIconRef.current.startAnimation();
    }
  }

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
    <div className="relative group rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Video player"
      >
        <source
          src={url}
          type={url.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
        />
        <source src={url} type="video/webm; codecs=vp8,vorbis" />
        <source src={url} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay that shows when video is paused */}
      {!isPlaying && (
        <div
          onMouseEnter={handleHover}
          onClick={togglePlay}
          className="absolute inset-0 bg-black/40 transition-opacity duration-200"
        />
      )}

      <button
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black/90 transition-opacity duration-200 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          "Pause"
        ) : (
          <div>
            <PlayIcon size={20} ref={playIconRef} />
            Play
          </div>
        )}
      </button>
    </div>
  );
}
