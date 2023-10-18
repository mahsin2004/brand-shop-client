import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-800 to-gray-800">
      <div className="max-w-[1440px] px-16 mx-auto py-14">
        <div className="lg:flex lg:gap-48 lg:items-center lg:justify-center">
          <div className="mb-6">
            <img
              className=" w-28 text-white mx-auto lg:mx-0"
              src="https://i.postimg.cc/m2PtjFSF/output-onlinepngtools.png"
              alt="logo"
            />
            <p className="uppercase text-white text-2xl text-center">Automotive</p>
          </div>
          <div className="flex gap-10 justify-center">
            <NavLink to="/">
              <p className=" text-white">
                Home
              </p>
            </NavLink>
            <NavLink to="/addProduct">
              <p className=" text-white">
                Add Product
              </p>
            </NavLink>
            <NavLink to="/myCart">
              <p className=" text-white">
                My Cart
              </p>
            </NavLink>
          </div>
        </div>
        <h1 className="h-[.5px] rounded-full bg-white/30 my-8"></h1>
        <section className="flex flex-col gap-3 ">
          <div className="flex justify-center gap-3">
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800 transition">
              <BsInstagram></BsInstagram>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <BsTwitter></BsTwitter>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <FaLinkedin></FaLinkedin>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <BsYoutube></BsYoutube>
            </button>
          </div>
          <div className="text-center text-white">
            <p>© 2023 Automotive. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
