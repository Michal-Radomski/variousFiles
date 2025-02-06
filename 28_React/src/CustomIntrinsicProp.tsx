import React from "react";
import { createRoot } from "react-dom/client";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "custom-element": React.HTMLAttributes<CustomElement>;
    }
  }
}

class CustomElement extends HTMLElement {}

customElements.define("custom-element", CustomElement);

//* Shadow DOM
const ShadowDOM = (): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;

    // Check if shadowRoot already exists to avoid errors
    if (!container?.shadowRoot) {
      const shadowRoot = container?.attachShadow({ mode: "open" });
      const root = createRoot(shadowRoot as ShadowRoot);
      root.render(<button disabled={true}>Submit</button>);
    }
  }, []);

  return <div ref={containerRef}></div>;
};

//* Custom Intrinsic Prop
const CustomIntrinsicProp = (): JSX.Element => {
  //* A hexadecimal number
  const colorValue: number = 0x00ff00;
  const colorString: string = "#" + colorValue.toString(16).padStart(6, "0");

  return (
    <React.Fragment>
      <p style={{ color: colorString }}>CustomIntrinsicProp</p>
      <ShadowDOM />
      <custom-element />
    </React.Fragment>
  );
};

export default CustomIntrinsicProp;
