"use client";

import React, { useState, useEffect } from "react";
import CarouselDots from "./CarouselDots";
import { motion, AnimatePresence } from "motion/react";
import VideoPlayer from "@/components/video-player/VideoPlayer";

export interface CarouselImage {
  src: string;
  alt: string;
  progressColor?: string; // Optional custom progress bar color
  dotColor?: string;
}

export interface CarouselVideo {
  fileName: string;
  aspectRatio: string;
  alt: string;
  duration: number; // Custom duration in milliseconds
  progressColor?: string; // Optional custom progress bar color
  dotColor?: string;
}

export type CarouselItem = CarouselImage | CarouselVideo;

export interface CarouselProps {
  images: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  function updateActiveIndex(index: number): void {
    setActiveIndex(index);
    setProgress(0);
  }

  useEffect(() => {
    const currentItem = images[activeIndex];
    const isVideo = "fileName" in currentItem;

    // Use custom duration for videos, default 3500ms for images
    const slideDuration = isVideo ? currentItem.duration : 3500;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const linearProgress = Math.min(elapsed / slideDuration, 1);

      // Apply ease-out effect: starts fast, slows down towards the end
      const easeOutProgress = 1 - Math.pow(1 - linearProgress, 3);
      const progressPercent = easeOutProgress * 100;

      setProgress(progressPercent);

      if (elapsed >= slideDuration) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgress(0);
      }
    }, 10); // Update every 16ms for smooth progress bar

    return () => clearInterval(interval);
  }, [images, activeIndex]);

  const renderSlide = (item: CarouselItem, index: number) => {
    const isActive = index === activeIndex;
    const isVideo = "fileName" in item;

    if (isVideo) {
      return (
        <motion.div
          key={`video-${item.fileName}`}
          className="absolute w-full h-full"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <VideoPlayer
            url={item.fileName}
            aspectRatio={item.aspectRatio}
            className="w-full h-full"
          />
        </motion.div>
      );
    } else {
      return (
        <motion.img
          key={item.src}
          src={item.src}
          className="absolute max-w-full object-cover w-full h-full"
          style={{ transform: "none" }}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      );
    }
  };

  return (
    <div>
      <div className="relative main-image-container overflow-hidden rounded-lg aspect-[8/5] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {renderSlide(images[activeIndex], activeIndex)}
        </AnimatePresence>

        {/* Custom Indicators - positioned at bottom */}
        <div className="absolute bottom-4 left-0 right-0 z-10">
          <div className="flex justify-center">
            <CarouselDots
              numberOfSlides={images.length}
              activeIndex={activeIndex}
              updateActiveIndex={updateActiveIndex}
              items={images}
              progress={progress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
