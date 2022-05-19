import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg56sectone from "../../components/pg56sectone/Pg56sectone";
import Pg56sectthree from "../../components/pg56sectthree/Pg56sectthree";
import Pg56secttwo from "../../components/pg56secttwo/Pg56secttwo";
import "./Pg56.css";
function Pg56() {
  return (
    <div>
      <Navbar />
      <Pg56sectone />
      <Pg56secttwo />
      <Pg56sectthree />
      <Footer />
    </div>
  );
}

export default Pg56;
