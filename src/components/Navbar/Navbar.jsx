import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavIcons from "../NavIcons/NavIcons";
import NavMenu from "../NavMenu/NavMenu";
import "./navbar.css";

const Navbar = ({ bgColor }) => {
  let openMenu = () => {
    let navMenu = document.querySelector("nav .nav-menu");

    navMenu.classList.add("active");
  };

  return (
    <nav
      style={{
        backgroundColor:
          bgColor == "grey"
            ? "var(--linear-gradient-light)"
            : "var(--color-white)",
      }}
    >
      <div className="container">
        <Logo />
        <NavMenu />
        <NavIcons />
        <div
          className="hamburger-icon open-icon text-center"
          id="hamburger-icon-open"
          onClick={openMenu}
        >
          <i className="fa fa-bars "></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
