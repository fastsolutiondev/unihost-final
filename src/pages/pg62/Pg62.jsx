import React from "react";
import "./Pg62.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import chatpic from "../../assets/images/chatpic.png";
import msg from "../../assets/images/msg.png";
function Pg62() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4 mb-4">
          <header
            className="pg45-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <img src={msg} alt="" />
            <span className="fs-400 clr-black-light">Caixa de entrada</span>
          </header>
        </div>
        <div className="row p-4  mb-4">
          <div>
            <hr className="hr--logo" />
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <img src={chatpic} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pg62;
