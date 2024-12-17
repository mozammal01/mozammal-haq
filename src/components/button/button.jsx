const button = () => {


  return (
    <>
      <section className="w-full h-screen flex items-center justify-center gap-10">

        {/* Left To Right On Bottom */}
        <a href="#" id="leftToRightOnBottom"
          className="relative bg-white rounded-lg border-2 border-green-400 text-green-400 py-3 px-5 group">
          <span
            className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
          <span className="relative">Left to Right</span>
        </a>


        {/* Right To Left */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-32 h-16 group-hover:-ms-32 transition-all ease-linear duration-500 bg-green-400 left-32 top-0"></span>
          <span className="relative">Right to Left</span>
        </a>

        {/* Left To Right  */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-32 h-16 group-hover:-me-32 transition-all ease-linear duration-500 bg-green-400 right-32 top-0"></span>
          <span className="relative">Left to Right</span>
        </a>

        {/* Rotate Right */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-64 h-64 mt-12 group-hover:rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-green-400 right-0 top-0"></span>
          <span className="relative">Rotate Right</span>
        </a>

        {/* Rotate Left */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-green-400 left-0 top-0"></span>
          <span className="relative">Rotate left</span>
        </a>

        {/* Up To Down */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-64 h-64 mb-12 group-hover:-mb-24 transition-all ease-linear duration-500 bg-green-400 left-0 bottom-0"></span>
          <span className="relative">Up to Down</span>
        </a>

        {/* Down To Up */}
        <a href="#"
          className="relative bg-white rounded-lg overflow-hidden border-2 border-green-400 text-green-400   duration-500 hover:text-white py-2.5 px-5 group">
          <span
            className="absolute w-64 h-64 mt-12 group-hover:-mt-24 transition-all ease-linear duration-500 bg-green-400 left-0 top-0"></span>
          <span className="relative">Down to Up</span>
        </a>
      </section>
    </>
  );
};

export default button;