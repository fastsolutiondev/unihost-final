import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import Bed1 from "../../assets/images/bed-pg18-1.jpg";
import Bed2 from "../../assets/images/bed-pg18-2.jpg";
import Flag from "../../assets/images/icons8_flag_2_1.svg";
import Mail from "../../assets/images/icons8_group_message_1.svg";
import Refresh from "../../assets/images/icons8_refresh.svg";
import Star from "../../assets/images/icons8_star_1.svg";
import House from "../../assets/images/icons8_real_estate.svg";
import Footer from "../../components/footer/Footer";
import "./Pg18.css";

export default function Pg18() {
    return (
        <>
            <Navbar />
            <section className="pg18">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg18-content">
                                <h2 className="clr-black-light">
                                    Informações gerais
                                </h2>
                                <h3>Estadia atual</h3>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "2rem",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <div className="pg18-card">
                                        <img src={Bed2} alt="" />
                                        <div>
                                            <h3 className="clr-black-light bold">
                                                Quarto privado em Peniche
                                            </h3>
                                            <span className="clr-acc bold">
                                                400€/mês
                                            </span>
                                            <div>Despesas excluídas</div>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <img src={Flag} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <img src={Mail} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <img src={Refresh} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <img src={Star} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                </div>
                                <h3>Estadia atual</h3>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "2rem",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <div className="pg18-card">
                                        <img src={Bed1} alt="" />
                                        <div>
                                            <h3 className="clr-black-light bold">
                                                Quarto privado em Peniche
                                            </h3>
                                            <span className="clr-acc bold">
                                                400€/mês
                                            </span>
                                            <div>Despesas excluídas</div>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <img src={Flag} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <img src={Mail} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                    <div className="actions">
                                        <img src={Refresh} alt="" />
                                        <span className="fs-100 clr-black-extralight">
                                            Reportar anúncio
                                        </span>
                                    </div>
                                </div>
                                <p
                                    className="fs-200 clr-acc"
                                    style={{
                                        textAlign: "center",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Não tem + estadias programadas
                                </p>
                                <div style={{ textAlign: "center" }}>
                                    <a
                                        href=""
                                        className="btn-contain bottom-btn"
                                    >
                                        Encontrar{" "}
                                        <img
                                            src={House}
                                            style={{ display: "inline-block" }}
                                            alt=""
                                        />{" "}
                                        em...
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
