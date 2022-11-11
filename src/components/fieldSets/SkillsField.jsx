const SkillsField = ({ handleInputChange, values }) => {
  return (
    <>
      <textarea
        name="skills"
        cols="30"
        rows="10"
        value={values.skills}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
};

export default SkillsField;
