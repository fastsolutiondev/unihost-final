import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg28form from "../../components/pg28form.jsx/Pg28form";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function Pg28() {
  return (
    <div>
      <Navbar />
      <ProgressBar />
      <Pg28form />
      <Footer />
    </div>
  );
}
