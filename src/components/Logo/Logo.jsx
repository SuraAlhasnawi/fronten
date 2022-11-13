import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="title">
        fixxo.
      </Link>
    </div>
  );
};

export default Logo;
