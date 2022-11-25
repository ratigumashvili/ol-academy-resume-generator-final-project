import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { setDataToLS } from "../helpers/helpers";

const Edit = ({ setValues }) => {
  const [uploadedResume, setUploadedResume] = useState("");
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      setUploadedResume(JSON.parse(text));
    };

    reader.readAsText(e.target.files[0]);
  };

  useEffect(() => {
    setValues(uploadedResume[0]);
  }, [uploadedResume, setValues]);

  const handleNavigateWithParams = (e) => {
    e.preventDefault();
    const [, theme, color] = uploadedResume;
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme,
        color,
      }).toString(),
    });
    setDataToLS("template", { theme, color });
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
        <button
          className="btn btn-cta"
          type="submit"
          disabled={!uploadedResume}
        >
          Proceed
        </button>
      </form>
    </>
  );
};

export default Edit;
