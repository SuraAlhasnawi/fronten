import React from "react";
import "./navicon.css";

const NavIcon = ({ icon, number, hideOnMobile }) => {
  return (
    <li className={hideOnMobile ? "d-none d-md-block" : ""}>
      <a href="#">
        <i className={icon}></i>
        {number && <span className="number">{number}</span>}
      </a>
    </li>
  );
};

export default NavIcon;
