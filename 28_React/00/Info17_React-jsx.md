The terms "React" and "React-JSX" often get conflated, but they refer to different aspects of React development:

## React

- **Definition**: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI
  components.
- **Functionality**: React itself is not directly related to JSX; it's a framework that can use JSX for rendering components.
  However, React provides the core functionality for managing state, props, and lifecycle methods.

## React-JSX

- **Definition**: JSX stands for JavaScript XML, a syntax extension for JavaScript that allows developers to write HTML-like
  code in their JavaScript files. It is commonly used with React to simplify the process of creating UI components.
- **Functionality**: The term "React-JSX" might refer to the integration of JSX with React, but specifically, "react-jsx" in
  TypeScript configurations refers to a new JSX transform introduced in React 17. This transform changes how JSX is compiled
  into JavaScript, eliminating the need for explicit React imports in JSX files.

### Key Differences in TypeScript Configuration:

- **"react" vs. "react-jsx"**:
  - **"react"**: This is the older way of transforming JSX into JavaScript. It requires importing React explicitly in JSX
    files.
  - **"react-jsx"**: Introduced with React 17, this option uses new entry points in the React package, allowing for implicit
    React imports in JSX files. It is considered more efficient and modern.

In summary, "React" refers to the library itself, while "JSX" is a syntax extension used with React. The term "react-jsx" in
TypeScript configurations refers to the new JSX transform that aligns with modern React development practices.

Citations: [1] https://www.w3schools.com/react/react_jsx.asp [2]
https://stackoverflow.com/questions/67776707/ts-config-jsx-reactjsx-vs-react [3]
https://react.dev/learn/writing-markup-with-jsx [4]
https://www.koladechris.com/blog/what-is-the-difference-between-a-js-and-jsx-file-in-react/ [5]
https://legacy.reactjs.org/docs/introducing-jsx.html [6] https://www.youtube.com/watch?v=Gz9xnlE6i98 [7]
https://forum.freecodecamp.org/t/jsx-in-react-question-about-jsx-and-js-format/638330 [8]
https://www.reddit.com/r/reactjs/comments/1577gqm/whats_the_difference_between_js_jsx_extension/
