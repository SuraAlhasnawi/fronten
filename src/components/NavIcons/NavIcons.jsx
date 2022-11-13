import React from "react";
import NavIcon from "../NavIcon/NavIcon";
import "./navicons.css";

const NavIcons = () => {
  return (
    <div className="icons">
      <ul>
        <NavIcon icon="fa fa-search" hideOnMobile={true} />
        <NavIcon icon="fa fa-retweet" hideOnMobile={true} />
        <NavIcon icon="fa-regular fa-heart" number="2" />
        <NavIcon icon="fa fa-bag-shopping" number="4" />
      </ul>
    </div>
  );
};

export default NavIcons;
