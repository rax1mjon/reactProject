import React, { Component } from "react";
import "./footer.scss";
import { logo, social } from "../../assets";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer--wrapper">
          <div className="footer--head">
            <img src={logo} alt="site logo ?" />
            <img src={social} alt="social media ?" />
          </div>
          <div className="footer--body">
            <nav className="navFooter">
              <ul className="navFooter--menus">
                <li className="navFooter--list">
                  <h3>Продукция</h3>
                  <ul className="navFooter--minMenu">
                    <li>
                      <a>Ламинатные тубы</a>
                    </li>
                    <li>
                      <a>Экструзионные тубы</a>
                    </li>
                    <li>
                      <a>Другая упаковка</a>
                    </li>
                  </ul>
                </li>
                <li className="navFooter--list">
                  <h3>Компания</h3>
                  <ul className="navFooter--minMenu">
                    <li>
                      <a href="#ОНас">О нас</a>
                    </li>
                    <li>
                      <a href="#команда">Наша команда</a>
                    </li>
                    <li>
                      <a href="#Сертификаты">Сертификаты</a>
                    </li>
                  </ul>
                </li>
                <li className="navFooter--list">
                  <h3>Разделы</h3>
                  <ul className="navFooter--minMenu">
                    <li>
                      <a href="#Контакты">Контакты</a>
                    </li>
                    <li>
                      <a href="#Новости">Новости</a>
                    </li>
                    <li>
                      <a href="#Вакансии  ">Вакансии</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <ul className="footer--contact">
              <li >
                <h4>Беларусь</h4>
                <a href="tel:+375 (17) 270 53 77">+375 (17) 270 53 77</a>
                <a href="tel:+375 (17) 270 53 78">+375 (17) 270 53 78</a>
              </li>
              <li >
                <h4>Европа</h4>
                <a href="tel:+48 73 1111 044</a>">+48 73 1111 044</a>
              </li>
              <li >
                <h4>Москва</h4>
                <a href="tel:+7 (495) 280 73 44<">+7 (495) 280 73 44</a>
                <a href="tel:+7 (495) 280 73 44<">+7 (495) 280 73 44</a>
              </li>
              <li >
                <h4>Екатеринбург</h4>
                <a href="tel:+7 (343) 346 82 06<">+7 (343) 346 82 06</a>
              </li>
            </ul>
          </div>
          <div className="footer--bottom">
            <p>
              © 2022 Leangroup. All Rights Reserved. <br />
              Разработка и продвижение сайтов SkyWeb.by
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
