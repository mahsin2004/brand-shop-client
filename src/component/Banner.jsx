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
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/4d11fJQ6/bmw1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-center">
              <div className="flex gap-4 items-center -mt-[260px]">
                <img className="w-[55px] lg:w-[74px] " src="https://i.postimg.cc/MpN7C6j3/bmw.png" alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">BMW 3 Series</p>
              </div>
              <button className="glass  px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
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
            <div className="text-center">
              <div className="flex gap-4 items-center -mt-[260px]">
                <img className="w-16 lg:w-20 " src="https://i.postimg.cc/mD3wsvYx/output-onlinepngtools-1.png" alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">Tesla 3 Model Y</p>
              </div>
              <button className="glass  px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
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
            <div className="text-center">
              <div className="flex items-center -mt-[260px]">
                <img className="w-[120px] lg:w-[180px] -mr-10" src="https://i.postimg.cc/9fgbb6dC/toyota-log.png" alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">Toyota Corolla</p>
              </div>
              <button className="glass px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/SRsNW0YY/roadster-3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-center">
              <div className="flex items-center -mt-[260px]">
                <img className="w-16 lg:w-20 " src="https://i.postimg.cc/mD3wsvYx/output-onlinepngtools-1.png" alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">Tesla Roadster</p>
              </div>
              <button className="glass  px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
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
            <div className="text-center">
              <div className="flex gap-1 items-center -mt-[260px]">
                <img className="w-[100px] lg:w-[150px] -mr-4" src="https://i.postimg.cc/J031vzBJ/mercedes.png" alt="" />
                <p className="text-xl lg:text-5xl font-semibold text-white">Mercedes-Benz C-Class</p>
              </div>
              <button className="glass  px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/V6PWhrd9/ford-car.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-center">
              <div className="flex gap-4 items-center -mt-[260px]">
                <img className="w-[130px] lg:w-[170px] " src="https://i.postimg.cc/5t9gJ44w/output-onlinepngtools-2.png" alt="" />
                <p className="text-3xl lg:text-5xl font-semibold text-white">Ford mustang</p>
              </div>
              <button className="glass -mt-4 px-[12px] py-[6px] lg:py-[10px]  lg:px-[18px] text-white rounded-md  hover:bg-white font-medium hover:text-gray-800 hover:transition">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
