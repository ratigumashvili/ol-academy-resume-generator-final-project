import Modal from "./Modal";
import { text } from "../markdownSyntaxtHelp";

const ModalHelp = ({ closeModal, modalRef }) => {
  return (
    <Modal ref={modalRef} onClick={closeModal}>
      <div
        className="markdown-help"
        dangerouslySetInnerHTML={{ __html: text.toString() }}
      ></div>
    </Modal>
  );
};

export default ModalHelp;
