const ExperienceField = ({ handleInputChange, values }) => {
  return (
    <>
      <textarea
        name="experience"
        cols="30"
        rows="10"
        value={values?.experience}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
};

export default ExperienceField;
