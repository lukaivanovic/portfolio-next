"use client";

import { useRef } from "react";
import { motion } from "motion/react";

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        playsInline
        muted
        loop
        preload="metadata"
        autoPlay={false}
        aria-label="Video player"
        className="rounded-lg overflow-hidden border border-neutral-200"
        poster={`${url}#t=0.1`}
      >
        <source
          src={url}
          type={url.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
        />
        <source src={url} type="video/webm; codecs=vp8,vorbis" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        aria-label="Play/Pause video"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    </div>
  );
}
