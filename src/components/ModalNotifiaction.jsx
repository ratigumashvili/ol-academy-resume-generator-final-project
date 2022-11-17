import { Link } from "react-router-dom";
import Modal from "./Modal";

const ModalNotifiaction = ({ closeModal, modalRef, navigateToHome }) => {
  return (
    <Modal onClick={closeModal} ref={modalRef}>
      <h3>Do you want to save this resume?</h3>
      <div className="controls">
        <button className="btn btn-cta" onClick={navigateToHome}>
          Yes
        </button>
        <Link to="/" className="btn btn-danger">
          NO
        </Link>
      </div>
    </Modal>
  );
};

export default ModalNotifiaction;
