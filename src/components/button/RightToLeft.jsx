import PropTypes from 'prop-types';

const RightToLeft = ({ className, btnText }) => {
  return (
    <div className='flex items-center'>
      <a href="#"
        className={`${className} relative bg-white rounded overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group`}>
        <span
          className="absolute w-40 h-16 group-hover:-ms-40 transition-all ease-linear duration-500 bg-green-400 left-40 top-0"></span>
        <span className="relative font-bold">{btnText}</span>
      </a>
    </div>
  );
};



RightToLeft.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string,
};

export default RightToLeft;