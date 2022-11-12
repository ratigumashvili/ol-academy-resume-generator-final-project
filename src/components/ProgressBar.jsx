const ProgressBar = ({ progress, color }) => {
  return (
    <div className="progress">
      <span
        className="bar"
        style={{
          width: `${progress.toFixed(2)}%`,
          backgroundColor: color,
        }}
      ></span>
    </div>
  );
};

export default ProgressBar;
