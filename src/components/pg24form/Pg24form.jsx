import React from "react";
import "./Pg24form.css";
import { Link } from "react-router-dom";

function Pg24form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 " id="prog-form-back">
            {/* progress bar */}

            <div className="container">
              {/* first row */}
              <div className="row mt-4">
                <div className="col-4 d-flex m-2">
                  <i class="fa-solid fa-users m-2"></i>{" "}
                  <h5 className="p-1">Capacidade</h5>
                </div>
                <div className="col">
                  <div
                    id="btn-sm-back"
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" class="btn btn-sm ">
                      <i class="fa-solid fa-minus m-2"></i>
                    </button>
                    <button type="button" class="btn ">
                      5
                    </button>
                    <button type="button" class="btn ">
                      <i class="fa-solid fa-plus m-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              {/* second row */}
              <div className="row">
                <div className="col-4 d-flex m-2">
                  <i class="fa-solid fa-user m-2"></i>{" "}
                  <h5 className="p-1">Camas</h5>
                </div>
                <div className="col">
                  <div
                    id="btn-sm-back"
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" class="btn btn-sm ">
                      <i class="fa-solid fa-minus m-2"></i>
                    </button>
                    <button type="button" class="btn ">
                      5
                    </button>
                    <button type="button" class="btn ">
                      <i class="fa-solid fa-plus m-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              {/* third row */}
              <div className="row">
                <div className="col-4 d-flex m-2">
                  <i class="fa-solid fa-bed m-2"></i>{" "}
                  <h5 className="p-1">Quartos</h5>
                </div>
                <div className="col">
                  <div
                    id="btn-sm-back"
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" class="btn btn-sm ">
                      <i class="fa-solid fa-minus m-2"></i>
                    </button>
                    <button type="button" class="btn ">
                      5
                    </button>
                    <button type="button" class="btn ">
                      <i class="fa-solid fa-plus m-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              {/* four row */}
              <div className="row mb-4">
                <div className="col-4 d-flex m-2">
                  <i class="fa-solid fa-bath m-2"></i>{" "}
                  <h5 className="p-1">Casas de Banho</h5>
                </div>
                <div className="col">
                  <div
                    id="btn-sm-back"
                    class="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" class="btn btn-sm ">
                      <i class="fa-solid fa-minus m-2"></i>
                    </button>
                    <button type="button" class="btn ">
                      5
                    </button>
                    <button type="button" class="btn ">
                      <i class="fa-solid fa-plus m-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              {/* button */}
              <div className="row mb-4">
                <div className="col">
                  <Link to="/25">
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

export default Pg24form;
