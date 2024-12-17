import PropTypes from 'prop-types';

const UpToDown = ({ className, btnText }) => {
  return (
    <>
      {/* Up To Down */}
      <a href="#"
          className={`${className} relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group`}>
          <span
            className="absolute w-64 h-64 mb-12 group-hover:-mb-24 transition-all ease-linear duration-500 bg-green-400 left-0 bottom-0"></span>
          <span className="relative">{btnText}</span>
        </a>
    </>
  );
};

UpToDown.propTypes = {
  className: PropTypes.string,
    btnText: PropTypes.string,
};

export default UpToDown;