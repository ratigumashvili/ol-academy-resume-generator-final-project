import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import NameField from "../components/fieldSets/NameField";
import ContactsField from "../components/fieldSets/ContactsField";
import ProffesionalSummaryField from "../components/fieldSets/ProffesionalSummaryField";
import SkillsField from "../components/fieldSets/SkillsField";
import ExperienceField from "../components/fieldSets/ExperienceField";
import EducationField from "../components/fieldSets/EducationField";

const Create = () => {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme");
  const color = searchParams.get("color");

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
      return <NameField />;
    }
    if (fieldsetPosition === 1) {
      return <ContactsField />;
    }
    if (fieldsetPosition === 2) {
      return <ProffesionalSummaryField />;
    }
    if (fieldsetPosition === 3) {
      return <SkillsField />;
    }
    if (fieldsetPosition === 4) {
      return <ExperienceField />;
    }
    if (fieldsetPosition === 5) {
      return <EducationField />;
    }
  };
  return (
    <div className="resume-form">
      Create {theme} {`#${color}`}
      <h2>{fieldSetName[fieldsetPosition]}</h2>
      <div className="resume-form__body">{displayFieldset()}</div>
      <button
        disabled={fieldsetPosition === 0}
        onClick={() => setFieldsetPostition((prev) => prev - 1)}
      >
        Prev
      </button>
      <button
        disabled={fieldsetPosition === fieldSetName.length - 1}
        onClick={() => setFieldsetPostition((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Create;
