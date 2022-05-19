import React from "react";
import "./Pg31form.css";
import { Link } from "react-router-dom";

function Pg31form() {
  return (
    <div>
      {" "}
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" id="prog-form-back">
            <div className="container">
              {/* Progress bar */}
              <div className="row">{/* progress bar */}</div>
              {/*  */}
              <div className="row mt-4 p-4">
                <h5>Vamos a valores!</h5>
                {/* row1 */}
                <div className="row mt-4 mb-4">
                  <div className="col-4">
                    <h6 className="mt-2">Valor Mensal</h6>
                  </div>
                  <div className="col-5">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                      <span class="input-group-text ">€</span>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="mt-2">/mês</h6>
                  </div>
                </div>
                {/* row2 */}
                <div className="row mt-4 mb-4">
                  <div className="col-4">
                    <h6 className="mt-2">Preço por pessoa extra</h6>
                  </div>
                  <div className="col-5">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                      <span class="input-group-text ">€</span>
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="mt-2">/mês</h6>
                  </div>
                </div>
                {/* row3 */}
                <div className="row mt-4 mb-4">
                  <div className="col-4">
                    <h6 className="mt-2">Preço por pessoa extra</h6>
                  </div>
                  <div className="col-5">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                      <span class="input-group-text ">€</span>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
              {/* Check Box */}
              <div className="row m-4">
                <div class="form-check mt-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    <h6>Despesas incluídas</h6>
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <h6>Despesas parcialmente incluídas</h6>
                  </label>
                  {/* row check */}
                  {/* row1 */}
                  <div className="row mt-4 mb-4">
                    <div className="col-3">
                      <h6>Gás</h6>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Sim</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Não</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* row 2 */}
                  <div className="row mt-4 mb-4">
                    <div className="col-3">
                      <h6>Internet</h6>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Sim</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Não</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* row 3 */}
                  <div className="row mt-4 mb-4">
                    <div className="col-3">
                      <h6>Agua</h6>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Sim</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Não</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* row 4 */}
                  <div className="row mt-4 mb-4">
                    <div className="col-3">
                      <h6>Luz</h6>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Sim</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        style={{ gap: "80px" }}
                        id="check-input"
                        className="d-flex"
                      >
                        <p>Não</p>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-check mt-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    <h6>Despesas excluídas</h6>
                  </label>
                </div>
              </div>
              {/* button */}
              <div className="row mb-4 mt-4 p-4">
                <div className="col">
                  <Link to="/32">
                    <div id="btn-back-style" className="btn">
                      Seguinte →
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg31form;
