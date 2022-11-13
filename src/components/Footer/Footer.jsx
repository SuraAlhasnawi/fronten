import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="text-center py-5">
      <div className="social-icons mb-2">
        <ul className="d-flex justify-content-center align-items-center gap-3">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="text-capitalize m-0">
          &copy; 2022 Fixxo. all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
