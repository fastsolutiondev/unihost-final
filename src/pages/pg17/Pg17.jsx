import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import Pdf from "../../assets/images/icons8_pdf_window.svg";
import Footer from "../../components/footer/Footer";
import "./Pg17.css";

export default function Pg17() {
    return (
        <>
            <Navbar />
            <section className="pg17">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg17-content">
                                <h2 className="clr-black-light">
                                    Informações contratuais
                                </h2>
                                <div className="pg17-cta">
                                    <a
                                        href=""
                                        style={{
                                            backgroundColor: "#d9d9d9",
                                            color: "#505046",
                                        }}
                                    >
                                        Em vigor
                                    </a>
                                    <a
                                        href=""
                                        style={{
                                            backgroundColor: "#fff",
                                            color: "#262e36",
                                        }}
                                    >
                                        Terminados
                                    </a>
                                </div>
                                <h4 className="clr-black-light">
                                    Apartamento em Peniche
                                </h4>
                                <div className="pg17-cta2">
                                    <div
                                        style={{
                                            padding: "22px 18px",
                                            backgroundColor: "#fff",
                                            border: "2px solid #dfdfdf",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <a
                                            href=""
                                            style={{
                                                padding: "13px 104px",
                                                borderRadius: "10px",
                                            }}
                                            className="btn-contain"
                                        >
                                            Contrato Ano Letivo
                                        </a>
                                    </div>
                                    <a href="">
                                        <img src={Pdf} alt="" />
                                        <div className="fs-200 clr-black-extralight">
                                            Descarregar pdf
                                        </div>
                                    </a>
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
