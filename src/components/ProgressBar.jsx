const ProgressBar = ({ progress, color }) => {
  return (
    <div className="progress">
      <span
        className="bar"
        style={{
          width: `${progress.toFixed(2)}%`,
          transition: "0.25s ease",
          backgroundColor: color,
        }}
      ></span>
    </div>
  );
};

export default ProgressBar;
