import React from "react";
import "./notfound.css";
import image from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <>
      <section className="not-found vh-100">
        <div className="container vh-100">
          <div className="row vh-100 align-items-center">
            <div className="col-md-6">
              <img src={image} className="w-100" alt="page not found" />
            </div>
            <div className="col-md-6">
              <h2 className="text">
                The page you are looking is&nbsp;
                <span className="text-danger">Not Found</span>.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
