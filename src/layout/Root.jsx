import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import LeftSideNav from "../pages/Navbar/LeftSideNav";
import RightSideNav from "../pages/Navbar/RightSideNav";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="relative">
        <div className="min-h-screen">
          <div>
            <LeftSideNav />
          </div>

          <Outlet></Outlet>
          <div className="absolute right-10">
            <RightSideNav />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;