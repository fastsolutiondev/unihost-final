import React from "react";
import "./Pg23form.css";
import { Link } from "react-router-dom";

function Pg23form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div id="prog-form-back" className="col">
            <div className="container">
              <div className="row text-center mt-4 mb-4">
                {" "}
                <h2>Anunciar a sua propriedade é rápido e fácil!</h2>
              </div>

              {/* first row */}
              <div className="row mt-4 mb-4">
                <div class="col-md-6">
                  <label for="input1" class="form-label">
                    Qual o seu tipo de espaço?
                  </label>
                  <input type="text" class="form-control" id="input1" />
                </div>

                <div class="col-md-6">
                  <label for="input2" class="form-label">
                    Localidade
                  </label>
                  <div class="input-group ">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="location"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <div className="row">
                <div class="col mb-3">
                  <label for="Input3" class="form-label">
                    Rua
                  </label>
                  <input type="text" class="form-control" id="Input3" />
                </div>
                <div class="col mb-3">
                  <label for="Input4" class="form-label">
                    Número
                  </label>
                  <input type="text" class="form-control" id="Input4" />
                </div>
              </div>
              {/* 3rd row */}
              <div className="row">
                <div class="col mb-3">
                  <label for="Input5" class="form-label">
                    Andar
                  </label>
                  <input type="text" class="form-control" id="Input5" />
                </div>
                <div class="col mb-3">
                  <label for="Input6" class="form-label">
                    Código Postal
                  </label>
                  <input type="text" class="form-control" id="Input6" />
                </div>
              </div>
              {/* button */}
              <div className="row mb-4">
                <div className="col">
                  <Link to="/24">
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

export default Pg23form;
