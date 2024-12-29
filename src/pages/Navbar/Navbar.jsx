import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import UpToDown from "../../components/button/UpToDown";

const Navbar = () => {

  const navLinks = [
    <>

      {/* Home */}
      <li><NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: ['#4ade80'], backgroundColor: 'white', border: 'solid 2px #4ade80' } : {};
        }}
        className='relative bg-white rounded-lg py-2 px-5 group'
      >
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
        <span className="relative">Home</span>
      </NavLink></li>

      {/* About */}
      <li><NavLink
        to='/about'
        style={({ isActive }) => {
          return isActive ? { color: ['#4ade80'], backgroundColor: 'white', border: 'solid 2px #4ade80' } : {};
        }}
        className='relative bg-white rounded-lg py-2 px-5 group'
      >
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
        <span className="relative">About</span>
      </NavLink></li>

      {/* Pages */}
      <li><NavLink
        to="/pages"
        style={({ isActive }) => {
          return isActive ? { color: ['#4ade80'], backgroundColor: 'white', border: 'solid 2px #4ade80' } : {};
        }}
        className='relative bg-white rounded-lg py-2 px-5 group'
      >
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
        <span className="relative">Pages</span>
      </NavLink></li>

      {/* services */}
      <li><NavLink
        to="/services"
        style={({ isActive }) => {
          return isActive ? { color: ['#4ade80'], backgroundColor: 'white', border: 'solid 2px #4ade80' } : {};
        }}
        className='relative bg-white rounded-lg py-2 px-5 group'
      >
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
        <span className="relative">Services</span>
      </NavLink></li>

      {/* Contact */}
      <li><NavLink
        to="/contact"
        style={({ isActive }) => {
          return isActive ? { color: ['#4ade80'], backgroundColor: 'white', border: 'solid 2px #4ade80' } : {};
        }}
        className='relative bg-white rounded-lg py-2 px-5 group'
      >
        <span
          className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-green-400 left-0 top-14"></span>
        <span className="relative">Contact</span>
      </NavLink></li>
    </>
  ]

  return (
    <div className="navbar max-w-7xl mx-auto bg-base-800 items-center h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to='/'><p className="ms-10"><img width={70} src={logo} alt="logo" /></p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg gap-7">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <UpToDown className='font-bold' btnText='My Resume' />
      </div>
    </div>
  );
};

export default Navbar;