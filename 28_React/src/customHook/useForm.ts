import React from "react";

interface FormValues {
  [key: string]: any; // Allows any key with any value type
}

interface UseFormReturn<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (callback: (values: T) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
  errors: Partial<Record<keyof T, string>>;
}

const useForm = <T extends FormValues>(
  initialValues: T,
  validate: (values: T) => Partial<Record<keyof T, string>>
): UseFormReturn<T> => {
  const [values, setValues] = React.useState<T>(initialValues);
  const [errors, setErrors] = React.useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (callback: (values: T) => void) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(values);
    }
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
