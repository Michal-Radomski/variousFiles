import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const StyledModal = styled.div`
  width: auto;
  height: auto;
  border: 1px solid red;
  div.modal_test {
    color: red;
    div.modal-content_test {
      background-color: cyan;
    }
  }
`;

const PortalModal: React.FC<ModalProps> = ({ isOpen, onClose, children }): JSX.Element => {
  if (!isOpen) return null as any;

  return createPortal(
    <StyledModal>
      <div className="modal_test">
        <div className="modal-content_test">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </StyledModal>,

    document.getElementById("modal-root") as HTMLElement
  );
};

export default PortalModal;
