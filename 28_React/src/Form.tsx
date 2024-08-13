import React from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  age: number;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }): JSX.Element => {
  const [formData, setFormData] = React.useState<FormData>({ name: "", age: 0 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: name === "age" ? Number(value) : value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} id="name" />
        </label>
        <br />
        <label htmlFor="age">
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} id="age" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

const Form: React.FC = (): JSX.Element => {
  const handleSubmit = (formData: FormData): void => {
    console.log("formData:", formData);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <FormComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
