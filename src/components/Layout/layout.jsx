import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../sections/hero/hero";
import Company from "../sections/company/company";
import Certificates from "../sections/certificates/certificates";
import Products from "../sections/products/products";
import Information from "../sections/information/information";
import Team from "../sections/team/team";
import News from "../sections/News/News";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          {/* ▼ sections ▼ */}

          <Hero />
          <Company />
          <Certificates />
          <Products />
          <Information />
          <Team />
          <News />

          {/* ▲ sections ▲ */}
        </main>

        <Footer />
      </>
    );
  }
}
