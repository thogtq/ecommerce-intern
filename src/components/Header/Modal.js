import React from "react";
import closeIcon from "assets/images/icons/cross.svg";

const Modal = (props) => {
  const ModalHeader = props.header;
  const ModalFooter = props.footer;
  const toggleModal = props.toggle;
  const ModalCloseButton = ({ toggleModal }) => {
    return (
      <img
        className="modal-close"
        src={closeIcon}
        alt="close-icon"
        onClick={toggleModal}
      ></img>
    );
  };
  return (
    <React.Fragment>
      <div className="modal-backdrop"></div>
      <div className="modal login-modal">
        <ModalCloseButton toggleModal={toggleModal} />
        <div className="modal-header">
          <ModalHeader />
        </div>
        <div className="modal-content">{props.children}</div>
        <div className="modal-footer">
          <ModalFooter />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
