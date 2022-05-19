import React from "react";
import "./Pg7cardsect.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

function Pg7cardsect() {
  return (
    <div>
      <div id="background" className="container text-center">
        <div className="row mt-4">
          <a className="m-4" id="linkt" href="">
            Não tem tempo ou não está perto da sua propriedade? A UniHosts tem a
            solução!
          </a>
        </div>
        <div className="row mt-4 mb-4">
          <h1 id="heading1">Conheça Os Nossos Unipackages</h1>
          <div class="card-deck">
            <div className="row mt-4 mb-4">
              <div className="col">
                <div class="card shadow-lg rounded">
                  <img
                    class="cardn-img-top"
                    src={image1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="cardn-title">Nós somos o senhorio por si!</h5>
                    <p class="cardn-text">
                      De forma a libertar as preocupações durante o ano letivo,
                      asseguramos o acompanhamento personalizado aos estudantes,
                      de modo a garantir a manutenção da casa e respetiva
                      harmonia entre os inquilinos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card  shadow-lg">
                  <img
                    class="cardn-img-top"
                    src={image2}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="cardn-title">Pagamentos seguros</h5>
                    <p class="cardn-text">
                      Os pagamentos das rendas dos inquilinos são feitos de
                      forma segura e transparente. Temos também uma proteção
                      contra saídas antecipadas do hóspede para que não haja
                      imprevistos!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card  shadow-lg">
                  <img
                    class="cardn-img-top"
                    src={image3}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="cardn-title">Acesso total à UniDesk</h5>
                    <p class="cardn-text">
                      Através da nossa plataforma poderá verificar os hospedes
                      atuais, respetivas informações contratuais, todas as
                      transações, eventuais reparações existentes e adicionar
                      despesas se aplicável
                    </p>
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

export default Pg7cardsect;
