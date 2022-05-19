import React from "react";
import "./Pg22form.css";

function Pg22form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row mt-4 mb-4" id="backofform22">
          <div className="col"></div>
          <div className="col-lg-8">
            <h5 id="headstyle">Configurações</h5>

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
                      Alterar password
                    </label>{" "}
                    <br />
                    {/* password */}
                    <div className="col mt-1">
                      <label id="label-form" className="col-md-4 control-label">
                        Palavra passe atual
                      </label>
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        value="secret"
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    {/*  */}
                    <div className="col mt-1">
                      <label id="label-form" className="col-md-4 control-label">
                        Palavra passe nova
                      </label>
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        value="secret"
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    {/*  */}
                    <div className="col mt-1">
                      <label id="label-form" className="col-md-6 control-label">
                        Repita palavra passe nova
                      </label>
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        value="secret"
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    {/* btn */}
                    <div className="col-lg-6 mt-4 ">
                      <button className="btn" id="btn1style">
                        Alterar password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <label
                  id="headstyles"
                  for="formGroupExampleInput"
                  class="form-label"
                >
                  Notificações
                </label>
                <p>Receber notificações de unihosts</p>
                {/* check Box */}
                <div className="row">
                  <div className="col-4">
                    <h6>Por e-mail</h6>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline ">
                      <input
                        class="form-check-input checked bg-success"
                        type="checkbox"
                        value="option1"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        sim
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input bg-success "
                        type="checkbox"
                        value="option2"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        não
                      </label>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row">
                  <div className="col-4">
                    <h6>Por mensagem</h6>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline ">
                      <input
                        class="form-check-input checked bg-success"
                        type="checkbox"
                        value="option1"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        sim
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input bg-success "
                        type="checkbox"
                        value="option2"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        não
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 mb-4">
                  <h4 id="headstyles">Localização</h4>
                  <p>
                    Permitir que unihosts rastreie a minha localização ao usar
                  </p>
                  <div class="row">
                    <div class="col-lg-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Idioma"
                        aria-label="Idioma"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div class="col-lg-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Moeda"
                        aria-label="Moeda"
                      />
                    </div>
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

export default Pg22form;
