import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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
        modules={[Navigation, Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/fdh4d5R/header-event-management.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Conferences and Seminars
                </h1>
                <p className="mb-5">
                  Our Conferences and Seminars Service is committed to
                  delivering excellence in event planning and management.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/16Qdz59/exhibitions.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Trade Shows and Expos
                </h1>
                <p className="mb-5">
                  Our Trade Shows and Expos Service is dedicated to ensuring
                  that your event stands out, meets your goals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/BtKLQF7/Team-Building-Page-Imagepng.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Team Building Workshops
                </h1>
                <p className="mb-5">
                  Our Building Workshops Service is committed to providing
                  valuable.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/tYjM3nV/product-launches.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Product Launches</h1>
                <p className="mb-5">
                  Our Product Launches Service is dedicated to ensuring your
                  product launch is a resounding success.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/g4nRDSK/corporate-meeting.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Corporate Meetings</h1>
                <p className="mb-5">
                  Our Corporate Meetings Service is dedicated to helping you
                  maximize the impact of your meetings.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/dD3hrbQ/ceremony.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Award Ceremonies</h1>
                <p className="mb-5">
                  Our Award Ceremonies Service is dedicated to helping you
                  create a prestigious and memorable event that celebrates
                  achievements and inspires future success.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
