import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import HomeSection1 from "../../components/homeSection1/HomeSection1";
import HomeSection2 from "../../components/homeSection2/HomeSection2";
import HomeSection3 from "../../components/homeSection3/HomeSection3";
import HomeSection4 from "../../components/homeSection4/HomeSection4";
import HomeSection5 from "../../components/homeSection5/HomeSection5";
import HomeSection6 from "../../components/homeSection6/HomeSection6";
import HomeSection7 from "../../components/homeSection7/HomeSection7";
import HomeSection8 from "../../components/homeSection8/HomeSection8";
import HomeSection9 from "../../components/homeSection9/HomeSection9";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Pg3 = () => {
  return (
    <div>
      <Navbar />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <Footer />
    </div>
  );
};

export default Pg3;
