"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  url: string;
  aspectRatio: string;
}

export default function VideoPlayer({
  url,
  aspectRatio = "video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);

          if (entry.isIntersecting && videoRef.current) {
            const video = videoRef.current;
            if (video.readyState >= 2) {
              video.play().catch((error) => {
                console.error("Error playing video:", error);
              });
            } else {
              video.addEventListener(
                "canplay",
                () => {
                  video.play().catch((error) => {
                    console.error("Error playing video:", error);
                  });
                },
                { once: true }
              );
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoReady(true);
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-lg overflow-hidden border border-neutral-200 relative w-full`}
      style={{ aspectRatio: aspectRatio }}
    >
      <img
        src={`/thumbnails/${url}.png`}
        alt="Video thumbnail"
        className={`w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 object-cover transition-opacity duration-500 ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {isInView ? (
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={`/thumbnails/${url}.png`}
          onLoadedData={handleVideoLoad}
        >
          <source src={`cdn.ivanovicluka.co/${url}.mp4`} type={"video/mp4"} />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
}
