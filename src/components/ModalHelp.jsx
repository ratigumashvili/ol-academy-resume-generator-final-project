import { HiX } from "react-icons/hi";
import { text } from "../markdownSyntaxtHelp";

const ModalHelp = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn close" onClick={closeModal}>
            <HiX />
          </button>
        </div>
        <div className="modal-content">
          <div
            className="markdown-help"
            dangerouslySetInnerHTML={{ __html: text.toString() }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ModalHelp;
