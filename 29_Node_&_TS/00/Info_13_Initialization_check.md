The error you're encountering, "Property 'image' has no initializer and is not definitely assigned in the constructor," is
due to TypeScript's strict property initialization checks. This feature ensures that all properties of a class are
initialized before they are used.

### What does the error mean?

In your code, the `image` property is not guaranteed to be initialized when the `Invader` class is instantiated. This is
because the `image` is assigned within the `onload` event handler of the `HTMLImageElement`, which is asynchronous.
TypeScript cannot guarantee that this event will have occurred by the time other parts of your code try to access the `image`
property.

### What does the exclamation mark (!) do?

The exclamation mark (`!`) in TypeScript is called the "definite assignment assertion" or "non-null assertion operator." When
you add it to a property declaration, you're telling TypeScript that you're certain this property will be initialized before
it's used.

Here's how you can modify your code to use the exclamation mark:

```typescript
export class Invader {
  velocity: Position;
  image!: HTMLImageElement; // Add ! here
  width!: number;
  height!: number;
  position!: Position;
  constructor({ position }: { position: Position }) {
    this.velocity = {
      x: 0,
      y: 0,
    };

    const image: HTMLImageElement = new Image();
    image.src = invader;
    image.onload = (): void => {
      const scale = 1;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y,
      };
    };
  }

  draw(): void {
    if (this.image) {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    } else {
      console.log("Invader image not loaded");
    }
  }
}
```

However, using the exclamation mark here might not be the best solution because it doesn't address the underlying issue of
asynchronous initialization. It simply tells TypeScript to trust that you know what you're doing.

### Alternative Solution

A better approach might be to ensure that the `draw` method is only called after the image has loaded. Here's how you could
modify your code to handle this:

```typescript
export class Invader {
  velocity: Position;
  private _image?: HTMLImageElement; // Use a private property with optional type
  width!: number;
  height!: number;
  position!: Position;
  private loaded = false; // Flag to track if the image is loaded

  constructor({ position }: { position: Position }) {
    this.velocity = {
      x: 0,
      y: 0,
    };

    const image: HTMLImageElement = new Image();
    image.src = invader;
    image.onload = (): void => {
      this._image = image;
      const scale = 1;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y,
      };
      this.loaded = true; // Set loaded flag to true
    };
  }

  draw(): void {
    if (this.loaded) {
      if (this._image) {
        c.drawImage(this._image, this.position.x, this.position.y, this.width, this.height);
      }
    } else {
      console.log("Invader image not loaded");
    }
  }
}
```

In this version, the `draw` method checks the `loaded` flag before attempting to draw the image, ensuring that it only tries
to draw after the image has been loaded. This approach avoids using the non-null assertion operator and makes the code safer
by explicitly handling the asynchronous nature of image loading.

---

Answer from Perplexity:
https://www.perplexity.ai/search/property-image-has-no-initiali-Lul7PZnPRlGTtVlh.pZyLg?utm_source=copy_output
