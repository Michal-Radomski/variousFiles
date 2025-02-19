```jsx
import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Check if shadowRoot already exists to avoid errors
    if (!container.shadowRoot) {
      const shadowRoot = container.attachShadow({ mode: "open" });
      const root = createRoot(shadowRoot);
      root.render(<button>Submit</button>);
    }
  }, []);

  return <div ref={containerRef}></div>;
};

export default MyComponent;
```

**Explanation:**

1.  **Import necessary modules:** Imports `React`, `useRef`, `useEffect` from `react` and `createRoot` from
    `react-dom/client`[5].
2.  **Create a reference:** A reference `containerRef` is created using `useRef(null)` to hold a reference to the DOM element
    where the shadow DOM will be attached[5].
3.  **`useEffect` Hook:** The `useEffect` hook is used to perform side effects in the component. It runs after the component
    mounts[5].
4.  **Accessing the DOM element:** Inside `useEffect`, `containerRef.current` is used to access the actual DOM element.
5.  **Attaching the Shadow DOM:**
    - `container.attachShadow({ mode: 'open' })` attaches a shadow DOM to the `container` element[1][2][3][4]. The
      `mode: 'open'` allows the shadow DOM to be accessed from JavaScript outside the component.
    - A check `if (!container.shadowRoot)` prevents attaching multiple shadow DOMs to the same element, which would cause an
      error[4].
6.  **Rendering React content into the Shadow DOM:**
    - `createRoot(shadowRoot)` creates a React root inside the shadow DOM[5].
    - `root.render(<button>Submit</button>)` renders the React element (in this case, a button) inside the shadow DOM[5].
7.  **Return the host element:** The component returns a `div` with the `ref` attribute set to `containerRef`. This `div`
    will be the host element for the shadow DOM.

**Key points:**

- **Shadow DOM:** Shadow DOM provides encapsulation, so styles defined within the shadow DOM do not leak out and affect the
  rest of the page, and vice versa[1][3].
- **`mode: 'open'`:** Using `mode: 'open'` makes the shadow DOM accessible from JavaScript outside the component. If you use
  `mode: 'closed'`, the shadow DOM will not be accessible[3][5].
- **Error Prevention:** The check for `container.shadowRoot` prevents errors that occur when trying to attach multiple shadow
  DOMs to the same element[4].
- **ReactDOMClient:** The `ReactDOMClient` library and its `createRoot` method are used for rendering React elements inside
  the shadow DOM[5].
- **SSR:** The linked article mentions server-side rendering with shadow DOM[1].
- **Not All Elements**: You can't attach a shadow root to every type of element[4].

This example demonstrates how to create a basic React component that renders content inside a shadow DOM, providing style
encapsulation.

Citations: [1] https://www.wpeform.io/blog/render-react-app-shadow-dom-styled-components/ [2]
https://udn.realityripple.com/docs/Web/API/Element/attachShadow [3]
https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM [4]
https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow [5] https://gourav.io/blog/render-react [6]
https://www.npmjs.com/package/react-shadow [7] https://dev.to/bennypowers/comment/7om8 [8]
https://reactlibs.dev/articles/illuminating-react-shadow-dom/
