const ProffesionalSummaryField = ({ handleInputChange, values }) => {
  return (
    <>
      <textarea
        name="proffSummary"
        cols="30"
        rows="10"
        value={values?.proffSummary}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
};

export default ProffesionalSummaryField;
