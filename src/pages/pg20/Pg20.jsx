import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import TriangleDown from "../../assets/images/icons8-sort-down-30.png";
import Checkmark from "../../assets/images/icon-checkmark-green.svg";
import ComponentX from "../../components/componentX/ComponentX";
import Footer from "../../components/footer/Footer";
import "./Pg20.css";
export default function Pg20() {
    return (
        <>
            <Navbar />
            <section className="pg20">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg20-content">
                                <h2>Reparações</h2>
                                <h3 className="bold clr-black-light">
                                    Reportar reparação
                                </h3>
                                <div className="content-grid">
                                    <div className="content-left">
                                        <select name="" id="">
                                            <option value="" selected disabled>
                                                onde?
                                            </option>
                                            <option value="">option1</option>
                                            <option value="">option1</option>
                                        </select>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="5"
                                            placeholder="Explica mais detalhadamente"
                                        ></textarea>
                                        <div
                                            className="fs-300 clr-black-light"
                                            style={{ marginBottom: "10px" }}
                                        >
                                            Anexa fotos
                                        </div>
                                        <a
                                            href=""
                                            className="btn-contain transition btn-shadow"
                                        >
                                            Carregar
                                        </a>
                                        <div
                                            className="fs-300 clr-black-light bold"
                                            style={{ marginBottom: "24px" }}
                                        >
                                            Nos próximos 3 dias qual a
                                            disponibilidade para irmos resolver
                                            o problema?
                                        </div>
                                        <ul>
                                            <li>
                                                <span>1.</span>
                                                <input type="text" />
                                            </li>
                                            <li>
                                                <span>2.</span>
                                                <input type="text" />
                                            </li>
                                            <li>
                                                <span>3.</span>
                                                <input type="text" />
                                            </li>
                                        </ul>
                                        <a
                                            href=""
                                            className="btn-contain transition btn-shadow"
                                        >
                                            Reportar Reparação
                                        </a>
                                    </div>
                                    <div
                                        className="middle-line"
                                        style={{
                                            marginInline: "50px",
                                            height: "100%",
                                        }}
                                    ></div>
                                    <div className="content-right">
                                        <h3 className="bold clr-black-light">
                                            Pedidos de Reparação
                                        </h3>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "2.5rem",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                <span className="fs-200">
                                                    Onde?
                                                </span>
                                                <h4 className="fs-400 bold">
                                                    WC 2
                                                </h4>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "16px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                    }}
                                                >
                                                    <span>Pedido no Dia</span>
                                                    <h4 className="fs-400 bold">
                                                        10/09
                                                    </h4>
                                                </div>
                                                <img
                                                    src={TriangleDown}
                                                    style={{ width: "1rem" }}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <h3 className="bold clr-black-light">
                                            Reparações resolvidas
                                        </h3>
                                        <div
                                            className="checked"
                                            style={{ marginBottom: "14px" }}
                                        >
                                            <div className="fs-200 clr-black-light">
                                                Estore sala
                                            </div>
                                            <img
                                                src={Checkmark}
                                                style={{ width: "18px" }}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="checked"
                                            style={{ marginBottom: "22px" }}
                                        >
                                            <div className="fs-200 clr-black-light">
                                                Quadro elétrico
                                            </div>
                                            <img
                                                src={Checkmark}
                                                style={{ width: "18px" }}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className="fs-300"
                                            style={{
                                                textAlign: "center",
                                                color: "#d9d9d9",
                                            }}
                                        >
                                            Não tem mais reparações para mostrar
                                        </div>
                                    </div>
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
