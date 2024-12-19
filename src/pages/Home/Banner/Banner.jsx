import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="my-20 space-y-3">
      <span className="text-green-400 text-xl font-semibold">
        Hi, My name is
      </span>
      <h2 className="text-7xl font-bold">Mozammal Haq</h2>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'JR. Web Developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
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
      <div className="w-[700px] font-semibold text-lg">I am a junior web developer passionate about creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and familiar with frameworks like React, Node.js, expressJS and starting learning about NextJS, I enjoy building dynamic web applications. I’m eager to learn, grow, and contribute to innovative projects that enhance user experiences on the web. <span className="relative group">
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-7"></span>
        <span className="relative text-green-400 cursor-pointer">My Resume</span>
      </span></div>
    </div>
  );
};

export default Banner;