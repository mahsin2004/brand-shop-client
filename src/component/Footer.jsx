import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-800 to-gray-800">
      <div className="max-w-[1440px] px-16 mx-auto py-14">
        <section className="flex items-center justify-center gap-16">
          <div className="">
            <button className="text-3xl text-white font-semibold">
              CORPORATE <span className="text-red-400">EVENTS</span>
            </button>
          </div>
        </section>
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
