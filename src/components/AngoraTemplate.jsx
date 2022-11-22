import ReactMarkdown from "react-markdown";

const AngoraTemplate = ({
  color,
  name,
  contacts,
  proffSumarry,
  skills,
  experience,
  education,
}) => {
  return (
    <div className="cv-template angora">
      {name && <h1 style={{ color: `${color}` }}>{name}</h1>}
      {contacts && (
        <>
          <h2 style={{ color: `${color}` }}>Contacts</h2>
          <ReactMarkdown>{contacts}</ReactMarkdown>
        </>
      )}

      {proffSumarry && (
        <>
          <h2 style={{ color: `${color}` }}>Professional Sumarry</h2>
          <ReactMarkdown>{proffSumarry}</ReactMarkdown>
        </>
      )}

      {skills && (
        <>
          <h2 style={{ color: `${color}` }}>Skills</h2>
          <ReactMarkdown>{skills}</ReactMarkdown>
        </>
      )}

      {experience && (
        <>
          <h2 style={{ color: `${color}` }}>Experience</h2>
          <ReactMarkdown>{experience}</ReactMarkdown>
        </>
      )}

      {education && (
        <>
          <h2 style={{ color: `${color}` }}>Education</h2>
          <ReactMarkdown>{education}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default AngoraTemplate;
