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
import PropTypes from "prop-types";


const Slider = ({ brand }) => {
  return (
    <div className="">
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
                className="hero min-h-screen card"
                style={{
                  backgroundImage: `url(${brand?.slider_1})`,
                }}
              >
                <div className="hero-overlay bg-opacity-5"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${brand?.slider_2})`,
                }}
              >
                <div className="hero-overlay bg-opacity-5"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${brand?.slider_3})`,
                }}
              >
                <div className="hero-overlay bg-opacity-5"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      
    </div>
  );
};

Slider.propTypes = {
  brand: PropTypes.object,
};

export default Slider;
