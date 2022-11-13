import React from "react";
import "./contactmap.css";
import map from "../../assets/images/map2.svg";
import { NavLink } from "react-router-dom";

const ContactMap = () => {
  return (
    <>
      <div className="title my-3">
        <div className="container">
          <ul className="d-flex gap-2">
            <li>
              <NavLink to="/index" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" end>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="map mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.295562158118!2d18.0234876!3d59.344713999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9cd30f14a7%3A0x2c5985f32c0fd4ff!2sTomtebodav%C3%A4gen%203B%2C%20171%2065%20Solna!5e0!3m2!1ssv!2sse!4v1668343405608!5m2!1ssv!2sse"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactMap;
