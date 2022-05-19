import React from "react";
import "./Pg32form.css";
import green from "../../assets/images/green.png";
import yellow from "../../assets/images/yellow.png";
import orange from "../../assets/images/orange.png";
import red from "../../assets/images/red.png";
import { Link } from "react-router-dom";

import ProgressBar from "../progressBar/ProgressBar";
function Pg32form() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8" id="prog-form-back">
            <div className="container">
              <div className="row">{/* progress bar */}</div>
              {/* selection */}
              <div className="row mt-4 mb-4">
                <h5>
                  Azares acontecem e temos de estar preparados. Estabeleça a sua
                  política de cancelamento.
                </h5>
              </div>
              {/*  */}
              <div class="form-check">
                <div style={{ gap: "30px" }} class="d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <img style={{ height: "20px" }} src={green} alt="" />
                  <h6 id="head-radio">Host Super Flex</h6>
                </div>
                <label class="form-check-label" for="flexRadioDefault1">
                  <p id="text-radio">
                    Até 30 dias antes do check-in: 100% do valor da renda é
                    reembolsado. Depois desse período e até 2 dias antes , o
                    valor reembolsado é de 50%. Após esse período o pagamento é
                    integral.
                  </p>
                </label>
              </div>
              {/*  */}
              <div class="form-check">
                <div style={{ gap: "30px" }} class="d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <img style={{ height: "20px" }} src={yellow} alt="" />
                  <h6 id="head-radio">Host Flex</h6>
                </div>
                <label class="form-check-label" for="flexRadioDefault2">
                  <p id="text-radio">
                    Até 30 dias antes do check-in: 100% do valor da renda é
                    reembolsado. Depois desse período e até 7 dias antes , o
                    valor reembolsado é de 50%. Após esse período o pagamento é
                    integral.
                  </p>
                </label>
              </div>
              <div class="form-check">
                <div style={{ gap: "30px" }} class="d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked
                  />
                  <img style={{ height: "20px" }} src={orange} alt="" />
                  <h6 id="head-radio">Host Moderado</h6>
                </div>
                <label class="form-check-label" for="flexRadioDefault3">
                  <p id="text-radio">
                    Até 60 dias antes do check-in: 100% do valor da renda é
                    reembolsado. Depois desse período e até 15 dias antes , o
                    valor reembolsado é de 50%. Após esse período o pagamento é
                    integral.
                  </p>
                </label>
              </div>
              <div class="form-check">
                <div style={{ gap: "30px" }} class="d-flex">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    checked
                  />
                  <img style={{ height: "20px" }} src={red} alt="" />
                  <h6 id="head-radio">Host Rígido</h6>
                </div>
                <label class="form-check-label" for="flexRadioDefault4">
                  <p id="text-radio">
                    Até 90 dias antes do check-in: 100% do valor da renda é
                    reembolsado. Depois desse período e até 30 dias antes , o
                    valor reembolsado é de 50%. Após esse período o pagamento é
                    integral.
                  </p>
                </label>
              </div>

              {/* button */}
              <div className="row mb-4 mt-4">
                <div className="col">
                  <Link to="/33">
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

export default Pg32form;
