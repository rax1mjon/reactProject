import "./News.scss";

import React, { Component } from "react";
import { newsData } from "./newsData";
import { news1, news2, news3 } from "../../../assets";
import NewsCard from "./NewsCard";

export default class News extends Component {
  render() {
    let images = [news1, news2, news3];
    return (
      <>
        <section className="news" id="Новости">
          <div className="container news--wrapper">
            <h2>Новости</h2>
            <ul className="news--list">
              {newsData.map((card, i) => {
                let { date, title } = card;
                return (
                  <NewsCard
                    key={i}
                    date={date}
                    title={title}
                    image={images[i]}
                  />
                );
              })}
            </ul>
            <a href="#" className="whiteBtn">
              Все новости
            </a>
          </div>
        </section>
      </>
    );
  }
}
