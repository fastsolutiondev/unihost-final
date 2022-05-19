import React from "react";
import "./Pg49form.css";
function Pg49form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-6" id="form-back">
            <div className="modal-header ">
              <div>
                <a href="#" className="modal-title" id="form-links">
                  Iniciar sessão
                </a>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <a id="form-link" href="#" className="modal-title">
                  Registar
                </a>
              </div>
            </div>
            <div className="modal-body">
              <div className="row mt-4">
                <button id="form-btns" className="btn " type="button">
                  Registar com e-mail
                </button>
              </div>
              <div className="row text-center mt-3">
                <div className="col-5">
                  <hr />
                </div>
                <div className="col-2">
                  <h1>ou</h1>
                </div>
                <div className="col-5">
                  <hr />
                </div>
              </div>
              <div className="row mb-4">
                <button id="form-btns" className="btn " type="button">
                  Registar com e-mail
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg49form;
