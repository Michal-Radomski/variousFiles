import React from "react";

interface CanvasSvgProps {
  width: number;
  height: number;
  color_1: string;
  color_2: string;
}

const Canvas: React.FC<CanvasSvgProps> = ({ width, height, color_1, color_2 }): JSX.Element => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef?.current as HTMLCanvasElement;
    if (canvas) {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      if (context) {
        // Draw a circle
        context.beginPath();
        context.arc(100, 100, 40, 0, 2 * Math.PI);
        context.fillStyle = color_1;
        context.fill();
        context.stroke();

        // Draw SVG
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                             <rect width="100" height="100" fill="${color_2}" />
                           </svg>`;

        const svgBlob: Blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url: string = URL.createObjectURL(svgBlob);

        const svgImage: HTMLImageElement = new Image();
        svgImage.onload = (): void => {
          context.drawImage(svgImage, 150, 50); // Draw SVG at specified coordinates
          URL.revokeObjectURL(url); // Clean up the URL
        };

        svgImage.src = url; // Set the source to the blob URL
      }
    }
  }, [color_1, color_2]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
