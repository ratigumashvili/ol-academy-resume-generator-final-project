import React from "react";
import { HiX } from "react-icons/hi";
const Modal = React.forwardRef((props, ref) => {
  return (
    <div className="modal-wrapper" ref={ref}>
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn close" onClick={props.onClick}>
            <HiX />
          </button>
        </div>
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  );
});

export default Modal;
