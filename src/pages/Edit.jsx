import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Edit = ({ setValues }) => {
  const [temp, setTemp] = useState("");
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      setTemp(JSON.parse(text));
    };

    reader.readAsText(e.target.files[0]);
  };

  useEffect(() => {
    setValues(temp[0]);
  }, [temp, setValues]);

  const handleNavigateWithParams = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: temp[1],
        color: temp[2],
      }).toString(),
    });
    const newObj = { theme: temp[1], color: temp[2] };
    localStorage.setItem("template", JSON.stringify(newObj));
  };

  return (
    <>
      <h2 className="component-heading">Edit resume</h2>
      <form className="upload-resume" onSubmit={handleNavigateWithParams}>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload a file
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/JSON"
          onChange={handleUpload}
        />
        <button className="btn btn-cta" type="submit" disabled={!temp}>
          Proceed
        </button>
      </form>
    </>
  );
};

export default Edit;
