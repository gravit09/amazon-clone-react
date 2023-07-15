import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center text-lg-start footer">
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
          <img
            className="header-logo"
            src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png"
            alt="amazon-logo"
          />
                <p>
                  This an amazon clone which is built to just practise React and
                  frontend skills its not meant for piracy purpose.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Get to know us</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Press Release
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Amazon Science
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@amazon.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 888
                </p>
                
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
