const BlueprintTemplate = ({ currentColor }) => {
  return (
    <div className="cv-template blueprint">
      <h1 style={{ color: `${currentColor}` }}>Jhon Doe</h1>
      <div className="content">
        <div className="left">
          <h2 style={{ color: `${currentColor}` }}>Contacts</h2>
          <p className="cv-template-address">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Voluptatum impedit ab error commodi ratione <br /> ducimus
            consequuntur! Nostrum esse.
          </p>
          <h2 style={{ color: `${currentColor}` }}>Professional summary</h2>
          <ul>
            <li>1 text</li>
            <li>2 text</li>
            <li>3 text</li>
            <li>4 text</li>
            <li>5 text</li>
            <li>6 text</li>
          </ul>
          <h2 style={{ color: `${currentColor}` }}>Skills</h2>
          <ul>
            <li>1 text</li>
            <li>2 text</li>
            <li>3 text</li>
            <li>4 text</li>
            <li>5 text</li>
            <li>6 text</li>
          </ul>
        </div>
        <div className="right">
          <h2 style={{ color: `${currentColor}` }}>Experience</h2>
          <ul>
            <li>1 text</li>
            <li>2 text</li>
            <li>3 text</li>
            <li>4 text</li>
            <li>5 text</li>
            <li>6 text</li>
          </ul>
          <h2 style={{ color: `${currentColor}` }}>Education</h2>
          <ul>
            <li>1 text</li>
            <li>2 text</li>
            <li>3 text</li>
            <li>4 text</li>
            <li>5 text</li>
            <li>6 text</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlueprintTemplate;
