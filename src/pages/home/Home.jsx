import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HeroImages from "../../components/HeroImages/HeroImages";
import SideBySide from "../../components/SideBySide/SideBySide";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar bgColor="grey" />
      <Header />
      <FeaturedProducts />
      <HeroImages />
      <SideBySide />
      <Services />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
