import ReactMarkdown from "react-markdown";

const AngoraTemplate = (props) => {
  return (
    <div className="cv-template angora">
      <h1 style={{ color: `${props.color}` }}>
        {props.name ? props.name : "Jhon Doe"}
      </h1>
      <h2 style={{ color: `${props.color}` }}>Contacts</h2>
      <ReactMarkdown>
        {props.contacts
          ? props.contacts
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </ReactMarkdown>
      <h2 style={{ color: `${props.color}` }}>Professional Sumarry</h2>
      <ReactMarkdown>
        {props.proffSumarry
          ? props.proffSumarry
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </ReactMarkdown>
      <h2 style={{ color: `${props.color}` }}>Skills</h2>
      <ReactMarkdown>
        {props.skills
          ? props.skills
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </ReactMarkdown>
      <h2 style={{ color: `${props.color}` }}>Experience</h2>
      <ReactMarkdown>
        {props.experience
          ? props.experience
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </ReactMarkdown>
      <h2 style={{ color: `${props.color}` }}>Education</h2>
      <ReactMarkdown>
        {props.education
          ? props.education
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </ReactMarkdown>
    </div>
  );
};

export default AngoraTemplate;
