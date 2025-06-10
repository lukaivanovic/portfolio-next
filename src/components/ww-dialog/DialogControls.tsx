"use client";

import { useState } from "react";
import { DialogContent } from "./types";

interface DialogControlsProps {
  model: DialogContent;
  onModelChange: (model: DialogContent) => void;
  isOpen: boolean;
}

export function DialogControls({
  model,
  onModelChange,
  isOpen,
}: DialogControlsProps) {
  const updateType = (type: "modal" | "sheet") => {
    const newModel = { ...model };
    if (type === "modal" && model.type === "sheet") {
      newModel.side = "center";
      newModel.align = "center";
    } else if (type === "sheet" && model.type === "modal") {
      newModel.side = "right";
    }
    newModel.type = type;
    onModelChange(newModel);
  };

  const updateModel = (key: string, value: any) => {
    onModelChange({ ...model, [key]: value });
  };

  return (
    <div className="bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-md">
      <div className="p-2 space-y-2">
        <div>
          <div className="flex rounded-md overflow-hidden p-0.5 gap-0.5 h-6 bg-neutral-800">
            <button
              onClick={() => updateType("modal")}
              className={`flex-1 text-xs transition-colors rounded-sm flex items-center justify-center ${
                model.type === "modal"
                  ? "bg-neutral-700 text-neutral-100"
                  : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              Modal
            </button>
            <button
              onClick={() => updateType("sheet")}
              className={`flex-1 text-xs transition-colors rounded-sm flex items-center justify-center ${
                model.type === "sheet"
                  ? "bg-neutral-700 text-neutral-100"
                  : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              Sheet
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 border-t border-neutral-800 space-y-2">
        {model.type === "modal" ? (
          <>
            {/* Side Selection */}
            <div>
              <div className="flex rounded-md overflow-hidden bg-neutral-800 p-0.5 gap-0.5 h-6">
                <button
                  onClick={() => updateModel("side", "left")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.side === "left"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 14V2h1v12H2Z"
                      clipRule="evenodd"
                    />
                    <path d="M5 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
                <button
                  onClick={() => updateModel("side", "center")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.side === "center"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Z" />
                    <path
                      fillRule="evenodd"
                      d="M7.5 14V2h1v12h-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => updateModel("side", "right")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.side === "right"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13 14V2h1v12h-1Z"
                      clipRule="evenodd"
                    />
                    <path d="M5 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Align Selection */}
            <div>
              <div className="flex rounded-md overflow-hidden bg-neutral-800 p-0.5 gap-0.5 h-6">
                <button
                  onClick={() => updateModel("align", "top")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.align === "top"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 2h12v1H2V2Z"
                      clipRule="evenodd"
                    />
                    <path d="M9 5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2Z" />
                  </svg>
                </button>
                <button
                  onClick={() => updateModel("align", "center")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.align === "center"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 7.5h12v1H2v-1Z"
                      clipRule="evenodd"
                    />
                    <path d="M9 5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2Z" />
                  </svg>
                </button>
                <button
                  onClick={() => updateModel("align", "bottom")}
                  className={`flex-1 flex items-center rounded justify-center py-1 text-xs transition-colors ${
                    model.align === "bottom"
                      ? "bg-neutral-700 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 13H2v1h12v-1Z"
                      clipRule="evenodd"
                    />
                    <path d="M7 5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7Z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="flex rounded-md overflow-hidden bg-neutral-800 p-0.5 gap-0.5">
              <button
                onClick={() => updateModel("side", "left")}
                className={`flex-1 py-1 rounded flex items-center justify-center text-xs transition-colors ${
                  model.side === "left"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                Left
              </button>
              <button
                onClick={() => updateModel("side", "top")}
                className={`flex-1 py-1 rounded flex items-center justify-center text-xs transition-colors ${
                  model.side === "top"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                Top
              </button>
              <button
                onClick={() => updateModel("side", "right")}
                className={`flex-1 py-1 rounded flex items-center justify-center text-xs transition-colors ${
                  model.side === "right"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                Right
              </button>
              <button
                onClick={() => updateModel("side", "bottom")}
                className={`flex-1 py-1 rounded flex items-center justify-center text-xs transition-colors ${
                  model.side === "bottom"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                Bottom
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-2 border-t border-neutral-800">
        <div className="flex rounded overflow-hidden bg-neutral-800 p-0.5 gap-0.5 mt-2">
          <button
            onClick={() => updateModel("animation", "fade")}
            className={`flex-1 py-1 text-xs rounded-md transition-colors ${
              model.animation === "fade"
                ? "bg-neutral-700 text-neutral-100"
                : "text-neutral-400 hover:bg-neutral-800"
            }`}
          >
            Fade
          </button>
          <button
            onClick={() => updateModel("animation", "zoom")}
            className={`flex-1 py-1 text-xs rounded-md transition-colors ${
              model.animation === "zoom"
                ? "bg-neutral-700 text-neutral-100"
                : "text-neutral-400 hover:bg-neutral-800"
            }`}
          >
            Zoom
          </button>
          <button
            onClick={() => updateModel("animation", "slide-in-bottom")}
            className={`flex-1 py-1 text-xs rounded-md transition-colors ${
              model.animation === "slide-in-bottom"
                ? "bg-neutral-700 text-neutral-100"
                : "text-neutral-400 hover:bg-neutral-800"
            }`}
          >
            Slide in
          </button>
        </div>
      </div>

      <div className="p-2 border-t border-neutral-800">
        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => updateModel("overlay", !model.overlay)}
            className="flex-1 px-3 h-6 rounded text-center bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-100"
          >
            Overlay
          </button>

          <button
            onClick={() => updateModel("trigger", !model.trigger)}
            className="flex-1 px-3 h-6 rounded text-center bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-100"
          >
            Trigger
          </button>
        </div>
      </div>

      <div className="p-2 border-t border-neutral-800">
        <ul>
          <li className="flex items-center justify-start rounded h-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
            <span className="text-neutral-100">Trigger</span>
          </li>

          <div style={{ opacity: isOpen ? 1 : 0.5 }}>
            <li className="flex items-center justify-start rounded h-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-neutral-100">Content</span>
            </li>

            <li className="flex items-center justify-start rounded h-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-neutral-100">Overlay</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
