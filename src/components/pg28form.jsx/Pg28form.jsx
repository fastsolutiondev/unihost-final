import React from "react";
import "./Pg28form.css";
import { Link } from "react-router-dom";

function Pg28form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" id="prog-form-back">
            <div className="container mt-4">
              {/* Progress bar */}
              <div className="row">{/* progress bar */}</div>
              {/*  */}
              <h5>Falemos agora sobre condições e regras da casa</h5>
              {/* row1 */}
              <div className="row mt-4 mb-4">
                <div className="col-4 d-flex">
                  <i class="fa-solid fa-paw p-2"></i>
                  <h6 className="p-2">Animais permitidos</h6>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* row2 */}
              <div className="row mt-4 mb-4">
                <div className="col-4 d-flex">
                  <i class="fa-solid fa-smoking p-2"></i>
                  <h6 className="p-2">Fumar permitido</h6>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* row 3*/}
              <div className="row mt-4 mb-4">
                <div className="col-4 d-flex">
                  <i class="fa-solid fa-champagne-glasses p-2"></i>
                  <h6 className="p-2">Eventos Permitidos</h6>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ gap: "160px" }}
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
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* row 4*/}
              <div className="row mt-4 mb-4">
                <div className="col-4 d-flex">
                  <i class="fa-solid fa-file-signature p-2"></i>
                  <h6 className="p-2">Outra Regra</h6>
                </div>
                <div className="col-4">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    id="Outra Regra"
                    placeholder="adicionar"
                  />
                </div>
              </div>
              {/* row 5*/}
              <div className="row mt-4 mb-4">
                <div className="col-4 d-flex">
                  <i class="fa-solid fa-broom p-2"></i>
                  <h6 className="p-2">Limpeza</h6>
                </div>
                <div className="col-4">
                  {" "}
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              {/* button */}
              <div className="row mb-4 mt-4 p-4">
                <div className="col">
                  <Link to="/29">
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

export default Pg28form;
