import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import CarouselDot from "./CarouselDot";
import { CarouselItem } from "./Carousel";
import { progressToAngle } from "@/lib/utils";
import { buildEllipseArcLUT } from "@/lib/utils";

interface CarouselDotsProps {
  numberOfSlides: number;
  activeIndex: number;
  updateActiveIndex: (index: number) => void;
  items: CarouselItem[];
  progress: number;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  numberOfSlides,
  activeIndex,
  updateActiveIndex,
  items,
  progress,
}) => {
  const lut = buildEllipseArcLUT(3, 1, 2000);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setAngle(progressToAngle(progress / 100, lut));
  }, [progress]);

  const currentItem = items[activeIndex];
  const progressColor =
    currentItem?.progressColor || "rgba(255, 255, 255, 0.5)";

  return (
    <div className="relative flex items-center justify-center p-[3px]">
      {/* Progress Border Background */}
      <div className="absolute inset-0 rounded-full p-[2px]">
        {/* Progress border using conic gradient */}
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(var(--color-neutral-400) 0deg, var(--color-neutral-400) ${
              (angle * 180) / Math.PI
            }deg, rgba(0, 0, 0, 0.2) ${
              (angle * 180) / Math.PI
            }deg, rgba(0, 0, 0, 0.2) 360deg)`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Dots Container with transparent background to show border */}
      <div className="flex items-center justify-center gap-2 py-2 px-3 bg-white rounded-full relative z-10">
        {Array.from({ length: numberOfSlides }).map((_, index) => {
          const item = items[index];
          const isVideo = "fileName" in item;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => updateActiveIndex(index)}
              className={`cursor-pointer transition-all duration-200 ${
                isActive ? "scale-110" : "scale-100"
              }`}
            >
              {isVideo ? (
                // Play icon for video
                // <div
                //   className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[9px] transition-colors duration-200 ${
                //     isActive
                //       ? "border-l-black shadow-lg"
                //       : "border-l-black/50 backdrop-blur-sm"
                //   }`}
                // />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  fill="currentColor"
                  viewBox="0 0 6 6"
                  className={`${
                    isActive ? "text-neutral-400" : "text-neutral-400/40"
                  }`}
                >
                  <path d="M5.107 2.691c.23.142.23.476 0 .618L.853 5.933A.363.363 0 0 1 .3 5.624V.376C.3.092.611-.082.853.067l4.254 2.624Z" />
                </svg>
              ) : (
                // Circle for image
                <div
                  className={`w-[6px] h-[6px] rounded-full  transition-colors duration-200 ${
                    isActive
                      ? "bg-neutral-400  shadow-lg"
                      : "bg-neutral-400/40  backdrop-blur-sm"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselDots;
