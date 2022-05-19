import React from "react";
import "./Pg61form.css";
function Pg61form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row mt-4 mb-4" id="backofformn">
          <div className="col"></div>
          <div className="col-lg-8">
            <h5 id="headstyle">Pagamentos e Recebimentos</h5>
            <p id="txtstyle">
              Adicione e faça gestão dos seus métodos de pagamento e
              recebimento.
            </p>
            <div id="btnstyle" className="d-flex">
              <button className="btn" id="btn2style">
                Pagamentos
              </button>
              <button className="btn" id="btn1style">
                Recebimentos
              </button>
            </div>
            {/* input file */}
            <div class="mb-3 mt-4">
              <div className="row">
                <div>
                  <div class="col-lg-6 mb-1">
                    <label
                      id="headstyles"
                      for="formGroupExampleInput"
                      class="form-label"
                    >
                      País/Região de faturação
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <p id="headstyles">Métodos de recebimento</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    id="label-select"
                    class="form-check-label"
                    for="flexRadioDefault1"
                  >
                    PayPal em EUR
                  </label>{" "}
                  <br />
                  <label id="muted-select">Pode incluir taxas.</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    id="label-select"
                    class="form-check-label"
                    for="flexRadioDefault2"
                  >
                    Transferência Bancária em EUR
                  </label>{" "}
                  <br />
                  <label id="muted-select">Sem taxas</label>
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-4 ">
                    <button className="btn" id="btn1style">
                      Seguinte
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg61form;
