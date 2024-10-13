import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  input[type="file"] {
    display: none; /* Hide the default input */
  }

  .custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

const FileUpload: React.FC = (): JSX.Element => {
  const [files, setFiles] = React.useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file: File) => {
        formData.append("files[]", file);
      });

      // Example of sending the files to an API
      // await fetch("/upload", {
      //   method: "POST",
      //   body: formData,
      // });
      console.log("formData:", formData);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <label className="custom-file-upload">
          Upload File:
          <input type="file" id="fileInput" accept=".jpg,.png,.pdf" multiple onChange={handleFileChange} required={true} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

export default FileUpload;
