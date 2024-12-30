import './TopLine.css'


const TopLine = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-center mt-8">
          <div className="top-side-line"></div>
          <div className="top-middle-line">
            <div className="top-inner-circle"></div>
          </div>
          <div className="side-line"></div>
        </div>
      </>
    </div>
  );
};

export default TopLine;