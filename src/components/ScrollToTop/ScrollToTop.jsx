import React, { useEffect, useState } from "react";
import "./scrolltotop.css";

const ScrollToTop = () => {
  // Scroll To Top (Show And Hide)
  const [active, setActive] = useState(false);

  useEffect(() => {
    let scrollToTop = document.getElementById("scroll-to-top");
    window.onscroll = function () {
      if (window.scrollY > 800) {
        if (!active) {
          scrollToTop.classList.add("active");
          setActive(true);
        }
      } else {
        if (active) {
          scrollToTop.classList.remove("active");
          setActive(false);
        }
      }
    };
  }, [active]);

  // Scroll To Top (Functionality)
  const scrollingToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="scroll-to-top"
        className="d-flex justify-content-center align-items-center"
        onClick={scrollingToTop}
      >
        <i className="fa-solid fa-location-arrow"></i>
      </div>
    </>
  );
};

export default ScrollToTop;
