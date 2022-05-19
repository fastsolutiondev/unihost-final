import React from "react";
import "./Pg7sectone.css";
import img from "../../assets/images/back.png";
function Pg7sectone() {
  return (
    <div>
      <div className="div1 text-center">
        <div
          className="img-fluid"
          id="back_img"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="overlay">
            <div id="center" className="jumbotron text-center ">
              <h1 id="heading" className="h1">
                Como Funciona
              </h1>
              <p id="parah" className="lead">
                Tem uma propriedade para arrendar? Explicamos como pode
                rentabilizá-la
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pg7sectone;
