import React from "react";
import "./heroimages.css";
import img3 from "../../assets/images/img-3.svg";
import img4 from "../../assets/images/img-4.svg";

const HeroImages = () => {
  return (
    <section className="hero-images">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 col-lg-6 offset-lg-0">
            <div className="wrapper item-1">
              <div className="details">
                <h1 className="title text-white mb-3">
                  pamela reif's top picks
                </h1>
                <a href="#">
                  <button className="shop-now py-2 px-5 text-uppercase text-white border-0">
                    shop now
                  </button>
                </a>
              </div>
              <img src={img3} className="w-100" alt="" />
            </div>
          </div>
          <div className="col-10 offset-1 col-lg-6 offset-lg-0">
            <div className="wrapper item-2">
              <div className="details">
                <h1 className="title  mb-3">pamela reif's top picks</h1>
                <a href="#">
                  <button className="shop-now py-2 px-5 text-uppercase border-0">
                    shop now
                  </button>
                </a>
              </div>
              <img src={img4} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImages;
