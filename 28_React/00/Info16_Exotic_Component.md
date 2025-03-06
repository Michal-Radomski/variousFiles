Todo: Errors!

## What are Exotic Components in React?

Exotic components in React are special types of components that do not behave like regular function or class components. They
are typically used for components that require special handling by React, such as those created with `React.memo`,
`React.forwardRef`, or context providers. These components are often represented by the `ExoticComponent` type in TypeScript.

### Example of an Exotic Component: `React.Fragment`

One common example of an exotic component is `React.Fragment`. It is used to group a list of children without adding extra
nodes to the DOM. Here's how it's typed in TypeScript:

```tsx
import React, { Fragment } from "react";

const el = Hello;
// TypeScript infers el as JSX.Element

// Type of Fragment
const Fragment: ExoticComponent;
```

### Another Example: `ForwardRefExoticComponent`

Another example is a component created using `React.forwardRef`, which allows a parent component to access a DOM node in a
child component. Here's how you might define such a component:

```tsx
import React from 'react';

interface Props {
  // Your props here
}

const MyComponent = React.forwardRef((props, ref) => {
  return {props.children};
});

// MyComponent is typed as ForwardRefExoticComponent
```

In this case, `MyComponent` is an exotic component because it uses `forwardRef`, which is a special function that returns an
object treated differently by React.

### Key Characteristics of Exotic Components

- **Special Rendering Behavior**: Exotic components trigger special rendering behavior in React.
- **Not Function or Class Components**: They are not instances of `React.FunctionComponent` or `React.ComponentClass`.
- **Typing**: Often typed as `ExoticComponent` or `ForwardRefExoticComponent` in TypeScript.

These components are essential for handling specific use cases where standard component behavior is insufficient.

Citations: [1] https://jser.dev/2023-05-31-react-types-in-typescript/ [2]
https://stackoverflow.com/questions/64237804/whats-the-difference-between-forwardrefexoticcomponent-and-forwardrefrenderfunct/64239113
[3] https://stackoverflow.com/questions/55954624/react-exoticcomponent-cannot-be-called [4]
https://www.dhiwise.com/post/why-forwardrefexoticcomponent-is-essential-for-reusable [5]
https://github.com/axa-ch/react-polymorphic-types [6] https://camlittle.com/posts/react-and-typescript/ [7]
https://www.totaltypescript.com/workshops/advanced-react-with-typescript/advanced-patterns/strongly-typed-lazy-loading/solution
[8] https://thoughtspile.github.io/2022/01/25/what-is-react-component/

In React, **exotic components** are special types of components that do not behave like regular `React.Component` or
`React.FunctionComponent`. They include components created with `React.memo`, `React.forwardRef`, and `React.Context`, among
others. Here are some examples of exotic components in React:

### 1. **React.memo**

`React.memo` is used to memoize components so they only re-render when their props change. This is an example of an exotic
component because it doesn't behave like a regular component but still acts as one.

```typescript
import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  // Component implementation
  return {props.children};
});
```

### 2. **React.forwardRef**

`React.forwardRef` allows a parent component to access the DOM node of a child component. Components wrapped with
`forwardRef` are considered exotic.

```typescript
import React from 'react';

const MyComponent = React.forwardRef((props, ref) => {
  return {props.children};
});
```

### 3. **React.Fragment**

`React.Fragment` is another example of an exotic component. It allows you to group children without adding extra nodes to the
DOM.

```typescript
import React from 'react';

function MyComponent() {
  return (

      First Child
      Second Child

  );
}
```

### 4. **Context Provider**

Components created using `React.createContext` and used as providers are also exotic components.

```typescript
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (



  );
}
```

These examples illustrate how exotic components are used in React to handle special cases that don't fit the typical
component lifecycle or behavior.

Citations: [1] https://www.programcreek.com/typescript/?api=react.ExoticComponent [2]
https://stackoverflow.com/questions/55954624/react-exoticcomponent-cannot-be-called [3]
https://camlittle.com/posts/react-and-typescript/ [4]
https://www.totaltypescript.com/workshops/advanced-react-with-typescript/advanced-patterns/strongly-typed-lazy-loading/solution
[5] https://thoughtspile.github.io/2022/01/25/what-is-react-component/ [6]
https://www.dhiwise.com/post/why-forwardrefexoticcomponent-is-essential-for-reusable [7]
https://github.com/styleguidist/react-docgen-typescript/issues/215 [8]
https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.exoticcomponent
