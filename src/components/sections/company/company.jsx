import ReactPlayer from "react-player";
import { video } from "../../../assets";
import "./company.scss";

import React, { Component } from "react";

export default class Company extends Component {
  state = {
    showPlayer: false,
  };
  handleClick = () => {
    this.setState({ showPlayer: !this.state.showPlayer }); // rasmga bosilganda video ochiladi
  };
  render() {
    return (
      <>
        <section className="company">
          <div className="company--wrapper container">
            <h2>
              О компании <span>LEANGROUP</span>
            </h2>
            <div className="company--body">
              <div className="company--media">
                {this.state.showPlayer ? (
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=19u4NDOHE9w"}
                    playing
                    controls
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <img
                    src={video}
                    alt="video preview"
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={this.handleClick}
                  />
                )}
              </div>
              <div className="company--description">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.
                </p>
                <p>
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                </p>
                <p>
                  С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
