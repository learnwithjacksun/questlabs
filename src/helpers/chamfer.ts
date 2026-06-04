export type ChamferCorner =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export function chamferSize(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

/** Sharp-corner clip-path for the chamfered corner shape. */
export function getChamferClipPath(
  corner: ChamferCorner = "top-right",
  chamfer: number | string = 24,
): string {
  const s = chamferSize(chamfer);

  switch (corner) {
    case "top-right":
      return `polygon(0 0, calc(100% - ${s}) 0, 100% ${s}, 100% 100%, 0 100%)`;
    case "top-left":
      return `polygon(${s} 0, 100% 0, 100% 100%, 0 100%, 0 ${s})`;
    case "bottom-right":
      return `polygon(0 0, 100% 0, 100% calc(100% - ${s}), calc(100% - ${s}) 100%, 0 100%)`;
    case "bottom-left":
      return `polygon(0 0, 100% 0, 100% 100%, ${s} 100%, 0 calc(100% - ${s}))`;
  }
}
