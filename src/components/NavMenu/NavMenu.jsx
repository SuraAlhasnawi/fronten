import React, { useState } from "react";
import "./navmenu.css";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  const [active, setActive] = useState(false);
  let closingMenu = () => {
    let navMenu = document.querySelector("nav .nav-menu");

    navMenu.classList.remove("active");
  };
  return (
    <div className="nav-menu">
      <div
        className="hamburger-icon close-icon text-center"
        id="hamburger-icon-close"
        onClick={closingMenu}
      >
        <i className="fa fa-close"></i>
      </div>
      <ul>
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li>
          <a href="#">categories</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li>
          <NavLink to="/contact-us" end>
            contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
