import React from "react";
import "./Pg56sectthree.css";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
function Pg56sectthree() {
  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          {" "}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col ">
              <div className="card h-100 shadow-lg bg-body rounded">
                <img src={card1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div id="card-footer">
                  <div className="p-4">
                    <p>30 de Janeiro de 2022</p>
                  </div>
                  <div className="p-4">
                    <p>By Unihosts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-lg bg-body rounded">
                <img src={card2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div id="card-footer">
                  <div className="p-4">
                    <p>30 de Janeiro de 2022</p>
                  </div>
                  <div className="p-4">
                    <p>By Unihosts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-lg bg-body bg-light rounded">
                <img src={card3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div id="card-footer">
                  <div className="p-4">
                    <p>30 de Janeiro de 2022</p>
                  </div>
                  <div className="p-4">
                    <p>By Unihosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pg56sectthree;
