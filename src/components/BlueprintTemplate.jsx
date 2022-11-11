import ReactMarkdown from "react-markdown";

const BlueprintTemplate = (props) => {
  return (
    <div className="cv-template blueprint">
      <h1 style={{ color: `${props.color}` }}>
        {props.name ? props.name : "Jhon Doe"}
      </h1>
      <div className="content">
        <div className="left">
          <h2 style={{ color: `${props.color}` }}>Contacts</h2>
          <ReactMarkdown>
            {props.contacts
              ? props.contacts
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </ReactMarkdown>
          <h2 style={{ color: `${props.color}` }}>Professional summary</h2>
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
        </div>
        <div className="right">
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
      </div>
    </div>
  );
};

export default BlueprintTemplate;
