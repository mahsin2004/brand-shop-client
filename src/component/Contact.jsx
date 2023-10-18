import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.postimg.cc/brWTprjC/contact-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16">
        <div className="lg:flex lg:justify-around">
          <div className="card text-white p-6 rounded-xl glass space-y-4 lg:w-1/2 mb-10">
            <h2 className="pb-4 pt-2 text-3xl lg:text-5xl pl-4 rounded-md bg-gradient-to-tr from-gray-900 to-gray-600 font-medium">
              Get in Touch
            </h2>
            <p className="text-3xl lg:text-5xl font-medium w-5/6">
              Send us a message for any information
            </p>
            <div className=" space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <BsTelephoneFill></BsTelephoneFill>
                </span>
                <p>+8801741156408</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">
                  <MdEmail></MdEmail>
                </span>
                <p>info@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">
                  <MdLocationOn></MdLocationOn>
                </span>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div>
              <form className="space-y-4 text-center">
                <input
                  className="w-full px-4 py-2 rounded-md"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <br />
                <input
                  className="w-full px-4 py-2 rounded-md"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <br />
                <textarea
                  className="w-full px-4 pt-2 rounded-md"
                  name="massage"
                  placeholder="Write massage"
                  cols="20"
                  rows="8"
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="px-[18px] rounded-md py-2 bg-white font-medium hover:bg-gray-800 hover:text-white hover:transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
