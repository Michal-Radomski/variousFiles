//* https://chatgpt.com
import React from "react";
import { Canvas } from "@react-three/fiber";
import * as d3 from "d3";

const D3Three2 = (): JSX.Element => {
  // Set up the D3 chart rendering
  const d3Ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    // Sample data for the D3.js chart (simple bar chart)
    const data = [5, 10, 15, 20, 25, 30, 35];

    const svg = d3.select(d3Ref.current).attr("width", 400).attr("height", 400);

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((_d, i) => String(i)))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)] as number[])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (_d, i) => x(String(i)) as unknown as string)
      .attr("y", (d) => y(d))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d))
      .attr("fill", "#69b3a2");

    svg
      .append("g")
      .selectAll(".tick")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => x(String(i))! + x.bandwidth() / 2)
      .attr("y", (d) => y(d) - 5)
      .text((d) => d)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "#333");

    svg
      .append("g")
      .selectAll("path")
      .data([data])
      .enter()
      .append("path")
      .attr(
        "d",
        (d3 as any)
          .line()
          .x((_d: number, i: number) => x(String(i))! + x.bandwidth() / 2)
          .y((d: d3.NumberValue) => y(d))
      )
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
        <svg ref={d3Ref}></svg>
      </div>
      <Canvas style={{ height: "100vh", width: "100%" }}>
        {/* Set up the 3D Scene using Three.js */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default D3Three2;
