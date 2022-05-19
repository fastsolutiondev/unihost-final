import React from "react";
import "./Pg8sec2.css";
import cardpic1 from "../../assets/images/cardpic1.png";
import cardpic2 from "../../assets/images/cardpic2.png";

function Pg8sec2() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" col-lg-6 col-sm-12">
            {" "}
            <div className="cards mb-3   shadow-lg">
              <div className="row ">
                <div className="col-6  ">
                  <img src={cardpic1} className="card-img" alt="..." />
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      5 formas de melhorar o consumo energético da sua casa
                    </h5>
                    <p className="card-text">
                      É certo que Portugal tem melhorado muito no que diz
                      respeito ao consumo energético das suas casas, devido à
                      implementação de várias políticas que visam a eficiência
                      nesse campo. No entanto, ainda muito há para fazer.
                    </p>
                    <div className="card_bottom">
                      <p className="card-muted">
                        <small className="text-muted">
                          22 de Janeiro de 2022
                        </small>
                      </p>
                      <p className="card-muted">
                        <small className="text-muted">By Unihosts</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 col-sm-12">
            <div className="cards mb-4   shadow-lg">
              <div className="row ">
                <div className="col-6  ">
                  <img src={cardpic2} className="card-img  " alt="..." />
                </div>
                <div className="col-6  ">
                  <div className="card-body">
                    <h5 className="card-title">
                      Saúde Mental - pensar em ti e no teu equilíbrio emocional
                      durante a universidade
                    </h5>
                    <p className="card-text">
                      A recente emergência higiénico-sanitária, provocada pelo
                      novo coronavirus, veio virar as nossas vidas de pernas
                      para o ar.
                    </p>
                    <div className="card_bottom">
                      <p className="card-muted">
                        <small className="text-muted">
                          05 de Janeiro de 2022
                        </small>
                      </p>
                      <p className="card-muted">
                        <small className="text-muted">By Unihosts</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pg8sec2;
