import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
} from "../../../assets";

export default class CertificatesSwiper extends Component {
  constructor(props) {
    super(props);
    this.prevRef = React.createRef();
    this.nextRef = React.createRef();
  }

  render() {
    return (
      <>
        <div className="slider-container" style={{ position: "relative" }}>
          {/* Tugmalar DOM'da bo'lishi shart */}
          <div
            ref={this.prevRef}
            className="swiper-button-prev"
            style={{ zIndex: 10 }}
          ></div>
          <div
            ref={this.nextRef}
            className="swiper-button-next"
            style={{ zIndex: 10 }}
          ></div>

          <Swiper
            onInit={(swiper) => {
              // Bu yerda DOM'da chiqqan tugmalarga navigation ulanmoqda
              swiper.params.navigation.prevEl = this.prevRef.current;
              swiper.params.navigation.nextEl = this.nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={5}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{

              280:{
                slidesPerView: 1,
                spaceBetween: 10,
              },
             
              490: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              708: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {[
              certificate1,
              certificate2,
              certificate3,
              certificate4,
              certificate5,
              certificate1,
              certificate2,
              certificate3,
              certificate4,
              certificate5,
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`certificate-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
}
