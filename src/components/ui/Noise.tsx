import { useEffect, useRef } from "react";

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const resize = () => {
      canvas.width = patternSize;
      canvas.height = patternSize;
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(patternSize, patternSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }

      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    resize();
    loop();

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="pointer-events-none absolute inset-0 h-full w-full"
      ref={grainRef}
      style={{
        imageRendering: "pixelated",
        transform: `scale(${patternScaleX}, ${patternScaleY})`
      }}
    />
  );
};

export default Noise;
