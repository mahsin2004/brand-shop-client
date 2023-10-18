import { MdVerified } from "react-icons/md";

const Services = () => {
  return (
    <div className="max-w-[1400px] px-16 py-28">
      <div>
        <h1 className="text-center text-5xl">Our Services</h1>
        <p className="text-center text-2xl">
          Our pricing experts exclusive insights help you buy a new or used car
          and get a loan
        </p>
        <div className="grid grid-cols-3 gap-5 justify-between pt-8">
          <div className="bg-white drop-shadow-lg p-6 rounded-2xl">
            <h1>NEW CARS</h1>
            <div className="flex gap-1">
              <MdVerified className=""></MdVerified>
              <p className="text-lg">
                Get exclusive pricing information for almost any make and model
              </p>
            </div>
            <div className="flex gap-1">
              <MdVerified className="text-2xl"></MdVerified>
              <p className="text-lg">
                Our pricing experts constantly monitor the latest deals to give
                you guidance you will not find anywhere else
              </p>
            </div>
            <div className="flex gap-1">
              <MdVerified className=""></MdVerified>
              <p className="text-lg">
                Once you have decided on a car, we will connect you directly to
                the Internet department at a trusted local dealership
              </p>
            </div>
          </div>
          <div>
            <h1>USED CARS</h1>
            <p>
              Our easy-to-navigate local listings come exclusively from trusted
              dealers
            </p>
            <p>
              Save searches and vehicles you are interested in for future
              reference - no sign-up or log-in required
            </p>
            <p>
              Contact dealers for more information on individual models with one
              click
            </p>
          </div>
          <div>
            <h1>AUTO LOANS</h1>
            <p>We offer financing for almost any credit situation</p>
            <p>Start the simple loan process in just 60 seconds</p>
            <p>
              Our lender network has helped millions of customers get new and
              used car loans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
