import React from "react";
import ProgressBar from "../progressBar/ProgressBar";
import "./Pg25form.css";
import { Link } from "react-router-dom";

function Pg25form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 " id="prog-form-back">
            <div className="container">
              <div className="row mt-4 mb-4">
                {/* Progress bar */}

                <div className="row">{/* progress bar */}</div>
                {/*  */}
                <div className="row">
                  <h6>Título do Anúncio</h6>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      placeholder="Máximo de 50 palavras"
                    ></textarea>
                  </div>
                  <h6>Descreva o seu espaço de forma simples e concisa.</h6>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Descreva o seu espaço em 500 palavras"
                    ></textarea>
                  </div>
                </div>
                {/* row1 */}
                <div className="row mt-4 mb-4">
                  <div className="col-4">
                    <h6>Vive na propriedade?</h6>
                  </div>
                  <div className="col-4">
                    <div
                      style={{ gap: "150px" }}
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
                  <div className="col-4">
                    <div
                      style={{ gap: "150px" }}
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
                {/* row2 */}
                <div className="row mt-4 mb-4">
                  <div className="col-4">
                    <h6>VTipo de senhorio</h6>
                  </div>
                  <div className="col-4">
                    <div
                      style={{ gap: "110px" }}
                      id="check-input"
                      className="d-flex"
                    >
                      <p>Particular</p>
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
                      style={{ gap: "100px" }}
                      id="check-input"
                      className="d-flex"
                    >
                      <p>Profissional</p>
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
                {/* button */}
                <div className="row mb-4 mt-4 p-4">
                  <div className="col">
                    <Link to="/26">
                      <div id="btn-back-style" className="btn">
                        Seguinte →
                      </div>
                    </Link>
                  </div>
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

export default Pg25form;
