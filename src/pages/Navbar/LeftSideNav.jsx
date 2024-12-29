import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const LeftSideNav = () => {
  return (
    <div className="min-h-screen mx-8 top-20 fixed">
      <div className="flex flex-col justify-center items-center gap-10 text-2xl mt-48">
        <FaGithub className=" hover:text-green-400  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200" />
        <FaInstagram className="hover:text-green-400  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200" />
        <FaLinkedin className=" hover:text-green-400  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200" />
        <FaXTwitter className=" hover:text-green-400  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200" />
        <FaFacebook className=" hover:text-green-400  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-200" />
      </div>

    </div>
  );
};

export default LeftSideNav;