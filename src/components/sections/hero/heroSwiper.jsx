import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";
import { heroData } from "./heroData";

export default class HeroSwiper extends Component {
  render() {
    return (
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        loop={true}
        className="mySwiper"
      >
        {heroData.map((products, index) => {
          const { name, product, description, image } = products;
          return (
            <SwiperSlide key={index}>
              <div className="container hero--cardContainer">
                <img src={image} alt="" className="bg" />
                <div className="hero--card">
                  <span>{name}</span>
                  <h1>{product}</h1>
                  <p>{description}</p>
                  <a href="#Каталог">Каталог</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}
