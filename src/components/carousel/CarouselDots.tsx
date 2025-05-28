import React from "react";
import { motion } from "motion/react";
import CarouselDot from "./CarouselDot";

interface CarouselDotsProps {
  numberOfSlides: number;
  activeIndex: number;
  updateActiveIndex: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  numberOfSlides,
  activeIndex,
  updateActiveIndex,
}) => {
  return (
    <div className="flex items-center justify-center gap-[6px]">
      {Array.from({ length: numberOfSlides }).map((_, index) => (
        <CarouselDot
          key={index}
          active={index === activeIndex}
          onClick={() => updateActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
