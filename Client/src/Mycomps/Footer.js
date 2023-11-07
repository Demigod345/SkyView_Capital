import React from "react";
import "../stylesheets/home.css";
import image from "./images/logo.svg";
function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            {/* <div><img src={image} alt="Your Image" style={{width:'70px' }} /></div> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <div>
                <a href="/home" style={{ "text-decoration": "none" , "color":"inherit"}}>
                  <h4 className="mb-4 font-weight-bold">
                    <img
                      src={image}
                      alt="logo"
                      style={{ width: "60px", display: "inline" }}
                    ></img>{" "}
                    KYVIEW CAPITAL
                  </h4>
                </a>
              </div>

              <p>
                Empower your financial decisions with our Stock Predictor App's
                data-driven insights and forecasts.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            {/*
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a className="text-white">MDWordPress</a>
              </p>
              <p>
                <a className="text-white">BrandFlow</a>
              </p>
              <p>
                <a className="text-white">Bootstrap Angular</a>
              </p>
            </div>
  */}
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful Links
              </h6>
              <p>
                <a className="text-white" href="https://youtu.be/dQw4w9WgXcQ?si=gWbheBsBKnRpibug">
                  Learn
                </a>
              </p>
              <p>
                <a className="text-white" href="/news">
                  News
                </a>
              </p>
              <p>
                <a className="text-white" href="/about">
                  About
                </a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Roorkee, 247667, India
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> omaren0248@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 91 9897678379
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 91 8447691065
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                <p style={{ textAlign: "center" }}>
                  © 2023 Copyright: x27.2 - All Rights Reserved
                </p>
                <p style={{ textAlign: "center" }}>
                  For queries contact us: Manager, AF-27, 1st floor, A-wing,
                  Jawahar Bhawan, IIT Roorkee, Roorkee, Uttarakhand -247667,
                  India
                </p>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a>Connect</a>
              <a>&nbsp;&nbsp;&nbsp;</a>
              <a href="https://twitter.com/OmAren05894987" role="button">
                <img
                  src="https://www.vectorlogo.zone/logos/twitter/twitter-tile.svg"
                  style={{ width: "10%", height: "10%" }}
                ></img>
              </a>
              <a>&nbsp;&nbsp;&nbsp;</a>
              <a
                href="https://www.facebook.com/om.aren.3517?mibextid=ZbWKwL"
                role="button"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg"
                  style={{ width: "10%", height: "10%" }}
                ></img>
              </a>
              <a>&nbsp;&nbsp;&nbsp;</a>
              <a
                href="https://www.linkedin.com/in/aaditya-aren-992221275/"
                role="button"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg"
                  style={{ width: "10%", height: "10%" }}
                ></img>
              </a>
              <a>&nbsp;&nbsp;&nbsp;</a>
              <a
                href="https://instagram.com/aaditya_aren.01?igshid=OGQ5ZDc2ODk2ZA=="
                role="button"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                  style={{ width: "10%", height: "10%" }}
                ></img>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
