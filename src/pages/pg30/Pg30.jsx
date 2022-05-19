import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Footer from "../../components/footer/Footer";
import Pg30form from "../../components/pg30form/Pg30form";

function Pg30() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg30form />
      <Footer />
    </div>
  );
}

export default Pg30;
