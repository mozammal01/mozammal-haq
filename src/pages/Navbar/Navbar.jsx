import { Link, NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
  // const location = useLocation();

  // useEffect(() => {

  //   console.log(location);
  //   const home = location.pathname === '/'

  //   try {
  //     if (location.pathname) {
  //       if (home) {
  //         let navHome = document.getElementById("home")
  //         if (navHome) {
  //           navHome.className = 'bg-blue-500'
  //         }
  //         else {
  //           console.log('fuck You');
  //         }
  //         console.log(navHome);
  //       }
  //     }
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }, [location])
  const navLinks = [
    <>
    
      {/* Home */}
      <li><NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: "white" } : {};
        }}
      >
        Home
      </NavLink></li>
      
      {/* About */}
      <li><NavLink
        to="/about"
        style={({ isActive }) => {
          return isActive ? { color: "plum" } : {};
        }}
      >
        About
      </NavLink></li>
      
      {/* Pages */}
      <li><NavLink
        to="/pages"
        style={({ isActive }) => {
          return isActive ? { color: "plum" } : {};
        }}
      >
        Pages
      </NavLink></li>

      {/* services */}
      <li><NavLink
        to="/services"
        style={({ isActive }) => {
          return isActive ? { color: "plum" } : {};
        }}
      >
        Services
      </NavLink></li>

      {/* Contact */}
      <li><NavLink
        to="/contact"
        style={({ isActive }) => {
          return isActive ? { color: "plum" } : {};
        }}
      >
        Contact
      </NavLink></li>
    </>
  ]
  return (
    <div className="navbar bg-base-100 h-16">
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
        <Link to='/'><a className="ms-10"><img width={70} src={logo} alt="logo" /></a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg gap-7">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn font-bold">My Resume</a>
      </div>
    </div>
  );
};

export default Navbar;