"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface VideoPlayerProps {
  url: string;
  aspectRatio: string | "video";
}

export default function VideoPlayer({
  url,
  aspectRatio = "video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"playing" | "paused">("paused");
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
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

  return (
    <div ref={containerRef} className="relative">
      {isInView ? (
        <video
          ref={videoRef}
          playsInline
          loop
          autoPlay={false}
          aria-label="Video player"
          className={`rounded-lg overflow-hidden border border-neutral-200 ${aspectRatio} w-full h-full`}
          poster={`${url}#t=0.1`}
          onLoadedData={() => {
            console.log("Video loaded successfully");
            if (videoRef.current) {
              const video = videoRef.current;
              video.currentTime = 0.1;
            }
          }}
          onError={(e) => {
            console.error("Error loading video:", e);
          }}
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
          className={`rounded-lg overflow-hidden border border-neutral-200 ${aspectRatio} bg-neutral-100 w-full`}
          style={{
            backgroundImage: `url(${url}#t=0.1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {status === "paused" && <div className="absolute inset-0 bg-black/30" />}
      <motion.div
        animate={status}
        variants={{
          playing: {
            bottom: 0,
            right: "0%",
            width: 120,
            height: 40,
            y: "-50%",
            x: "-20%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          paused: {
            bottom: "50%",
            right: "50%",
            width: 160,
            height: 64,
            y: "50%",
            x: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current?.play();
            setStatus("playing");
          } else {
            videoRef.current?.pause();
            setStatus("paused");
          }
        }}
        className="absolute bottom-0 right-0 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Play/Pause video"
      >
        {status === "paused" ? "Play video" : "Pause video"}
      </motion.div>
    </div>
  );
}
