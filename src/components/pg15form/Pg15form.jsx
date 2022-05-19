import React from "react";
import "./Pg15form.css";
import user from "../../assets/images/user.png";
function Pg15form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col">
            <p className="mb-4">Conta - Informações pessoais</p>
          </div>
        </div>
        <div className="row mt-4 mb-4" id="backofformm">
          <div className="col"></div>
          <div className="col-lg-8 mb-4">
            <h5 id="headstyle">Informações pessoais</h5>
            {/* Avator */}
            <div>
              <img
                src={user}
                className="rounded-circle mb-4"
                style={{ width: "100px" }}
                alt="Avatar"
              />
              <h5 className=" m-3">
                <p id="user-name">Mudar foto</p>
              </h5>
            </div>
            {/* Form */}
            <div className="row">
              <div className="row">
                {/*  */}
                <div className="col">
                  <label for="First name" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                  />
                </div>
                {/*  */}
                <div className="col">
                  <label for="First name" className="form-label">
                    Apelido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Last name"
                  />
                </div>
              </div>
              {/* date of birth */}
              <div className="row mt-4 mb-4">
                {/*  */}
                <div className="col">
                  <label for="Date" className="form-label">
                    Data de nascimento
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    aria-label="form-date"
                  />
                </div>
                {/*  */}
                <div className="col">
                  <label for="Género" className="form-Género">
                    Género
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Género"
                  />
                </div>
              </div>
              {/*  */}
              <div className="row mt-4 mb-4">
                {/*  */}
                <div className="col">
                  <label for="Nacionalidade" className="form-label">
                    Nacionalidade
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                {/*  */}
                <div className="col">
                  <label for="Localidade" className="form-Localidade">
                    Localidade
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Localidade"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Sobre mim
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Escreve aqui..."
                  ></textarea>
                </div>
              </div>
              {/* languages */}
              <div id="lang" className="row ">
                <div className="col">
                  <button id="lang-btn" type="button" className="btn m-2">
                    <i className="fa-solid fa-plus p-2" aria-hidden="true"></i>
                    Adicionar línguas
                  </button>
                  <button id="language-btn" type="button" className="btn m-2">
                    <i className="fa-solid fa-xmark p-2" aria-hidden="true"></i>
                    Inglês
                  </button>
                  <button id="language-btn" type="button" className="btn m-2">
                    <i className="fa-solid fa-xmark p-2" aria-hidden="true"></i>
                    Inglês
                  </button>
                </div>
              </div>
              {/* telephone */}
              <div className="row">
                <label for="First name" className="form-label">
                  Contacto telefónico
                </label>
                {/*  */}
                <div className="col-lg-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="tel"
                    placeholder="+351"
                  />
                </div>
                {/*  */}
                <div className="col-lg-4">
                  <input
                    id="phone"
                    type="telephone"
                    className="form-control"
                    aria-label="telephone"
                  />
                </div>
              </div>
              {/* validate */}
              <div className="row  mt-2 mb-4">
                <label className="mb-2 mt-2">Validade</label>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="Dia"
                      className="form-control"
                      placeholder="Dia"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="Mês"
                      className="form-control"
                      placeholder="Mês"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="fAno"
                      className="form-control"
                      placeholder="Ano"
                    />
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

export default Pg15form;
