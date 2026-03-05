import "./information.scss";

import React, { Component } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default class Information extends Component {
  state = {
    isFocusName: false,
    isFocusTel: false,
  };

  render() {
    return (
      <>
        <section className="info" id="Контакты">
          <div className="container">
            <div className="info--wrapper">
              <h2>
                Получить подробную <span>информацию</span>
              </h2>
              <p>
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
              <form>
                <label>
                  <div
                    className={`icon-box ${this.state.isFocusName && "focus"}`}
                  >
                    <IoPersonSharp className="icon" />
                  </div>
                  <input
                    onFocus={() => this.setState({ isFocusName: true })}
                    onBlur={() => this.setState({ isFocusName: false })}
                    type="text"
                    placeholder="Ваше имя"
                  />
                </label>
                <label>
                  <div
                    className={`icon-box ${this.state.isFocusTel && "focus"}`}
                  >
                    <BsFillTelephoneFill className="icon" />
                  </div>
                  <input
                    type="tel"
                    onFocus={() => this.setState({ isFocusTel: true })}
                    onBlur={() => this.setState({ isFocusTel: false })}
                    placeholder="+375 (29) 0000000"
                  />
                </label>
                <textarea placeholder="Комментарий"></textarea>
                <button className="btn" disabled>Получить информацию</button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
