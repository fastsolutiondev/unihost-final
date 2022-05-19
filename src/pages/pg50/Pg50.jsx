import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import Img1 from "../../assets/images/rectangle_3400.jpg";
import Img2 from "../../assets/images/rectangle_3401.jpg";
import Img3 from "../../assets/images/rectangle_3402.jpg";
import Img4 from "../../assets/images/rectangle_3403.jpg";
import icon1 from "../../assets/images/icons8_add.svg";
import Img5 from "../../assets/images/rectangle_3404.jpg";
import Img6 from "../../assets/images/rectangle_3405.jpg";
import Img7 from "../../assets/images/rectangle_3406.jpg";
import Img8 from "../../assets/images/rectangle_3407.jpg";
import Footer from "../../components/footer/Footer";
import "./Pg50.css";

export default function Pg50() {
    return (
        <>
            <Navbar />
            <section className="pg40">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg40-content">
                                <h2 className="clr-black-light">
                                    Informações contratuais
                                </h2>
                                <button class="uk-button uk-button-primary">Em vigor</button>
                                <button class="uk-button uk-button-primary">Terminados</button>

                                <div >
                                    Apartamento em Peniche
                                </div>
                                <div className=" container">
                                    <button class="button ">
                                        Contrato Uni-package
                                    </button>
                                </div>
                                <div className="container">
                                    <button>Descarregar pdf</button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
