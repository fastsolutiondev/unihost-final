import React from "react";
import "./Pg30form.css";
import { Link } from "react-router-dom";

function Pg30form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" id="prog-form-back">
            {/* Progress bar */}
            <div className="row">{/* progress bar */}</div>
            {/* Accordion */}
            <div className="row">
              <div className="container">
                <div className="row">
                  <h5 className="m-4">sobre a sua casa</h5>
                  <div
                    className="accordion accordion-flush p-4"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Sala de estar
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div id="body-border" className="accordion-body">
                          {/* row1 */}
                          <div className="row mt-4 mb-4">
                            <div className="col-4">
                              <h6>sofá</h6>
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
                              <h6>sofá</h6>
                            </div>
                            <div className="col-4">
                              <div
                                style={{ gap: "150px" }}
                                id="check-input"
                                className="d-flex"
                              >
                                <p>televisão</p>
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
                          {/* row3 */}
                          <div className="row mt-4 mb-4">
                            <div className="col-4">
                              <h6>Lareira</h6>
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
                          {/* row4 */}
                          <div className="row mt-4 mb-4">
                            <div className="col-4">
                              <h6>Mesa</h6>
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
                          {/* row5 */}
                          <div className="row mt-4 mb-4">
                            <div className="col-4">
                              <h6>Cadeiras</h6>
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
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Quarto
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Casa de banho
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Zona exterior
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* button */}
            <div className="row mb-4 mt-4 p-4">
              <div className="col">
                <Link to="/31">
                  <div id="btn-back-style" className="btn">
                    Seguinte →
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg30form;
