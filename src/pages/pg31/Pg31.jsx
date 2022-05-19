import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg31form from "../../components/pg31form/Pg31form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg31() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg31form />
      <Footer />
    </div>
  );
}

export default Pg31;
