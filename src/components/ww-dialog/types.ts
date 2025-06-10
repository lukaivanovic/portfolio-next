export interface DialogContent {
  type: "modal" | "sheet";
  side: "left" | "right" | "top" | "bottom" | "center";
  align: "top" | "bottom" | "center";
  customPositionX?: string;
  customPositionY?: string;
  animation: "zoom" | "fade" | "slide-in-bottom";
  animationDuration: number;
  animationEasing: string;
  overlay: boolean;
  overlayClickCloses: boolean;
  clickOutsideCloses: boolean;
  preventInteractionsOutside: boolean;
  triggerClickOpens: boolean;
  preventScrolling: boolean;
  trigger: boolean;
}
