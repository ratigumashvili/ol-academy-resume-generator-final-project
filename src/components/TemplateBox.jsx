import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import AngoraTemplate from "./AngoraTemplate";
import BlueprintTemplate from "./BlueprintTemplate";

import { colourNameToHex } from "../helpers/helpers";
import { dummyData } from "../tempData";

const TemplateBox = ({ pickedColor, handleThemeChange, theme }) => {
  const { name, contacts, proffSumarry, skills, experience, education } =
    dummyData;
  return (
    <div className="theme-wrapper">
      <button className="theme-change next" onClick={handleThemeChange}>
        <HiChevronRight size={30} />
      </button>
      {theme.name === "Angora" && (
        <AngoraTemplate
          color={colourNameToHex(pickedColor)}
          name={name}
          contacts={contacts}
          proffSumarry={proffSumarry}
          skills={skills}
          experience={experience}
          education={education}
        />
      )}
      {theme.name === "Blueprint" && (
        <BlueprintTemplate
          color={colourNameToHex(pickedColor)}
          name={name}
          contacts={contacts}
          proffSumarry={proffSumarry}
          skills={skills}
          experience={experience}
          education={education}
        />
      )}
      <button className="theme-change prev" onClick={handleThemeChange}>
        <HiChevronLeft size={30} />
      </button>
    </div>
  );
};

export default TemplateBox;
