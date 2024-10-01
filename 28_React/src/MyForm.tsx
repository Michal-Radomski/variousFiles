import React from "react";

interface User {
  username: string;
  email: string;
}

const MyForm: React.FC = (): JSX.Element => {
  const [formData, setFormData] = React.useState<User>({
    username: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;
    setFormData((prevData: User) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Here you would typically send formData to your server
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} action="/submit" method="post">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required={true} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required={true} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
