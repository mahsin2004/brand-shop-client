import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-28">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="flex justify-around">
          <div className=" space-y-4 w-1/2">
            <h2 className="text-[45px] text-[#331A15]">Get in Touch</h2>
            <p className="text-5xl font-medium w-5/6">Send us a message for any information</p>
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
          <div className="w-1/3">
            <div>
              <form className="space-y-4">
                <input
                  className="w-full px-4 py-2 rounded-sm"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <br />
                <input
                  className="w-full px-4 py-2 rounded-sm"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <br />
                <textarea
                  className="w-full px-4 pt-2 rounded-sm"
                  name="massage"
                  placeholder="Write massage"
                  cols="20"
                  rows="8"
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="px-[18px] py-[6px] border-2 hover:border-[#E3B577] text-xl text-[#242222] hover:bg-[#E3B577]"
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
