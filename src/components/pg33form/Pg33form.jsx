import React from "react";
import { Link } from "react-router-dom";

function Pg33form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2" id=""></div>
          <div className="col-lg-8" id="prog-form-back">
            <div className="container">
              <div className="row mt-4">{/* Progress Bar */}</div>
              {/* checklist */}
              <div className="row mt-4 mb-4">
                <h6>
                  Está quase pronto! Leia e aceite os seguintes documentos.
                </h6>
                {/*  */}
                <div class="form-check m-2 ">
                  <input
                    class="form-check-input bg-success"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Termos e condições
                  </label>
                </div>
                <div class="form-check m-2">
                  <input
                    class="form-check-input bg-success"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Política de privacidade
                  </label>
                </div>
                <div class="form-check m-2">
                  <input
                    class="form-check-input bg-success"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Acordo em manter o meu calendário atualizado
                  </label>
                </div>
                <div class="form-check m-2">
                  <input
                    class="form-check-input bg-success"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    As informações que providencio são verdadeiras
                  </label>
                </div>
              </div>
              {/* button */}
              <div className="row mb-4">
                <div className="col">
                  <Link to="/">
                    <div id="btn-back-style" className="btn">
                      Seguinte →
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2" id=""></div>
        </div>
      </div>
    </div>
  );
}

export default Pg33form;
