import React from "react";
import "./header.css";
import img2 from "../../assets/images/showcase-img-2.png";
import img1 from "../../assets/images/showcase-img-1.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 grid-container">
            <div className="wrapper">
              <img src={img1} className="w-100" alt="" />
            </div>
          </div>
          <div className="col-md-4 grid-container">
            <div className="wrapper h-100">
              <div className="items">
                <h1 className="title">
                  <span className="text-uppercase">sale up</span>
                  <span className="text-capitalize">to 50% off</span>
                </h1>
                <p className="text">
                  online shopping free home delivery over $100
                </p>
                <a href="#">
                  <button className="shop-now px-5 py-3 border-0 text-white text-uppercase">
                    shop now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-container">
            <div className="wrapper">
              <img src={img2} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
