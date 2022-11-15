import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

const Modal = ({ closeModal, addResume, modalRef }) => {
  return (
    <div className="modal-wrapper" ref={modalRef}>
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn close" onClick={closeModal}>
            <HiX />
          </button>
        </div>
        <div className="modal-content">
          <h3>Do you want to save this resume?</h3>
          <div className="controls">
            <button className="btn btn-cta" onClick={addResume}>
              Yes
            </button>
            <Link to="/" className="btn btn-danger">
              NO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
