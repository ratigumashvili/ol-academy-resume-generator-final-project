import ReactMarkdown from "react-markdown";

const AngoraTemplate = (props) => {
  return (
    <div className="cv-template angora">
      {props.name && <h1 style={{ color: `${props.color}` }}>{props.name}</h1>}
      {props.contacts && (
        <>
          <h2 style={{ color: `${props.color}` }}>Contacts</h2>
          <ReactMarkdown>{props.contacts}</ReactMarkdown>
        </>
      )}
      {props.proffSumarry && (
        <>
          <h2 style={{ color: `${props.color}` }}>Professional Sumarry</h2>
          <ReactMarkdown>{props.proffSumarry}</ReactMarkdown>
        </>
      )}
      {props.skills && (
        <>
          <h2 style={{ color: `${props.color}` }}>Skills</h2>
          <ReactMarkdown>{props.skills}</ReactMarkdown>
        </>
      )}
      {props.experience && (
        <>
          <h2 style={{ color: `${props.color}` }}>Experience</h2>
          <ReactMarkdown>{props.experience}</ReactMarkdown>
        </>
      )}
      {props.education && (
        <>
          <h2 style={{ color: `${props.color}` }}>Education</h2>
          <ReactMarkdown>{props.education}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default AngoraTemplate;
