import React, { useState } from "react";

const FileUpload: React.FC = (): JSX.Element => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (files) {
      // Process the files here
      console.log("files:", files);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileInput">Upload File:</label>
      <input type="file" id="fileInput" accept=".jpg,.png,.pdf" multiple onChange={handleFileChange} required={true} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUpload;
