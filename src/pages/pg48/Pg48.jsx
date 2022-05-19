import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ComponentY from "../../components/componentY/ComponentY";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import AngleLeft from "../../assets/images/icons8_angle_left.svg";
import AngleRight from "../../assets/images/icons8_angle_right.svg";
import Check from "../../assets/images/icons8_checkmark_green_box.svg";
import Footer from "../../components/footer/Footer";
import "./Pg48.css";
export default function Pg48() {
    return (
        <>
            <Navbar />
            <section className="pg48">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <header
                            className="pg45-header"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: "20px",
                            }}
                        >
                            <img src={Computer} alt="" />
                            <span className="fs-400 clr-black-light">
                                Painal
                            </span>
                        </header>
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentY />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg48-content">
                                <h2>Reparações</h2>
                                <div className="pg48-buttons">
                                    <a
                                        href=""
                                        className="btn-outline transition btn-shadow"
                                    >
                                        Em curso
                                    </a>

                                    <a
                                        href=""
                                        className="btn-contain transition btn-shadow"
                                    >
                                        Resolvidas
                                    </a>
                                </div>
                                <h3>
                                    <span className="clr-acc bold">WC2 - </span>
                                    Apartamento inteiro Peniche
                                </h3>
                                <div className="pg48-mid">
                                    <div className="cards">
                                        <img src={AngleLeft} alt="" />
                                        <div></div>
                                        <div></div>
                                        <img src={AngleRight} alt="" />
                                    </div>
                                    <div>
                                        <h4
                                            className="fs-400 clr-black-light bold"
                                            style={{ marginBottom: "10px" }}
                                        >
                                            Descrição
                                        </h4>
                                        <p
                                            className="fs-200 clr-black-light"
                                            style={{ marginBottom: "0" }}
                                        >
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <img src={Check} alt="" />
                                        <p
                                            className="fs-300 clr-black-light"
                                            style={{ marginBottom: "0" }}
                                        >
                                            Arranjo dia 10/09
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "end",
                                        gap: "10px",
                                        marginBottom: "8px",
                                    }}
                                >
                                    <p
                                        className="fs-400 bold clr-black-light"
                                        style={{ marginBottom: "0" }}
                                    >
                                        Valor do arranjo:
                                    </p>
                                    <div
                                        style={{
                                            display: "grid",
                                            placeItems: "center",
                                            padding: "8px 40px",
                                            backgroundColor: "#fff",
                                            border: "2px solid #ECECEC",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <p
                                            className="fs-600 bold clr-black-light"
                                            style={{ marginBottom: "0" }}
                                        >
                                            35€
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="fs-200"
                                    style={{
                                        color: "#FF4D4D",
                                        textAlign: "right",
                                        marginBottom: "15px",
                                    }}
                                >
                                    Fatura
                                </div>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "#262E36",
                                    }}
                                ></div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
