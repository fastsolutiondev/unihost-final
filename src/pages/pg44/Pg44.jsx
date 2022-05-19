import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import chatcard from "../../assets/images/chatcard.png";
import "./Pg44.css";
import ComponentY from "../../components/componentY/ComponentY";
function Pg44() {
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
            <img src={Computer} alt="" />
            <span className="fs-400 clr-black-light">Hóspedes</span>
          </header>
          <div className="row chatback">
            <div className="col-4 mt-4 mb-4">
              <div className="m-4">
                {" "}
                <ComponentY />
              </div>
            </div>
            <div className="col-8 mt-4 mb-4">
              <p
                style={{
                  color: "#222F41",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Hóspedes
              </p>
              <p
                style={{
                  color: "#222F41",
                  fontSize: "20px",
                  fontWeight: "800",
                  marginTop: "20px",
                }}
              >
                Hóspedes Atuais
              </p>
              <img src={chatcard} alt="" />
              <img src={chatcard} alt="" />
              <img src={chatcard} alt="" />
              <p
                style={{
                  color: "#222F41",
                  fontSize: "18px",
                  marginTop: "20px",
                }}
              >
                Hóspedes Anteriores
              </p>
              <img src={chatcard} alt="" />
              <img src={chatcard} alt="" />
              <img src={chatcard} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pg44;
