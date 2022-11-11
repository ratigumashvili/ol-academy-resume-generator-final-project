const AngoraTemplate = ({ currentColor }) => {
  return (
    <div className="cv-template angora">
      <h1 style={{ color: `${currentColor}` }}>Jhon Doe</h1>
      <p className="cv-template-address">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Voluptatum impedit ab error commodi ratione <br /> ducimus consequuntur!
        Nostrum esse.
      </p>
      <h2 style={{ color: `${currentColor}` }}>Professional Sumarry</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        placeat unde, fugiat ab consequuntur expedita sunt quae minus fuga
        delectus dolorum voluptatibus nostrum? Odio, pariatur delectus? Beatae
        non libero eius.
      </p>
      <h2 style={{ color: `${currentColor}` }}>Skills</h2>
      <ul>
        <li>1 text</li>
        <li>2 text</li>
        <li>3 text</li>
        <li>4 text</li>
        <li>5 text</li>
        <li>6 text</li>
      </ul>
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
  );
};

export default AngoraTemplate;
