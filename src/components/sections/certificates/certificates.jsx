import React, { Component } from "react";

import "./certificates.scss";
import CertificatesSwiper from "./CertificateSwiper";

export default class Certificates extends Component {
  render() {
    return (
      <>
        <section className="certificates">
          <div className="certificates--wrapper container">
            <h2>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <div className="certificates--swapper">
              <CertificatesSwiper />
            </div>
          </div>
        </section>
      </>
    );
  }
}
