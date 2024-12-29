import PropTypes from 'prop-types';
const LeftToRight = ({ className, btnText }) => {

  return (
    <>
      {/* Left To Right  */}
      <a href="#"
        className={`${className} relative bg-white rounded overflow-hidden border-2 border-green-400 text-green-400 duration-500 hover:text-white py-2.5 px-5 group`}>
        <span
          className="absolute w-40 h-16 group-hover:-me-40 transition-all ease-linear duration-500 bg-green-400 right-40 top-0"></span>
        <span className="relative font-bold">{btnText}</span>
      </a>
    </>
  );
};


LeftToRight.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string,
};

export default LeftToRight;