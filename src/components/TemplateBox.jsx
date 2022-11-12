import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import AngoraTemplate from "./AngoraTemplate";
import BlueprintTemplate from "./BlueprintTemplate";

const TemplateBox = ({ currentColor, handleThemeChange, theme }) => {
  return (
    <div className="theme-wrapper">
      <button className="theme-change next" onClick={handleThemeChange}>
        <HiChevronRight size={30} />
      </button>
      {theme.name === "Angora" && (
        <AngoraTemplate
          color={currentColor}
          name="Jhon Doe"
          contacts="Puy your contact information here"
          proffSumarry="Text describing your professional summary"
          skills="Text describing your skills"
          experience="Put your experience here"
          education="Put your educational achievements here"
        />
      )}
      {theme.name === "Blueprint" && (
        <BlueprintTemplate
          color={currentColor}
          name="Jhon Doe"
          contacts="Puy your contact information here"
          proffSumarry="Text describing your professional summary"
          skills="Text describing your skills"
          experience="Put your experience here"
          education="Put your educational achievements here"
        />
      )}
      <button className="theme-change prev" onClick={handleThemeChange}>
        <HiChevronLeft size={30} />
      </button>
    </div>
  );
};

export default TemplateBox;
