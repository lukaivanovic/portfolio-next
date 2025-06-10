"use client";

import { useState, useRef, useEffect } from "react";
import { Dialog } from "./Dialog";
import { DialogControls } from "./DialogControls";
import { DialogContent } from "./types";
import "./dialog-preview.css";

export function DialogPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const [params, setParams] = useState<DialogContent>({
    type: "modal",
    side: "center",
    align: "center",
    animation: "zoom",
    animationDuration: 500,
    animationEasing: "ease",
    overlay: true,
    overlayClickCloses: true,
    clickOutsideCloses: true,
    preventInteractionsOutside: false,
    triggerClickOpens: true,
    preventScrolling: false,
    trigger: true,
  });

  const handleLayoutChange = (newLayout: string) => {
    switch (newLayout) {
      case "one":
        setParams({
          type: "modal",
          side: "left",
          align: "top",
          animation: "zoom",
          animationDuration: 500,
          animationEasing: "ease",
          overlay: true,
          overlayClickCloses: true,
          clickOutsideCloses: true,
          preventInteractionsOutside: false,
          triggerClickOpens: true,
          preventScrolling: false,
          trigger: true,
        });
        setTimeout(() => {
          setIsOpen(true);
        }, 300);
        break;
      case "two":
        setParams({
          type: "modal",
          side: "right",
          align: "bottom",
          animation: "fade",
          animationDuration: 500,
          animationEasing: "ease",
          overlay: true,
          overlayClickCloses: true,
          clickOutsideCloses: true,
          preventInteractionsOutside: false,
          triggerClickOpens: true,
          preventScrolling: false,
          trigger: true,
        });
        setTimeout(() => {
          setIsOpen(true);
        }, 300);
        break;
      case "three":
        setParams({
          type: "sheet",
          side: "bottom",
          align: "bottom",
          animation: "slide-in-bottom",
          animationDuration: 500,
          animationEasing: "ease",
          overlay: true,
          overlayClickCloses: true,
          clickOutsideCloses: true,
          preventInteractionsOutside: false,
          triggerClickOpens: true,
          preventScrolling: false,
          trigger: true,
        });
        setTimeout(() => {
          setIsOpen(true);
        }, 300);
        break;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
          setTimeout(() => {
            setIsOpen(true);
          }, 500);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    if (previewRef.current) {
      observer.observe(previewRef.current);
    }

    return () => observer.disconnect();
  }, [hasBeenInView]);

  const toggleSettings = () => {
    setSettingsOpened(!settingsOpened);
  };

  return (
    <div
      className="flex flex-col bg-neutral-100 rounded-md  text-neutral-900 aspect-[16/10] overflow-hidden"
      ref={previewRef}
    >
      <div className="relative shadow-2xl flex-grow">
        <div className="absolute left-3 top-3 z-40">
          <button
            onClick={toggleSettings}
            className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors text-neutral-600 cursor-pointer z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z" />
            </svg>
          </button>

          {settingsOpened && (
            <div className="absolute left-0 top-10 w-[192px] text-xs">
              <DialogControls
                model={params}
                onModelChange={setParams}
                isOpen={isOpen}
              />
            </div>
          )}
        </div>

        <div
          className="relative flex flex-col flex-grow h-full scale-90"
          onClick={() => setSettingsOpened(false)}
        >
          <div className="flex-grow flex items-center justify-center">
            <Dialog
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onOpen={() => setIsOpen(true)}
              content={params}
              trigger={
                <button className="trigger relative px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors text-nowrap">
                  Click me!
                </button>
              }
              overlay={
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black/40" />
              }
            >
              <div
                className={`content ww-dialog bg-white p-6 rounded-lg shadow-lg ${
                  params.type === "sheet" &&
                  (params.side === "top" || params.side === "bottom")
                    ? "w-full rounded-none"
                    : params.type === "sheet" &&
                      (params.side === "left" || params.side === "right")
                    ? "h-full rounded-none w-[320px]"
                    : params.type === "modal"
                    ? "w-[440px]"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-neutral-900">
                    Confirm Action
                  </div>
                  <button
                    className="text-neutral-500 hover:text-neutral-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <div className="text-neutral-600 text-md">
                    Are you sure you want to perform this action? This cannot be
                    undone.
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <button
                    className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium">
                    Confirm
                  </button>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
