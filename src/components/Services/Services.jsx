import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="wrapper">
              <i className="fa-solid fa-phone"></i>
              <h4 className="title text-capitalize">custom support</h4>
              <p className="text">village did removed enjoyed</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="wrapper">
              <i className="fa fa-shield"></i>
              <h4 className="title text-capitalize">secured payment</h4>
              <p className="text">village did removed enjoyed explain talking</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="wrapper">
              <i className="fa fa-truck"></i>
              <h4 className="title text-capitalize">free home delivery</h4>
              <p className="text">village did removed enjoyed</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="wrapper">
              <i className="fa fa-truck"></i>
              <h4 className="title text-capitalize">30 dat reuters</h4>
              <p className="text">village did removed enjoyed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
