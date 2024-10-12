import React from "react";

interface CanvasProps {
  width: number;
  height: number;
  color: string;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, color }): JSX.Element => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef?.current as HTMLCanvasElement;
    if (canvas) {
      const context = canvas?.getContext("2d") as CanvasRenderingContext2D;
      if (context) {
        // Draw a circle
        context.beginPath();
        context.arc(50, 50, 40, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.stroke();
      }
    }
  }, [color]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
