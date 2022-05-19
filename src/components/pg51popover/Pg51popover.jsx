import React from "react";
import "./Pg51popover.css";
import popupimg from "../../assets/images/popupimg.png";
function Pg51popover() {
  return (
    <div>
      <div className="hoverwrap text-center">
        <img id="container-img" src={popupimg} />
        <div className="hovercap">
          <p id="popup-heading"> Queremos ser uns fiéis mensageiros!</p>
          <form>
            <div className="form-group ">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div>
              <button className="btn  mt-2 " id="btn-popover">
                <i className="fa fa-bell"></i> Notifique-me
              </button>
            </div>
            <div id="popover-text" className="mt-2">
              <p>
                Ao carregar em Notifique-me aceita a nossa{" "}
                <a href="" id="link-popover">
                  política de tratamento de dados.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pg51popover;
