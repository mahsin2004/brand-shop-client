import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        scrollbar={{ clickable: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/4d11fJQ6/bmw1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" -mt-[260px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/3RCTCbg8/tesla2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" -mt-[260px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/VkJhgHjq/toyota.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" mt-[370px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/SNhQwCZY/tesla.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" -mt-[260px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/2SsVSymP/mercedes1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" mt-[370px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/J7s0Zjn9/ford.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className=" -mt-[260px] text-white text-5xl font-semibold">
                  Conferences and Seminars
                </h1>
                <button className="glass mt-3 px-[18px] text-white rounded-md py-2 hover:bg-white font-medium  hover:text-gray-800 hover:transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
