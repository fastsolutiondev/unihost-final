import React from "react";
import "./Pg26form.css";
import pic1 from "../../assets/images/pic1.png";
import { Link } from "react-router-dom";

function Pg26form() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" id="prog-form-back">
            <div className="container">
              <div className="row mt-4 mb-4">
                {/* Progress bar */}

                <div className="row">{/* progress bar */}</div>
                {/*  */}
                <div className="row">
                  <h5>
                    Carregue fotos para o seu anúncio ser mais apelativo e o
                    estudante saber exatamente o que esperar. (mín. 5 fotos)
                  </h5>
                  <div className="col-12 ">
                    {" "}
                    <label id="label-backed" class="btn ">
                      <i id="content-center" class="fa-solid fa-cloud"></i>

                      <p>
                        Adicionar Fotos{" "}
                        <a
                          href=""
                          style={{
                            textDecoration: "underline",
                            color: "blue",
                            fontSize: "14px",
                          }}
                        >
                          Download
                        </a>
                      </p>

                      <input
                        type="file"
                        style={{
                          display: "none",
                        }}
                        name="image"
                      />
                    </label>
                  </div>
                </div>
                <div className="row mt-4 ">
                  <div className="col-4">
                    <h6>Foto de Capa</h6>
                    <img src={pic1} alt="" />
                  </div>
                  <div className="col ">
                    <h6>Foto de Capa</h6>
                    <div id="pic-flex" className="d-flex">
                      <img src={pic1} alt="" />
                      <img src={pic1} alt="" />
                      <img src={pic1} alt="" />
                      <img src={pic1} alt="" />
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="row mb-4 mt-4 p-4">
                  <div className="col">
                    <Link to="/28">
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

export default Pg26form;
