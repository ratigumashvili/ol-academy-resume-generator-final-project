const ResumeFormControlls = ({
  fieldsetPosition,
  fieldSetName,
  setFieldsetPostition,
  color,
}) => {
  return (
    <div className="resume-form__controlls">
      <div className="resume-form__main-navigation">
        <button
          className="btn"
          style={{ backgroundColor: color }}
          type="button"
          disabled={fieldsetPosition === 0}
          onClick={() => {
            setFieldsetPostition((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          style={{ backgroundColor: color }}
          type="button"
          disabled={fieldsetPosition === fieldSetName.length - 1}
          onClick={() => setFieldsetPostition((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      {fieldsetPosition === fieldSetName.length - 1 && (
        <button className="btn btn-submit" type="submit">
          Generate
        </button>
      )}
    </div>
  );
};

export default ResumeFormControlls;
