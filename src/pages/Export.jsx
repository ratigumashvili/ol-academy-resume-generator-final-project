import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";
import ModalNotifiaction from "../components/ModalNotifiaction";

import exportAsImage from "../helpers/getHtmlToCanvas";
import exportAsJson from "../helpers/getJsonData";
import useModal from "../hooks/useModal";
import {
  formatted_date,
  colourNameToHex,
  getDataFromLS,
  setDataToLS,
} from "../helpers/helpers";

const Export = ({ resumes, setResumes, updateValues }) => {
  const data = getDataFromLS("generatedResume");

  const [
    { contacts, education, experience, name, proffSummary, skills },
    theme,
    color,
  ] = data;

  const exportRef = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "cv-pdf",
    content: () => exportRef.current,
  });

  const modalRef = useRef();
  const { isShowing, toggle: closeModal } = useModal(modalRef);
  const navigate = useNavigate();

  const addResume = async () => {
    const newResume = {
      id: uuid(),
      data: data[0],
      time: formatted_date(),
      theme,
      color,
    };
    setResumes([...resumes, newResume]);
    updateValues();
    localStorage.removeItem("form");
  };

  const navigateToHome = async () => {
    await addResume();
    navigate("/");
  };

  useEffect(() => {
    setDataToLS("all-resumes", resumes);
  }, [resumes]);

  return (
    <div>
      <h2 className="component-heading">Export generated resume</h2>

      {isShowing && (
        <ModalNotifiaction
          closeModal={closeModal}
          modalRef={modalRef}
          navigateToHome={navigateToHome}
        />
      )}

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
            Export Image
          </button>
          <button className="btn" onClick={handlePrint}>
            Export PDF
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
