Here is an example of a simple React form with TypeScript that manages state manually, without using any form library,
including submit and reset buttons:

```tsx
import React, { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
};

const initialFormState: FormData = {
  firstName: "",
  lastName: "",
};

const MyForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add submit logic here
  };

  const handleReset = () => {
    setForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} type="text" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default MyForm;
```

This example uses React state (`useState`) to hold form data, updates state on input changes, handles form submission by
preventing the default browser refresh, and resets form fields to their initial empty state on clicking reset.[1][2][3]

[1](https://stackoverflow.com/questions/65362948/how-to-properly-type-a-form-with-typescript-and-no-external-libraries)
[2](https://www.linkedin.com/pulse/building-reusable-form-component-react-typescript-balaji-udayagiri-85auc)
[3](https://balajiudayagiri.dev/research-blogs/reusable-react-form-typescript)
[4](https://felixgerschau.com/react-hooks-form-validation-typescript/)
[5](https://www.reddit.com/r/reactjs/comments/1jl2yjo/3_ways_to_build_forms_in_react_without_any/)
[6](https://www.youtube.com/watch?v=tIdNeoHniEY) [7](https://reactpractice.dev/articles/3-ways-to-build-forms-in-react/)
[8](https://dev.to/balaji_udayagiri_aa6f571e/creating-a-reusable-form-component-in-react-with-typescript-no-third-party-libraries-564o)
[9](https://react.dev/learn/typescript) [10](https://github.com/iway1/react-ts-form)
