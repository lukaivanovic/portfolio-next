import React, { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

interface CarouselDotProps {
  active: boolean;
  onClick: () => void;
}

const CarouselDot: React.FC<CarouselDotProps> = ({ active, onClick }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (active) {
      animate(
        "#bg",
        {
          x: 32,
        },
        { duration: 3.7, ease: "easeOut" }
      );
      animate(scope.current, {
        width: 32,
      });
    } else {
      animate("#bg", {
        x: 0,
      });
      animate(scope.current, {
        width: 16,
      });
    }
  }, [active]);

  return (
    <div
      className="relative h-1 w-4 rounded-full bg-neutral-600 cursor-pointer overflow-hidden"
      ref={scope}
      onClick={onClick}
    >
      <div
        id="bg"
        className="absolute top-0 left-0 w-full translate-x-[-32px] h-full bg-white"
      ></div>
    </div>
  );
};

export default CarouselDot;
