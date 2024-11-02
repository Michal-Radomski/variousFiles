import React from "react";
import PortalModal from "./PortalModal";

const PortalModalWrapper: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  // console.log({ isOpen });

  const toggleModal = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div>
        <h3>React Portal Example</h3>
        <button onClick={toggleModal}>Open Modal</button>
        <PortalModal isOpen={isOpen} onClose={toggleModal}>
          <h2>Modal Content</h2>
          <p>This is an example of a modal using React portals.</p>
        </PortalModal>
      </div>
    </React.Fragment>
  );
};

export default PortalModalWrapper;
