// Tutorial: https://khalilstemmler.com/blogs/typescript/abstract-class

//* Concrete class
class User {
  private name: string;
  public getName(): string {
    return this.name;
  }
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Michal");
console.log(user);
console.log(user.getName());

//* Interface (abstraction)
interface Box {
  length: number;
  width: number;
}

//* Concrete class implementing Box abstraction
class MobileBox implements Box {
  public length: number;
  public width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }
}

let boxThree = new MobileBox(1, 2);
console.log(boxThree);

//* Abstract Class
abstract class Book {
  private author: string;
  private title: string;

  constructor(author: string, title: string) {
    this.author = author;
    this.title = title;
  }
  abstract getBookType(): string; // No implementation
  // Common methods
  public getBookTitle(): string {
    return this.title;
  }
  public getBookAuthor(): string {
    return this.author;
  }
}

class PDF extends Book {
  // Extends the abstraction
  private belongsToEmail: string;
  // Must implement this
  getBookType(): string {
    return "PDF";
  }
  constructor(author: string, title: string, belongsToEmail: string) {
    super(author, title); // Must call super on subclass
    this.belongsToEmail = belongsToEmail;
  }
}

let book: PDF = new PDF("Robert Greene", "The Laws of Human Nature", "khalil@khalilstemmler.com");

console.log(book.getBookAuthor()); // "Robert Greene"
console.log(book.getBookTitle()); // "The Laws of Human Nature"
console.log(book.getBookType()); // "PDF"
