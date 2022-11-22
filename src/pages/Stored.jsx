import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

import ContextMenu from "../components/ContextMenu";
import useContextMenu from "../hooks/useContextMenu";
import { resumeSort } from "../helpers/helpers";

const Stored = ({ resumes, setResumes }) => {
  const handleRemoveItem = (itemToDelete) => {
    const updatedArray = resumes.filter(({ id }) => id !== itemToDelete);
    setResumes(updatedArray);
    localStorage.setItem("all-resumes", JSON.stringify(updatedArray));
  };

  const historyListRef = useRef();
  const menuRef = useRef();

  const { anchor, contextBlock, grabbedId, setContextBlock } = useContextMenu(
    historyListRef,
    menuRef
  );

  return (
    <>
      <h2 className="component-heading">Stored</h2>
      {resumes && (
        <ul className="history-list" ref={historyListRef}>
          {resumes.sort(resumeSort).map(({ id, time, data }) => {
            return (
              <li key={id} id={id}>
                <b>Name</b>: {data.name} &nbsp; <b>Time</b>: {time}
                <button
                  onClick={() => handleRemoveItem(id)}
                  className="btn btn-danger"
                >
                  <HiX />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {contextBlock && (
        <ContextMenu
          anchor={anchor}
          menuRef={menuRef}
          setContextBlock={setContextBlock}
          grabbedId={grabbedId}
          handleRemoveItem={handleRemoveItem}
        />
      )}

      <Link className="btn btn-cta" to="/">
        Go home
      </Link>
    </>
  );
};

export default Stored;
