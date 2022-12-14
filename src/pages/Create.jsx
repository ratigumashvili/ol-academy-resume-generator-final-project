import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { HiQuestionMarkCircle } from "react-icons/hi";

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

import ModalHelp from "../components/ModalHelp";
import useModal from "../hooks/useModal";
import {
  getProgressBar,
  getCurrent,
  getEmptyValues,
  colourNameToHex,
  setDataToLS,
} from "../helpers/helpers";

const Create = ({ values, setValues, fetchedData }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");
  const [fieldsetPosition, setFieldsetPostition] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fieldSetName, setFieldsetName] = useState([]);

  const modalRef = useRef();
  const { isShowing, toggle: closeModal } = useModal(modalRef);

  useEffect(() => {
    if (fetchedData && Object.keys(fetchedData).length !== 0) {
      setFieldsetName(fetchedData.fieldSetName);
    }
  }, [fetchedData]);

  useEffect(() => {
    setDataToLS("form", values);
  }, [values]);

  const handleInputChange = ({ target: { value, name } }) =>
    setValues({
      ...values,
      [name]: value,
    });

  useEffect(() => {
    setProgress(getProgressBar(fieldsetPosition + 1, fieldSetName.length));
  }, [fieldsetPosition, fieldSetName.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getEmptyValues(values)) return;

    const generatedResume = [values, theme, color];
    setDataToLS("generatedResume", generatedResume);
    localStorage.removeItem("form");
    navigate("/export");
  };

  const displayFieldset = () => {
    const fieldPositionMaps = [
      {
        stepIndex: 0,
        component: (
          <NameField handleInputChange={handleInputChange} values={values} />
        ),
      },
      {
        stepIndex: 1,
        component: (
          <ContactsField
            handleInputChange={handleInputChange}
            values={values}
          />
        ),
      },
      {
        stepIndex: 2,
        component: (
          <ProffesionalSummaryField
            handleInputChange={handleInputChange}
            values={values}
          />
        ),
      },
      {
        stepIndex: 3,
        component: (
          <SkillsField handleInputChange={handleInputChange} values={values} />
        ),
      },
      {
        stepIndex: 4,
        component: (
          <ExperienceField
            handleInputChange={handleInputChange}
            values={values}
          />
        ),
      },
      {
        stepIndex: 5,
        component: (
          <EducationField
            handleInputChange={handleInputChange}
            values={values}
          />
        ),
      },
    ];

    return fieldPositionMaps.find(
      (fieldSet) => fieldSet.stepIndex === fieldsetPosition
    ).component;
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
        <h2 className="component-heading__create">
          Current theme: {theme}
          <button className="btn" onClick={closeModal} title="Help">
            <HiQuestionMarkCircle />
          </button>
        </h2>

        {isShowing && <ModalHelp closeModal={closeModal} modalRef={modalRef} />}

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
