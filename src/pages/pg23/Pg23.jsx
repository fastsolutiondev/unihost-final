import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg23form from "../../components/pg23form/Pg23form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg23() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 mb-4">
        <ProgressBar />
      </div>

      <Pg23form />
      <Footer />
    </div>
  );
}

export default Pg23;
