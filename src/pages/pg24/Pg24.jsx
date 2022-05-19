import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg24form from "../../components/pg24form/Pg24form";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Socials from "../../components/socials/Socials";

function Pg24() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg24form />
      <Footer />
    </div>
  );
}

export default Pg24;
