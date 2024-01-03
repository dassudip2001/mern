const ProgressBar = ({ progress }) => {
  const colors = [
    "rgb(247, 233, 135)",
    "rgb(100, 204, 197)",
    "rgb(210, 222, 50)",
    "rgb(19, 32, 67)",
    "rgb(248, 255, 149)",
    "rgb(37, 43, 72)",
    "rgb(91, 154, 139)",
    "rgb(246, 99, 92)",
    "rgb(246, 99, 92)",
    "rgb(92, 131, 116)",
    "rgb(188, 122, 249)",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return (
    <>
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor }}
      ></div>
    </div>
    <span className="progress-value">{progress}%</span>
    </>
  );
};

export default ProgressBar;
