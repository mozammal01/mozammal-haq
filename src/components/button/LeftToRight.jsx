import PropTypes from 'prop-types';
const LeftToRight = ({ className, btnText }) => {

  return (
    <>
      {/* Left To Right  */}
      <a href="#"
        className={`${className} relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400 duration-500 hover:text-white py-2.5 px-5 group`}>
        <span
          className="absolute w-32 h-16 group-hover:-me-32 transition-all ease-linear duration-500 bg-green-400 right-32 top-0"></span>
        <span className="relative">{btnText}</span>
      </a>
    </>
  );
};


LeftToRight.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string,
};

export default LeftToRight;