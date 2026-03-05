// import { bg1 } from "../../../assets";
import "./hero.scss";

import React, { Component } from "react";
import HeroSwiper from "./heroSwiper";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero" id="Продукция">
        <div className="hero--wrapper">
          <HeroSwiper />
        </div>
      </section>
    );
  }
}
