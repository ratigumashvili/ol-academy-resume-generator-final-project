import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { fieldSetName, formValues } from "../tempData";

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
import { getProgressBar, getCurrent } from "../helpers/helpers";
import { colourNameToHex } from "../helpers/getColor";

const Create = () => {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");
  const [fieldsetPosition, setFieldsetPostition] = useState(0);
  const [progress, setProgress] = useState(0);
  const [values, setValues] = useState(formValues);

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
  }, [fieldsetPosition]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ", values);
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
      <div className="col-sm-12 col-lg-5">
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
            />
          </form>
        </div>
      </div>
      <div className="col-sm-12 col-lg-7">
        <div className="preview">
          {theme === "Angora" && (
            <AngoraTemplate
              color={colourNameToHex(color)}
              name={values.name}
              contacts={values.contacts}
              proffSumarry={values.proffSummary}
              skills={values.skills}
              experience={values.experience}
              education={values.education}
            />
          )}
          {theme === "Blueprint" && (
            <BlueprintTemplate
              color={colourNameToHex(color)}
              name={values.name}
              contacts={values.contacts}
              proffSumarry={values.proffSummary}
              skills={values.skills}
              experience={values.experience}
              education={values.education}
            />
          )}
        </div>
        <h2>Theme title: {theme}</h2>
      </div>
    </div>
  );
};

export default Create;
