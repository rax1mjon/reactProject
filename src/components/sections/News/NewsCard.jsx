import React, { Component } from "react";

export default class NewsCard extends Component {
  render() {
    let { date, title, image } = this.props;
    return (
      <>
        <li className="news--card">
          <div className="news--card__img">
            <img src={image} alt="no img?" />
          </div>
          <span>{date}</span>
          <p>{title}</p>
        </li>
      </>
    );
  }
}
