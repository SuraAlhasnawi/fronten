import React from "react";
import "./featuredproduct.css";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ item }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="item">
        <div className="image">
          <img src={item.img_url} alt="" />
          <div className="icons">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
          <Link
            to={"/post/" + item.id}
            className="quick-view py-2 text-white text-center text-uppercase"
          >
            quick view
          </Link>
        </div>
        <div className="details text-center">
          <p className="category">{item.category}</p>
          <p className="title">{item.title}</p>
          <p className="rate">
            {[...Array(item.rating)].map((rate, index) => (
              <i className="fa-solid fa-star" key={index}></i>
            ))}
          </p>
          <p className="price">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
