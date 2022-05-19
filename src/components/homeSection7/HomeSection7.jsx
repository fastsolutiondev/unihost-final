import React from "react";
import { Link } from "react-router-dom";

import "./HomeSection7.css";

export default function HomeSection7() {
    return (
        <section>
            <div className="container-fluid">
                <div className="ycontainer-sm bg-light section7">
                    <div className="sec7-left">
                        <h2 className="fs-900 bold clr-black-extralight">
                            Tem Uma Propriedade?
                        </h2>
                        <p className="fs-600 clr-black-light">
                            Comece já a anunciar e rentabilize o seu imóvel!
                        </p>
                        <a
                            href="/"
                            className="fs-300 btn-contain transition btn-shadow"
                        >
                            Anunciar
                        </a>
                    </div>
                    <div className="sec7-right">
                        <Link to="/7" className="fs-300 clr-white">
                            Quero saber mais...
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
