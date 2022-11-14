import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";
import Modal from "../components/Modal";

import { colourNameToHex } from "../helpers/getColor";
import exportAsImage from "../helpers/getHtmlToCanvas";
import exportAsJson from "../helpers/getJsonData";
import useModal from "../helpers/useModal";

const Export = () => {
  const data = JSON.parse(localStorage.getItem("generatedResume"));
  const { contacts, education, experience, name, proffSummary, skills } =
    data[0];
  const theme = data[1];
  const color = data[2];

  const exportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
  });

  const { isShowing, toggle: closeModal } = useModal();

  return (
    <div>
      <h2>Export generated resume</h2>
      {isShowing && <Modal closeModal={closeModal} />}
      <div className="preview-export" ref={exportRef}>
        {theme === "Angora" && (
          <AngoraTemplate
            color={colourNameToHex(color)}
            name={name}
            contacts={contacts}
            proffSumarry={proffSummary}
            skills={skills}
            experience={experience}
            education={education}
          />
        )}
        {theme === "Blueprint" && (
          <BlueprintTemplate
            color={colourNameToHex(color)}
            name={name}
            contacts={contacts}
            proffSumarry={proffSummary}
            skills={skills}
            experience={experience}
            education={education}
          />
        )}
      </div>
      <div className="export-controlls">
        <div className="left">
          <button
            className="btn"
            onClick={() => exportAsImage(exportRef.current, "cv-image")}
          >
            Export img
          </button>
          <button className="btn" onClick={handlePrint}>
            Export Pdf
          </button>
          <button
            className="btn"
            onClick={() => exportAsJson(data, "cv-json.json")}
          >
            Export JSON
          </button>
        </div>
        <div className="right">
          <button className="btn btn-cta" onClick={closeModal}>
            Build new resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
