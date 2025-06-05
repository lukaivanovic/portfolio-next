"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure video is loaded before playing
            if (video.readyState >= 2) {
              video.play().catch((error) => {
                if (error.name !== "AbortError") {
                  console.error("Error playing video:", error);
                }
              });
            } else {
              // If video isn't loaded yet, wait for it
              video.addEventListener(
                "canplay",
                () => {
                  video.play().catch((error) => {
                    if (error.name !== "AbortError") {
                      console.error("Error playing video:", error);
                    }
                  });
                },
                { once: true }
              );
            }
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      preload="metadata"
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
  );
}
