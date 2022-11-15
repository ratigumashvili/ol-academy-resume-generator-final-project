import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// import { fieldSetName } from "../tempData";

import NameField from "../components/fieldSets/NameField";
import ContactsField from "../components/fieldSets/ContactsField";
import ProffesionalSummaryField from "../components/fieldSets/ProffesionalSummaryField";
import SkillsField from "../components/fieldSets/SkillsField";
import ExperienceField from "../components/fieldSets/ExperienceField";
import EducationField from "../components/fieldSets/EducationField";
import ProgressBar from "../components/ProgressBar";
import ResumeFormControlls from "../components/ResumeFormControlls";
import AngoraTemplate from "../components/AngoraTemplate";
import BlueprintTemplate from "../components/BlueprintTemplate";
import {
  getProgressBar,
  getCurrent,
  getEmptyValues,
  colourNameToHex,
} from "../helpers/helpers";

const Create = ({ values, setValues, fetchedData }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");
  const [fieldsetPosition, setFieldsetPostition] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fieldSetName, setFieldsetName] = useState([]);

  useEffect(() => {
    if (Object.keys(fetchedData).length !== 0) {
      setFieldsetName(fetchedData.fieldSetName);
    }
  }, [fetchedData]);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    const prog = getProgressBar(fieldsetPosition + 1, fieldSetName.length);
    setProgress(prog);
  }, [fieldsetPosition, fieldSetName.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getEmptyValues(values)) {
      return;
    }
    const newObj = [values, theme, color];
    localStorage.setItem("generatedResume", JSON.stringify(newObj));
    localStorage.removeItem("form");
    navigate("/export");
  };

  const displayFieldset = () => {
    if (fieldsetPosition === 0) {
      return (
        <NameField handleInputChange={handleInputChange} values={values} />
      );
    }
    if (fieldsetPosition === 1) {
      return (
        <ContactsField handleInputChange={handleInputChange} values={values} />
      );
    }
    if (fieldsetPosition === 2) {
      return (
        <ProffesionalSummaryField
          handleInputChange={handleInputChange}
          values={values}
        />
      );
    }
    if (fieldsetPosition === 3) {
      return (
        <SkillsField handleInputChange={handleInputChange} values={values} />
      );
    }
    if (fieldsetPosition === 4) {
      return (
        <ExperienceField
          handleInputChange={handleInputChange}
          values={values}
        />
      );
    }
    if (fieldsetPosition === 5) {
      return (
        <EducationField handleInputChange={handleInputChange} values={values} />
      );
    }
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-5 mbc-2">
        <div className="resume-form">
          <h2 className="resume-form__heading">
            {fieldSetName[fieldsetPosition]}
            <small>
              {getCurrent(fieldsetPosition + 1, fieldSetName.length)}
            </small>
          </h2>
          <ProgressBar progress={progress} color={colourNameToHex(color)} />
          <form onSubmit={handleSubmit}>
            <div className="resume-form__body">{displayFieldset()}</div>
            <ResumeFormControlls
              fieldsetPosition={fieldsetPosition}
              fieldSetName={fieldSetName}
              setFieldsetPostition={setFieldsetPostition}
              color={colourNameToHex(color)}
              values={values}
            />
          </form>
        </div>
      </div>
      <div className="col-sm-12 col-lg-7 mbc-2">
        <h2 style={{ marginBottom: "1rem" }}>Current theme: {theme}</h2>
        <div
          className="preview"
          style={
            getEmptyValues(values) ? { display: "none" } : { display: "block" }
          }
        >
          {theme === "Angora" && (
            <AngoraTemplate
              color={colourNameToHex(color)}
              name={values?.name}
              contacts={values?.contacts}
              proffSumarry={values?.proffSummary}
              skills={values?.skills}
              experience={values?.experience}
              education={values?.education}
            />
          )}
          {theme === "Blueprint" && (
            <BlueprintTemplate
              color={colourNameToHex(color)}
              name={values?.name}
              contacts={values?.contacts}
              proffSumarry={values?.proffSummary}
              skills={values?.skills}
              experience={values?.experience}
              education={values?.education}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
