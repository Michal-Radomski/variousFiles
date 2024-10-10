import React from "react";

const RefsForm: React.FC = (): JSX.Element => {
  // Create refs for the input fields
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Access the current values of the input fields
    const name = nameRef.current?.value as string;
    const email = emailRef.current?.value as string;
    const message = messageRef.current?.value as string;

    // Log the values or handle them as needed
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the input fields after submission (optional)
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} required={true} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} required={true} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageRef} required={true}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RefsForm;
