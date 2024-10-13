import React from "react";

import ClickableComponent from "./ClickableComponent";
import FileUpload from "./FileUpload";

const RefsWrapper = (): JSX.Element => {
  return (
    <React.Fragment>
      <ClickableComponent />
      <FileUpload />
    </React.Fragment>
  );
};

export default RefsWrapper;
