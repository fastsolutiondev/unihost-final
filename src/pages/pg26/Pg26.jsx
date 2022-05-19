import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg26form from "../../components/pg26form/Pg26form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg26() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg26form />
      <Footer />
    </div>
  );
}

export default Pg26;
