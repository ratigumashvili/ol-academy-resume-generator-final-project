const BlueprintTemplate = (props) => {
  return (
    <div className="cv-template blueprint">
      <h1 style={{ color: `${props.color}` }}>
        {props.name ? props.name : "Jhon Doe"}
      </h1>
      <div className="content">
        <div className="left">
          <h2 style={{ color: `${props.color}` }}>Contacts</h2>
          <p className="cv-template-address">
            {props.contacts
              ? props.contacts
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </p>
          <h2 style={{ color: `${props.color}` }}>Professional summary</h2>
          <p>
            {props.proffSumarry
              ? props.proffSumarry
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </p>
          <h2 style={{ color: `${props.color}` }}>Skills</h2>
          <p>
            {props.skills
              ? props.skills
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </p>
        </div>
        <div className="right">
          <h2 style={{ color: `${props.color}` }}>Experience</h2>
          <p>
            {props.experience
              ? props.experience
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </p>
          <h2 style={{ color: `${props.color}` }}>Education</h2>
          <p>
            {props.education
              ? props.education
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlueprintTemplate;
