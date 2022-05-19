import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg25form from "../../components/pg25form/Pg25form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg25() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg25form />
      <Footer />
    </div>
  );
}

export default Pg25;
