import type { FC } from "react";
import { FaStar } from "react-icons/fa6";
import { GiPolarStar } from "react-icons/gi";
import { cn } from "cn";

type Props = {
  size: number;
  type: 'star' | 'sparkle' | 'circle';
  color: 'gray' | 'green' | 'blue' | 'pink' | 'yellow';
  opacity?: number;
  duration?: number;
  delay?: number;
};


export const Graphic: FC<Props> = ({
  size,
  color,
  type,
  opacity = 1,
  duration = 5,
  delay = 0,
}) => {
  const baseClasses = 'animate-pulse';

  const baseSVGColors = {
    "text-gray-500": color === "gray",
    "text-emerald-700": color === "green",
    "text-blue-700": color === "blue",
    "text-pink-700": color === "pink",
    "text-amber-600": color === "yellow",
  };

  const baseDivColors = {
    "bg-gray-500": color === "gray",
    "bg-emerald-700": color === "green",
    "bg-blue-700": color === "blue",
    "bg-pink-700": color === "pink",
    "bg-amber-600": color === "yellow",
  };

  const baseStyles = {
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    borderRadius: (type === 'circle') ? 1000 : 0,
  };

  return (
    <>
      {(type === "star") && (
        <FaStar
          style={baseStyles}
          className={cn(baseClasses, baseSVGColors)}
        />
      )}

      {(type === "sparkle") && (
        <GiPolarStar
          style={baseStyles}
          className={cn(baseClasses, baseSVGColors)}
        />
      )}

      {(type === "circle") && (
        <div
          style={baseStyles}
          className={cn(baseClasses, baseDivColors)}
        />
      )}
    </>
  );
};
