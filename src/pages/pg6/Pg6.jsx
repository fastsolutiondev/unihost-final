import React from "react";
import Navbar from "../../components/navbar/Navbar";
import bed9 from "../../assets/images/bed9.jpg";
import bedIcon from "../../assets/images/bed.png";
import Footer from "../../components/footer/Footer";
import BillPay from "../../components/billPay/BillPay";
import style from "./Pg6Style";
import "./Pg6.css";

export default function Pg6() {
  return (
    <>
      <Navbar></Navbar>
      <div className="body container">
        <div className="imageGallery">
          <img
            style={{ height: "494px", width: "803px" }}
            className="float-left"
            src={bed9}
            alt=""
          />
          <img
            src={bed9}
            style={{
              height: "241px",
              width: "225px",
              marginTop: "-494px",
              marginLeft: "815px",
            }}
            alt=""
          />
          <img
            src={bed9}
            style={{
              height: "241px",
              width: "344px",
              marginTop: "-240px",
              marginLeft: "1052px",
            }}
            alt=""
          />
          <img
            src={bed9}
            style={{
              height: "241px",
              width: "344px",
              marginTop: "12px",
              marginLeft: "815px",
            }}
            alt=""
          />
          <img
            src={bed9}
            style={{
              height: "241px",
              width: "225px",
              marginTop: "-241px",
              marginLeft: "1171px",
            }}
            alt=""
          />
        </div>
        <h3 className="newHeading">Quarto privado em Peniche</h3>
        <span className="ico1" style={style.iconStyle}>
          <center>
            <img src={bedIcon} alt="" />
          </center>
          <p> 2 pessoas</p>
        </span>
        <span className="ico1" style={style.iconStyle}>
          <center>
            <img src={bedIcon} alt="" />
          </center>
          <p>1 cama</p>
        </span>
        <span className="iconClass" style={style.iconStyle}>
          <center>
            <img src={bedIcon} alt="" />
          </center>
          <p>1 quarto</p>
        </span>
        <span className="ico1" style={style.iconStyle}>
          <center>
            <img src={bedIcon} alt="" />
          </center>
          <p>1 Casa de Banho</p>
        </span>

        <BillPay></BillPay>
        <div style={style.contentStyle}>
          <h4>Descricao</h4>
          <p>
            Quarto privado em T3 na zona de Peniche. T3 localizado numa zona
            calma de Peniche e apenas a 1,7 Km da ESTM. O apartamento é composto
            por 1 sala de estar agradável, 3 quartos com cama de casal, 1
            cozinha totalmente equipada, 2 casas de banho e 2 varandas com vista
            mar. A casa está totalmente equipada e mobilada consoante as
            fotografias.
          </p>
        </div>
        <div style={style.newContentStyle}>
          <h3>Condições da casa</h3>
          <div className="icons">
            <div style={style.iconStyle} className="ico1">
              <center>
                <img src={bedIcon} alt="" />
                <p>Animais nao</p>
              </center>
            </div>
            <div style={style.iconStyle} className="ico1">
              <center>
                <img src={bedIcon} alt="" />
                <p>Limpeza</p>
              </center>
            </div>
            <div style={style.iconStyle} className="ico1">
              <center>
                <img src={bedIcon} alt="" />
                <p>Proibido</p>
              </center>
            </div>
            <div style={style.iconStyle} className="ico1">
              <img src={bedIcon} alt="next" />
            </div>
          </div>
        </div>

        <div style={style.salaContainerStyle}>
          <center>

          <h3 style={{marginBottom:"39.07px"}}>Sala de estar</h3>
          </center>
          <div className="iconbar">
            <div className="ico1" style={style.iconStyles}>
              <center>
              <img src={bedIcon} alt="" />
              <p>lareira</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>sofa</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>TV</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>Mesa</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>cadiras</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>varanda</p>
              </center>
            </div>
            <div className="ico1" style={style.iconStyles}>
            <center>
              <img src={bedIcon} alt="" />
              <p>videojogos</p>
              </center>
            </div>
          </div>
        </div>
        <div className="imageTab">
          <h3>Mais quartos nesta casa</h3>
          <img src={bed9} alt="" />
          <img src={bed9} alt="" />
        </div>
        <div className="commentsTab">
          <h3>4.71</h3>
          <div>starts</div>
          <div>reviewCards</div>
        </div>
        <button>Ver todos os comentários</button>
        <div className="map">
          <h3>Este espaço localiza-se nesta zona</h3>
          <div>map</div>
        </div>
        <div className="clientCard">
          Sobre o seu senhorio
          <div className="clientCardComponent">client card</div>
        </div>
        <div className="similarServi">
          <h3>Casas semelhantes</h3>
          <div className="otherGaller">
            <img src={bed9} alt="" />
          </div>
          <button>
            <span>Encontrar mais</span>
            <span>home</span>
            <span>em Peniche</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
