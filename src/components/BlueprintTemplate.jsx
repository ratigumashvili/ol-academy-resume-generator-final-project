import ReactMarkdown from "react-markdown";

const BlueprintTemplate = ({
  color,
  name,
  contacts,
  proffSumarry,
  skills,
  experience,
  education,
}) => {
  return (
    <div className="cv-template blueprint">
      {name && <h1 style={{ color: `${color}` }}>{name}</h1>}
      <div className="content">
        <div className="left">
          {contacts && (
            <>
              <h2 style={{ color: `${color}` }}>Contacts</h2>
              <ReactMarkdown>{contacts}</ReactMarkdown>
            </>
          )}

          {proffSumarry && (
            <>
              <h2 style={{ color: `${color}` }}>Professional summary</h2>
              <ReactMarkdown>{proffSumarry}</ReactMarkdown>
            </>
          )}

          {skills && (
            <>
              <h2 style={{ color: `${color}` }}>Skills</h2>
              <ReactMarkdown>{skills}</ReactMarkdown>
            </>
          )}
        </div>
        <div className="right">
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
      </div>
    </div>
  );
};

export default BlueprintTemplate;
