import "./BottomLine.css";

const BottomLine = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-3">
        <div className="side-line"></div>
        <div className="middle-line">
          <div className="inner-circle"></div>
        </div>
        <div className="side-line"></div>
      </div>
    </>
  );
};

export default BottomLine;