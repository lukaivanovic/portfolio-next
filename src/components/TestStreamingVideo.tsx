"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Hls: any;
  }
}

export default function TestStreamingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const url = "https://cdn.ivanovicluka.co/buena-websitestream.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check for native HLS support (Safari/iOS)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else {
      // Use globally loaded Hls.js
      if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

        return () => {
          hls.destroy();
        };
      }
    }
  }, [url]);

  return (
    <video
      id="video"
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      style={{ width: "100%" }}
      className="rounded-lg overflow-hidden border border-neutral-200"
    />
  );
}
