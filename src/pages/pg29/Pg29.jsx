import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg29form from "../../components/Pg29form.jsx/Pg29form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg29() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg29form />
      <Footer />
    </div>
  );
}

export default Pg29;
