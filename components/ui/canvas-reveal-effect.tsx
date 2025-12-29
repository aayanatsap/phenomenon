"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CanvasRevealEffectClient = dynamic(
  () => import("./canvas-reveal-effect-client").then((mod) => ({ default: mod.CanvasRevealEffectClient })),
  { ssr: false }
);

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-full relative bg-white w-full", containerClassName)} />;
  }

  return (
    <CanvasRevealEffectClient
      animationSpeed={animationSpeed}
      opacities={opacities}
      colors={colors}
      containerClassName={containerClassName}
      dotSize={dotSize}
      showGradient={showGradient}
    />
  );
};
