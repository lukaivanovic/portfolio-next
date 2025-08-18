import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Build a lookup table that maps angle -> normalized arc length
export function buildEllipseArcLUT(a: number, b: number, steps = 1000) {
  const lut: { angle: number; s: number }[] = [];
  let total = 0;

  let prevX = a;
  let prevY = 0;

  for (let i = 1; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    const x = a * Math.cos(theta);
    const y = b * Math.sin(theta);

    const dx = x - prevX;
    const dy = y - prevY;
    const ds = Math.sqrt(dx * dx + dy * dy);

    total += ds;
    lut.push({ angle: theta, s: total });

    prevX = x;
    prevY = y;
  }

  // normalize arc length to [0,1]
  for (const item of lut) {
    item.s /= total;
  }

  return lut;
}

// Given progress t in [0,1], find angle that corresponds
export function progressToAngle(
  t: number,
  lut: { angle: number; s: number }[]
) {
  // binary search in LUT
  let lo = 0;
  let hi = lut.length - 1;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (lut[mid].s < t) lo = mid + 1;
    else hi = mid;
  }

  const prev = lut[Math.max(0, lo - 1)];
  const curr = lut[lo];

  // linear interpolate between prev and curr
  const span = curr.s - prev.s;
  const factor = span > 0 ? (t - prev.s) / span : 0;
  return prev.angle + factor * (curr.angle - prev.angle);
}
