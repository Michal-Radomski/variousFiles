## Overview of Event Methods

In JavaScript, particularly when working with React applications, three key methods are used to manage events:
`preventDefault`, `stopPropagation`, and `stopImmediatePropagation`. Each serves a distinct purpose:

- **`preventDefault()`**: Cancels the default behavior of an element. For example, it can prevent a form from submitting or a
  link from navigating to its URL.
- **`stopPropagation()`**: Stops the event from bubbling up the DOM tree, preventing parent elements from handling the event.
- **`stopImmediatePropagation()`**: Not only stops the event from bubbling up but also prevents any other event handlers
  attached to the same element from being executed.

## Where to Use Each Method

### `preventDefault()`

Use when you want to prevent the default action of an element, such as form submission or link navigation.

### `stopPropagation()`

Use when you want to prevent an event from bubbling up to parent elements, ensuring that only the current element handles the
event.

### `stopImmediatePropagation()`

Use when you want to stop both the event propagation and prevent any other handlers on the same element from being executed.

## Examples in a React App with TypeScript

Here are examples of how to use these methods in a React application with TypeScript:

### Example 1: `preventDefault()`

Preventing a form from submitting:

```tsx
import React from "react";

const MyForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the form from submitting
    console.log("Form submission prevented");
  };

  return Submit;
};

export default MyForm;
```

### Example 2: `stopPropagation()`

Preventing a click event from bubbling up:

```tsx
import React from 'react';

const MyComponent = () => {
  const handleClickButton = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents the event from bubbling up
    console.log('Button clicked');
  };

  const handleClickDiv = () => {
    console.log('Div clicked');
  };

  return (

      Click Me

  );
};

export default MyComponent;
```

### Example 3: `stopImmediatePropagation()`

Preventing other handlers on the same element from executing:

```tsx
import React from 'react';

const MyComponent = () => {
  const handleClickButton1 = (event: React.MouseEvent) => {
    event.stopImmediatePropagation(); // Stops other handlers on the button //* Property 'stopImmediatePropagation' does not exist on type 'MouseEvent<Element, MouseEvent>'.
    console.log('Button handler 1 executed');
  };

  const handleClickButton2 = () => {
    console.log('Button handler 2 will not execute');
  };

  return (

      Click Me

  );
};

export default MyComponent;
```

**Note**: In the third example, `handleClickButton2` will not be executed because `stopImmediatePropagation` is called in
`handleClickButton1`. However, due to how React handles multiple `onClick` attributes on the same element, this example might
not work as expected in React. In React, you should attach multiple handlers in a single `onClick` attribute. Here's a
corrected version:

```tsx
import React from 'react';

const MyComponent = () => {
  const handleClickButton1 = (event: React.MouseEvent) => {
    event.stopImmediatePropagation(); // Stops other handlers on the button //* Property 'stopImmediatePropagation' does not exist on type 'MouseEvent<Element, MouseEvent>'.
    console.log('Button handler 1 executed');
  };

  const handleClickButton2 = () => {
    console.log('Button handler 2 will not execute');
  };

  return (
     {
      handleClickButton1(e);
      handleClickButton2(); // This will not be executed due to stopImmediatePropagation
    }}>
      Click Me

  );
};

export default MyComponent;
```

In this corrected version, `handleClickButton2` is still not executed because `stopImmediatePropagation` prevents further
handlers from running, but it illustrates how you might structure multiple handlers in React.

Citations: [1] https://codeplanetio.wordpress.com/2015/05/19/preventdefault-vs-stoppropagation-vs-stopimmediatepropagation/
[2] https://iq.js.org/questions/javascript/whats-the-difference-between-eventpreventdefault-and-eventstoppropagation-methods
[3] https://stackoverflow.com/questions/5299740/stoppropagation-vs-stopimmediatepropagation [4]
https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault [5]
https://www.carlrippon.com/stoppropagation-v-stopimmediatepropagation/ [6]
https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation [7]
https://www.romaintrotard.com/posts/preventdefault-vs-stoppropagation [8]
https://knowledgehub.sahf.info/wp-content/uploads/2022/11/jQuery.Cookbook.Cody_.Lindley-1.pdf
