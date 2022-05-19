import React from "react";
import icon from "../../assets/images/icon.png";
import "./Pg7cartcards.css";
import { Link } from "react-router-dom";

function Pg7cartcards() {
  return (
    <div>
      <div id="container" className="container-fluid">
        <div className="row text-center">
          <div className="col">
            <div className="card shadow-lg" style={{ width: "20rem" }}>
              <div className="card-body">
                <h4 className="cardt-title">Gestão da casa</h4>
                <br />
                <ul id="imgstyle" style={{ textAlign: "left" }}>
                  <li>Comunicação e representação do proprietário</li>
                  <li>Gestão de rendas e avisos de pagamento</li>
                  <li>Coordenação de manutenção e reparações</li>
                  <li>Gestão de despesas</li>
                  <li>Check-in/check-out dos estudantes.</li>
                </ul>
                <hr />
                <h5 className="cardt-title tex-center">Preço Sob Consulta</h5>
                <Link to="/53">
                  <button
                    id="button-card"
                    type="button"
                    className="btn btn-block mb-4"
                  >
                    Saber mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg" style={{ width: "20rem" }}>
              <div className="card-body">
                <h4 className="cardt-title">Gestão da casa</h4>
                <br />
                <h5>Gestão da casa</h5>
                <br />
                <a href="">
                  {" "}
                  <img src={icon} alt="" />
                </a>

                <br />
                <ul id="imgstyle" style={{ textAlign: "left" }}>
                  <li>Sessão fotográfica e criação de anúncios</li>
                  <li>
                    Limpezas às áreas comuns e vistoria
                    semestral/trimestral/mensal.
                  </li>
                </ul>
                <hr className="mt-4" />
                <h5 className="cardt-title tex-center">Preço Sob Consulta</h5>
                <Link to="/53">
                  <button
                    id="button-card"
                    type="button"
                    className="btn btn-block mb-4"
                  >
                    Saber mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pg7cartcards;
