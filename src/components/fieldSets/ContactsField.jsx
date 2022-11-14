const ContactsField = ({ handleInputChange, values }) => {
  return (
    <>
      <textarea
        name="contacts"
        cols="30"
        rows="10"
        value={values?.contacts}
        onChange={handleInputChange}
      ></textarea>
    </>
  );
};

export default ContactsField;
