import React from "react";
import "./Pg65form.css";
function Pg65form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <p>Conta - Pagamentos e Recebimentos</p>
          </div>
        </div>
        <div className="row mt-4 mb-4" id="backofform">
          <div className="col"></div>
          <div className="col-lg-8">
            <h5 id="headstyle">Pagamentos e Recebimentos</h5>
            <p id="txtstyle">
              Adicione e faça gestão dos seus métodos de pagamento e
              recebimento.
            </p>
            <div id="btnstyle" className="d-flex">
              <button className="btn" id="btn1style">
                Pagamentos
              </button>
              <button className="btn" id="btn2style">
                Recebimentos
              </button>
            </div>
            {/* input file */}
            <div class="mb-3 mt-4">
              <div className="row">
                <p> Cartões</p>
                <div className="col">
                  {" "}
                  <label id="label-back" class="btn ">
                    <i id="plus-center" class="fa fa-plus"></i>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      name="image"
                    />
                  </label>
                </div>
                <div className="col text-center">
                  {" "}
                  <label id="label-back" class="btn ">
                    <i id="plus-center" class="fa fa-plus"></i>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      name="image"
                    />
                  </label>
                </div>
              </div>
              <div className="row mt-4">
                <p>
                  <a id="btm-link" href="">
                    Adicionar outro método de pagamento
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg65form;
