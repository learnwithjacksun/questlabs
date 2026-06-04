import clsx from "clsx";
import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import {
  getChamferClipPath,
  type ChamferCorner,
} from "@/helpers/chamfer";

export type { ChamferCorner };

type ChamferOwnProps = {
  /** HTML element to render. Use "button" for buttons, "a" for links, etc. */
  as?: ElementType;
  /** Which corner is chamfered (cut). Default matches the reference: top-right. */
  corner?: ChamferCorner;
  /** Length of the diagonal cut (px number or any CSS length). */
  chamfer?: number | string;
};

export type ChamferProps<T extends ElementType = "div"> = ChamferOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ChamferOwnProps>;

export default function Chamfer<T extends ElementType = "div">({
  as,
  corner = "top-right",
  chamfer = 24,
  className,
  style,
  ...props
}: ChamferProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const clipPath = getChamferClipPath(corner, chamfer);

  return (
    <Component
      className={clsx(className)}
      style={
        {
          clipPath,
          WebkitClipPath: clipPath,
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  );
}
