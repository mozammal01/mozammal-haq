import { TypeAnimation } from "react-type-animation";
import LeftToRight from "../../../components/button/LeftToRight";

const Banner = () => {
  return (
    <>
      <div className="my-20 space-y-3 max-w-6xl mx-auto">
        <span className="text-green-400 text-xl font-semibold">
          Hi, My name is
        </span>
        <h2 className="text-7xl font-bold">Mozammal Haq</h2>
        <TypeAnimation
          sequence={[
            'JR. Web Developer',
            2000,
            'Full Stack Developer',
            1000,
            'Mearn Stack Developer',
            1000,
            'Mearn Stack Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-green-400 font-bold uppercase"
          style={{ fontSize: '3em', display: 'inline-block' }}
          repeat={Infinity}
        />
        <div className="w-[700px] font-semibold text-lg">I am a junior web developer passionate about creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and familiar with frameworks like React, Node.js, expressJS, mongoDB and starting learning about NextJS<span className="relative group">
          <span
            className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-7 ms-3"></span>
          <span className="relative text-green-400 cursor-pointer ms-3">My Resume</span>
        </span></div>
        <div className="flex items-center">
          <LeftToRight className='my-5' btnText='My Project' />
        </div>
      </div>

    </>
  );
};

export default Banner;