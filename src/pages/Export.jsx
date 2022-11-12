import { useRef } from "react";

import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";

import { colourNameToHex } from "../helpers/getColor";
import exportAsImage from "../helpers/getHtmlToCanvas";

const Export = () => {
  const data = JSON.parse(localStorage.getItem("generatedResume"));
  const { contacts, education, experience, name, proffSummary, skills } =
    data[0];
  const theme = data[1];
  const color = data[2];

  const exportRef = useRef();

  return (
    <div>
      <h2>Export generated resume</h2>
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
      <button onClick={() => exportAsImage(exportRef.current, "cv-image")}>
        Export img
      </button>
      <button>Export Pdf</button>
      <button>Export JSON</button>
    </div>
  );
};

export default Export;
