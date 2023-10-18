const Services = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-28">
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800">Our Services</h1>
        <div className="pt-2">
          <p className=" text-gray-600 lg:text-xl lg:w-2/4">
            Our pricing experts exclusive insights help you buy a new or used
            car and get a loan
          </p>
        </div>

        {/* part-1 */}
        <div className="grid lg:grid-cols-3 gap-6 justify-between mt-11">
          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-pink-400 hover:scale-105 hover:transition bg-clip-border p-8 text-white shadow-md shadow-gray-500/40">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/50 bg-clip-border">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                Service 1
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-2xl">
                NEW CARS
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Get exclusive pricing information for almost any make and
                    model
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Our pricing experts constantly monitor the latest deals to
                    give you guidance you will not find anywhere else
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Once you have decided on a car, we will connect you directly
                    to the Internet department at a trusted local dealership
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* part-2 */}

          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-pink-600 hover:to-pink-400 hover:scale-105 hover:transition bg-clip-border p-8 text-white shadow-md shadow-gray-500/40">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/50 bg-clip-border">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                Service 2
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-2xl">
                USED CARS
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Our easy-to-navigate local listings come exclusively from
                    trusted dealers
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Save searches and vehicles you are interested in for future
                    reference - no sign-up or log-in required
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Contact dealers for more information on individual models
                    with one click
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* part-3 */}

          <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-pink-600 hover:to-pink-400 hover:scale-105 hover:transition bg-clip-border p-8 text-white shadow-md shadow-gray-500/40">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/50 bg-clip-border">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                Service 3
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-2xl">
                AUTO LOANS
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    We offer financing for almost any credit situation
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Start the simple loan process in just 60 seconds
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    Our lender network has helped millions of customers get new
                    and used car loans
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
