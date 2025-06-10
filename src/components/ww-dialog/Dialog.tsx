"use client";

import { ReactNode, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import styles from "./Dialog.module.css";
import { DialogContent } from "./types";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  content: DialogContent;
  children: ReactNode;
  trigger?: ReactNode;
  overlay?: ReactNode;
}

interface AnimationVariants {
  initial: {
    opacity: number;
    x?: string;
    y?: string;
    scale?: number;
  };
  animate: {
    opacity: number;
    x?: string;
    y?: string;
    scale?: number;
  };
  exit: {
    opacity: number;
    x?: string;
    y?: string;
    scale?: number;
  };
}

const getDialogStyle = (
  type: "modal" | "sheet",
  side?: string,
  align?: string,
  customPositionX?: string,
  customPositionY?: string
) => {
  const style: Record<string, string> = {
    position: "absolute",
  };

  if (type === "modal") {
    switch (side) {
      case "left":
        style.left = "0";
        break;
      case "right":
        style.right = "0";
        break;
      case "custom":
        style.left = customPositionX || "0";
        break;
      default:
        style.left = "50%";
        style["--translate-x"] = "-50%";
        break;
    }

    switch (align) {
      case "top":
        style.top = "0";
        break;
      case "bottom":
        style.bottom = "0";
        break;
      case "custom":
        style.top = customPositionY || "0";
        break;
      default:
        style.top = "50%";
        style["--translate-y"] = "-50%";
        break;
    }
  } else {
    switch (side) {
      case "left":
        Object.assign(style, {
          height: "100%",
          top: "0",
          bottom: "0",
          left: "0",
        });
        break;
      case "right":
        Object.assign(style, {
          height: "100%",
          top: "0",
          bottom: "0",
          right: "0",
        });
        break;
      case "top":
        Object.assign(style, {
          width: "100%",
          top: "0",
          left: "0",
          right: "0",
        });
        break;
      case "bottom":
        Object.assign(style, {
          width: "100%",
          bottom: "0",
          left: "0",
          right: "0",
        });
        break;
      default:
        Object.assign(style, {
          height: "100%",
          top: "0",
          bottom: "0",
          right: "0",
        });
        break;
    }
  }

  return style;
};

const getAnimationVariants = (
  animation?: string,
  slideInDirection?: string
): Variants => {
  const duration = 0.3;
  const easing = [0.4, 0, 0.2, 1];

  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (animation === "slide-in") {
    const direction = slideInDirection || "bottom";
    if (direction === "left" || direction === "right") {
      const value = direction === "left" ? "-50%" : "50%";
      variants.initial = { ...variants.initial, x: value };
      variants.animate = { ...variants.animate, x: "0" };
      variants.exit = { ...variants.exit, x: value };
    } else {
      const value = direction === "top" ? "-50%" : "50%";
      variants.initial = { ...variants.initial, y: value };
      variants.animate = { ...variants.animate, y: "0" };
      variants.exit = { ...variants.exit, y: value };
    }
  } else if (animation === "zoom") {
    variants.initial = { ...variants.initial, scale: 0 };
    variants.animate = { ...variants.animate, scale: 1 };
    variants.exit = { ...variants.exit, scale: 0 };
  }

  return variants;
};

export function Dialog({
  isOpen,
  onClose,
  onOpen,
  content,
  children,
  trigger,
  overlay,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const handleOverlayClick = useCallback(() => {
    if (content.overlayClickCloses) {
      onClose();
    }
  }, [content.overlayClickCloses, onClose]);

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (
        content.clickOutsideCloses &&
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [content.clickOutsideCloses, onClose]
  );

  const contentStyle = useMemo(
    () =>
      getDialogStyle(
        content.type,
        content.side,
        content.align,
        content.customPositionX,
        content.customPositionY
      ),
    [
      content.type,
      content.side,
      content.align,
      content.customPositionX,
      content.customPositionY,
    ]
  );

  const animationVariants = useMemo(
    () => getAnimationVariants(content.animation, content.side),
    [content.animation, content.side]
  );

  return (
    <div role="dialog">
      {trigger && (
        <div onClick={() => content.triggerClickOpens && onOpen()}>
          {trigger}
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {content.clickOutsideCloses && (
              <div
                className={styles["pointer-capture"]}
                onClick={handleOutsideClick}
              />
            )}

            {content.overlay && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleOverlayClick}
                style={{ position: "absolute", inset: 0 }}
              >
                {overlay}
              </motion.div>
            )}

            <motion.div
              ref={dialogRef}
              role="dialog"
              className={styles["ww-dialog"]}
              style={
                {
                  ...contentStyle,
                } as React.CSSProperties
              }
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
