import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const LeftSideNav = () => {
  return (
    <div className="min-h-screen mx-8 fixed">
      <div className="flex flex-col justify-center items-center gap-10 text-2xl mt-48">
      <FaGithub />
      <FaInstagram />
      <FaLinkedin />
      <FaXTwitter />
      <FaFacebook />
      </div>

    </div>
  );
};

export default LeftSideNav;