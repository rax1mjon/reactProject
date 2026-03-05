import React, { Component } from "react";
import "./header.scss";
import { logo } from "../../assets";

export default class Header extends Component {
  state = {
    hamburger: false,
    darkMode: false,
  };
  componentDidUpdate() {
    document.body.className = this.state.darkMode ? "dark" : "";
  }

  hamburgerToggle = () => {
    this.setState({ hamburger: !this.state.hamburger });
  };

  darkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };
  render() {    
    return (
      <>
        <header className="header">
          <div className="container header--wrapper">
            <div className="header--brand">
                <img src={logo} alt="site logo ?" />
            </div>
            <nav className="nav">
              <ul
                className={`${
                  this.state.hamburger ? "nav--menu  active" : "nav--menu "
                }`}
              >
                <li>
                  <a href="#Продукция">Продукция</a>
                </li>
                <li></li>
                <li>
                  <a href="#Сертификаты">Сертификаты</a>
                </li>
                <li></li>
                <li>
                  <a href="#НашаKоманда">Наша команда</a>
                </li>
                <li></li>
                <li>
                  <a href="#ОНас">О нас</a>
                </li>
                <li></li>
                <li>
                  <a href="#Новости">Новости</a>
                </li>
                <li></li>

                <li></li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <a href="#Контакты">Контакты</a>
                  <div className="darkMode" style={{ display: "inline" }}>
                    <label htmlFor="theme" className="theme">
                      <span className="theme__toggle-wrap">
                        <input
                          onClick={this.darkMode}
                          id="theme"
                          className="theme__toggle"
                          type="checkbox"
                          role="switch"
                          name="theme"
                          value="dark"
                        />
                        <span className="theme__fill"></span>
                        <span className="theme__icon">
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                          <span className="theme__icon-part"></span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </nav>
            <div onClick={this.hamburgerToggle} className="hamburger">
              ≡
            </div>
          </div>
        </header>
      </>
    );
  }
}
