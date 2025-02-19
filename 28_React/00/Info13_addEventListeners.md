When using the `addEventListener` method in JavaScript, various event types can be specified as the first parameter. Here are
some common event types similar to `click` and their corresponding event interfaces:

## Common Event Types and Their Interfaces

| Event Type    | Event Interface | Description                                                                        |
| ------------- | --------------- | ---------------------------------------------------------------------------------- |
| **click**     | `MouseEvent`    | Triggered when an element is clicked.                                              |
| **dblclick**  | `MouseEvent`    | Triggered when an element is double-clicked.                                       |
| **mousedown** | `MouseEvent`    | Triggered when a mouse button is pressed down.                                     |
| **mouseup**   | `MouseEvent`    | Triggered when a mouse button is released.                                         |
| **mousemove** | `MouseEvent`    | Triggered when the mouse is moved over an element.                                 |
| **keydown**   | `KeyboardEvent` | Triggered when a key is pressed down.                                              |
| **keyup**     | `KeyboardEvent` | Triggered when a key is released.                                                  |
| **keypress**  | `KeyboardEvent` | Triggered when a key is pressed (deprecated).                                      |
| **focus**     | `FocusEvent`    | Triggered when an element gains focus.                                             |
| **blur**      | `FocusEvent`    | Triggered when an element loses focus.                                             |
| **change**    | `Event`         | Triggered when the value of an input element changes.                              |
| **input**     | `InputEvent`    | Triggered when the value of an input element changes (more immediate than change). |
| **submit**    | `Event`         | Triggered when a form is submitted.                                                |
| **load**      | `Event`         | Triggered when a resource and its dependent resources have finished loading.       |
| **resize**    | `UIEvent`       | Triggered when the window is resized.                                              |
| **scroll**    | `UIEvent`       | Triggered when an element's scrollbar is moved.                                    |

## Example Usage

Here’s how you might use some of these events with `addEventListener`:

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
  console.log("Button clicked!", event);
});

window.addEventListener("resize", (event) => {
  console.log("Window resized!", event);
});

document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
```

In this example, different types of events are handled, each triggering specific actions when they occur. Each event type has
its own associated interface that provides additional properties and methods relevant to that event, such as mouse
coordinates for mouse events or key codes for keyboard events.

These distinctions allow developers to handle user interactions in a more granular and effective manner, enhancing the
interactivity of web applications.

Citations: [1] https://www.w3schools.com/js/js_htmldom_eventlistener.asp [2]
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener [3]
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events [4]
https://www.w3schools.com/jsref/dom_obj_event.asp [5]
https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types [6]
https://developer.mozilla.org/en-US/docs/Web/API/Event/type [7]
https://stackoverflow.com/questions/31227751/js-event-listener-for-a-type-of-element [8]
https://stackoverflow.com/questions/74566529/what-is-the-type-of-event-handler-attached-to-the-window-object-in-typescript
