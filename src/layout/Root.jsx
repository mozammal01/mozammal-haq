import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;