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
import { formatted_date, colourNameToHex } from "../helpers/helpers";

const Export = ({ resumes, setResumes, setValues, getFormData }) => {
  const data = JSON.parse(localStorage.getItem("generatedResume"));
  const { contacts, education, experience, name, proffSummary, skills } =
    data[0];
  const theme = data[1];
  const color = data[2];

  const exportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
  });

  const modalRef = useRef();
  const { isShowing, toggle: closeModal } = useModal(modalRef);
  const navigate = useNavigate();

  const addResume = () => {
    const newResume = {
      id: uuid(),
      data: data[0],
      time: formatted_date(),
      theme: theme,
      color: color,
    };
    setResumes([...resumes, newResume]);
    setValues(getFormData);
    localStorage.removeItem("form");
    setTimeout(() => {
      navigate("/");
    }, 1);
  };

  useEffect(() => {
    localStorage.setItem("all-resumes", JSON.stringify(resumes));
  }, [resumes]);

  return (
    <div>
      <h2 className="component-heading">Export generated resume</h2>
      {isShowing && (
        <ModalNotifiaction
          closeModal={closeModal}
          modalRef={modalRef}
          addResume={addResume}
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
