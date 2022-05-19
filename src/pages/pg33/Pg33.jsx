import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg33form from "../../components/pg33form/Pg33form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg33() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg33form />
      <Footer />
    </div>
  );
}

export default Pg33;
