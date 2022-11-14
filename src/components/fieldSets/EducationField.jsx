const EducationField = ({ handleInputChange, values }) => {
  return (
    <>
      <textarea
        name="education"
        cols="30"
        rows="10"
        value={values?.education}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
};

export default EducationField;
