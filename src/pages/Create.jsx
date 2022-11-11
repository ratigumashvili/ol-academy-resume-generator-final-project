import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import NameField from "../components/fieldSets/NameField";
import ContactsField from "../components/fieldSets/ContactsField";
import ProffesionalSummaryField from "../components/fieldSets/ProffesionalSummaryField";
import SkillsField from "../components/fieldSets/SkillsField";
import ExperienceField from "../components/fieldSets/ExperienceField";
import EducationField from "../components/fieldSets/EducationField";

import { formValues } from "../tempData";

const Create = () => {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");
  const [values, setValues] = useState(formValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(values);
  };

  const [fieldsetPosition, setFieldsetPostition] = useState(0);
  const fieldSetName = [
    "Name",
    "Contacts",
    "Professional summary",
    "Skills",
    "Experience",
    "Education",
  ];

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
    <div className="resume-form">
      Create {theme} {`#${color}`}
      <h2>{fieldSetName[fieldsetPosition]}</h2>
      <form onSubmit={handleSubmit}>
        <div className="resume-form__body">{displayFieldset()}</div>
        <button
          type="button"
          disabled={fieldsetPosition === 0}
          onClick={() => setFieldsetPostition((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          disabled={fieldsetPosition === fieldSetName.length - 1}
          onClick={() => setFieldsetPostition((prev) => prev + 1)}
        >
          Next
        </button>
        {fieldsetPosition === fieldSetName.length - 1 && (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default Create;
