import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="" />
        <h1 className="text-3xl text-center uppercase -mt-16 pb-16 text-white">
          Salads
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
        <h1 className="text-3xl text-center uppercase -mt-16 text-white">
          Soups
        </h1>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src={img3} alt="" />
        <h1 className="text-3xl text-center uppercase -mt-16 text-white">
          pizzas
        </h1>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src={img4} alt="" />
        <h1 className="text-3xl text-center uppercase -mt-16 text-white">
          desserts
        </h1>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img src={img5} alt="" />
        <h1 className="text-3xl text-center uppercase -mt-16 text-white">
          Salads
        </h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
