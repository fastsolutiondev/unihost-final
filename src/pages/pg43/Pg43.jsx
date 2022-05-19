import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import ComponentX from "../../components/componentX/ComponentX";
import "./Pg43.css";
function Pg43() {
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
            <span className="fs-400 clr-black-light">
              Anúncios Detalhes dos Anúncios
            </span>
          </header>
        </div>
        <div className="row chatback">
          <div className="col-4 mt-4 mb-4">
            <div className="m-4">
              {" "}
              <ComponentX />
            </div>
          </div>

          <div className="col-8 mt-4 mb-4">
            <p
              style={{
                color: "#222F41",
                fontSize: "30px",
                fontWeight: "300",
                marginTop: "20px",
              }}
            >
              Reviews
            </p>
            <p
              style={{
                color: "#707070",
                fontSize: "22px",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              Os meus Anúncios
            </p>
            <div className="reviewss">
              <div id="reviews-box">
                <h5
                  className="p-4"
                  style={{
                    color: " #262E36",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Classificação geral
                </h5>
                <div className="m-4" style={{ color: " #FF9100" }}>
                  <i class="fa-solid fa-star"></i>4,7/5
                </div>
              </div>
              <div>
                <p id="review-txt" style={{ marginTop: "70px" }}>
                  Taxa de resposta: 80%
                </p>
              </div>
            </div>
            <div className="txt-row">
              <h5
                className="p-4"
                style={{
                  color: " #262E36",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Últimas reviews
              </h5>
              <p
                className="p-4"
                style={{
                  color: " #D4D4D4",
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              >
                Anúncios
              </p>
            </div>
            <img src={review1} alt="" />
            <img src={review2} alt="" />
            <img src={review3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pg43;
