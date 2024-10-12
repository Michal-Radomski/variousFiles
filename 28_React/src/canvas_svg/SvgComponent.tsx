import React from "react";

interface SvgProps {
  color_1: string;
  color_2: string;
}

const SvgComponent: React.FC<SvgProps> = ({ color_1, color_2 }): JSX.Element => {
  return (
    <svg width="200" height="200" style={{ border: "1px solid black" }}>
      <rect x="20" y="20" width="160" height="160" fill={color_1} />
      <circle cx="100" cy="100" r="50" fill={color_2} />
    </svg>
  );
};

export default SvgComponent;
