import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Notification from "../../components/notification/Notification";
import Pg8cards from "../../components/pg8cards/Pg8cards";
import Pg8sec2 from "../../components/pg8sec2/Pg8sec2";
import "./Pg8.css";
function Pg8() {
  return (
    <div>
      <Navbar />
      <Pg8cards />
      <Pg8sec2 />
      <Notification />
      <Footer />
    </div>
  );
}

export default Pg8;
