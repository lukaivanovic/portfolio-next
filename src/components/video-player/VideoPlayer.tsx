"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  url: string;
  aspectRatio?: "video" | "square" | "portrait";
}

export default function VideoPlayer({
  url,
  aspectRatio = "video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  const aspectRatioClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]",
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      className={`rounded-lg overflow-hidden border border-neutral-200 relative ${aspectRatioClass}`}
    >
      {isInView ? (
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster={`${url}#t=0.1`}
        >
          <source
            src={url}
            type={url.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
          />
          <source src={url} type="video/webm; codecs=vp8,vorbis" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="w-full h-full bg-neutral-100"
          style={{
            backgroundImage: `url(${url}#t=0.1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
}
