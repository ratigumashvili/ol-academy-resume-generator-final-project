const ContextMenu = ({
  anchor,
  menuRef,
  setContextBlock,
  grabbedId,
  handleRemoveItem,
}) => {
  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ top: `${anchor.y}px`, left: `${anchor.x}px` }}
    >
      <button
        className="btn btn-danger"
        value="Remove"
        onClick={() => {
          setContextBlock(false);
          handleRemoveItem(grabbedId);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ContextMenu;
