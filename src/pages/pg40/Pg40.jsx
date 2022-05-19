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
import "./Pg40.css";

export default function Pg40() {
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
                                    Quarto privado em Aveiro
                                </h2>
                                <h3 className="fs-600 clr-black-light">
                                    Fotografias
                                </h3>
                                <div className="card-container">
                                    <img src={Img1} alt="" />
                                    <img src={Img2} alt="" />
                                    <img src={Img3} alt="" />
                                    <img src={Img4} alt="" />
                                    <div>
                                        <img src={icon1} alt="" />
                                        <div style={{ textAlign: "center" }}>
                                            carregar mais fotos
                                        </div>
                                    </div>
                                </div>
                                <div className="red-button">
                                    <a href="">Guardar</a>
                                </div>
                                <h3 style={{ color: "#707070" }}>
                                    Associar fotos
                                </h3>
                                <div
                                    className="fs-200 clr-black-light"
                                    style={{ marginBottom: "12px" }}
                                >
                                    Quarto
                                </div>
                                <div className="card-container">
                                    <img src={Img5} alt="" />
                                    <img src={Img6} alt="" />
                                    <img src={Img7} alt="" />
                                    <img src={Img8} alt="" />
                                </div>
                                <div
                                    className="fs-200 clr-black-light"
                                    style={{ marginBottom: "12px" }}
                                >
                                    Sala de estar
                                </div>
                                <div className="card-container">
                                    <img src={Img5} alt="" />
                                    <img src={Img6} alt="" />
                                    <img src={Img7} alt="" />
                                    <img src={Img8} alt="" />
                                </div>
                                <div className="red-button">
                                    <a href="">Guardar</a>
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
