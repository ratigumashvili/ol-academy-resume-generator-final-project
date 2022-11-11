const NameField = ({ handleInputChange, values }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleInputChange}
      />
    </>
  );
};

export default NameField;
