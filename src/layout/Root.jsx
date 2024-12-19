import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import LeftSideNav from "../pages/Navbar/LeftSideNav";
import RightSideNav from "../pages/Navbar/RightSideNav";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-1">
          <LeftSideNav />
        </div>
        <div className="col-span-10 min-h-screen">
          <Outlet></Outlet>
        </div>
        <div className="col-span-1">
          <RightSideNav />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;