import React from "react";
import "./singlepost.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Singlepost = () => {
  const { postId } = useParams();
  console.log(postId);
  return (
    <>
      <Navbar />
      <section className="single-post">
        <div className="container">
          <div className="col-md-6">
            <h2 className="my-4">Modern Black Blouse</h2>
          </div>
          <div className="col-md-6"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Singlepost;
