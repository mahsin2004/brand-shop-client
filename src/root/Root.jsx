import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Toaster/>
        <Footer></Footer>
    </div>
  );
};

export default Root;