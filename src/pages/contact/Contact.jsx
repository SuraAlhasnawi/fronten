import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactMap from "../../components/ContactMap/ContactMap";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us py-4">
        <ContactMap />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
