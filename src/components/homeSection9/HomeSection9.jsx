import React from "react";
import Brand1 from "../../assets/images/brand1.jpg";
import Brand2 from "../../assets/images/brand2.jpg";
import Brand3 from "../../assets/images/brand3.jpg";
import Brand4 from "../../assets/images/brand4.jpg";
import Brand5 from "../../assets/images/brand5.jpg";
import Brand6 from "../../assets/images/brand6.jpg";
import "./HomeSection9.css";

export default function HomeSection9() {
    return (
        <section>
            <div className="container-fluid">
                <div className="ycontainer-sm section9">
                    <h2 className="fs-600 clr-acc">Os nossos parceiros</h2>
                    <div className="brands">
                        <img src={Brand1} alt="" />
                        <img src={Brand2} alt="" />
                        <img src={Brand3} alt="" />
                        <img src={Brand4} alt="" />
                        <div className="emptydiv2"></div>
                        <img src={Brand5} alt="" />
                        <div className="emptydiv1"></div>
                        <div className="emptydiv1"></div>
                        <img src={Brand6} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
