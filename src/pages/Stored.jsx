import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

import ContextMenu from "../components/ContextMenu";
import useContextMenu from "../hooks/useContextMenu";

const Stored = ({ resumes, setResumes }) => {
  const handleRemoveItem = (itemToDelete) => {
    const updatedArray = resumes.filter((item) => item.id !== itemToDelete);
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
          {resumes
            .sort((a, b) =>
              b.data.name !== a.data.name
                ? a.data.name > b.data.name
                  ? 1
                  : -1
                : b.time > a.time
                ? 1
                : -1
            )
            .map((item) => {
              const { id, time } = item;
              return (
                <li key={id}>
                  <div>Name: {item.data.name}</div>
                  <div className="right">
                    <div id={id}>Time: {time}</div>
                    <button
                      onClick={() => handleRemoveItem(id)}
                      className="btn btn-danger"
                      style={{ marginLeft: "15px" }}
                    >
                      <HiX />
                    </button>
                  </div>
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
