//* https://www.perplexity.ai
import React from "react";
import * as d3 from "d3";
import * as THREE from "three";

function D3BarChart(): JSX.Element {
  const d3Ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const data = [
      { name: "A", value: 50 },
      { name: "B", value: 20 },
      { name: "C", value: 40 },
      { name: "D", value: 70 },
    ];

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(d3Ref.current);
    svg.selectAll("*").remove(); // Clear previous renderings

    svg.attr("width", width).attr("height", height);

    const x: d3.ScaleBand<string> = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)] as number[])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.name) as unknown as string)
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => y(0) - y(d.value))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));
  }, []);

  return <svg ref={d3Ref}></svg>;
}

function ThreeScene(): JSX.Element {
  const mountRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const width = 400;
    const height = 300;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Cube geometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = function (): void {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
}

const D3Three = (): JSX.Element => {
  return (
    <React.Fragment>
      <div>
        <h2>D3.js Bar Chart</h2>
        <D3BarChart />
        <h2>Three.js Rotating Cube</h2>
        <ThreeScene />
      </div>
    </React.Fragment>
  );
};

export default D3Three;
