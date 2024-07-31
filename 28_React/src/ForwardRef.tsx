//* CustomInput.tsx
import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, ...props }, ref: React.Ref<HTMLInputElement>): JSX.Element => {
    return (
      <React.Fragment>
        <div>
          <label>{label}</label>
          <input ref={ref} {...props} />
        </div>
      </React.Fragment>
    );
  }
);

CustomInput.displayName = "CustomInput"; // Optional: for better debugging

//* ForwardRef.tsx
const ForwardRef: React.FC = (): JSX.Element => {
  const inputRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

  const handleFocus = (): void => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the button is clicked
    }
  };

  return (
    <div>
      <h1>Forward Ref Example</h1>
      <CustomInput ref={inputRef} label="Enter your name:" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default ForwardRef;
