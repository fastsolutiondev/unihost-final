import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";

import Bulb from "../../assets/images/icons8_light.svg";
import Water from "../../assets/images/icons8_water.svg";
import Gas from "../../assets/images/icons8_gas.svg";
import Wifi from "../../assets/images/icons8_wi-fi.svg";

import TriangleUp from "../../assets/images/icons8-sort-up-30.png";
import TriangleDown from "../../assets/images/icons8-sort-down-30.png";

import Footer from "../../components/footer/Footer";
import "./Pg21.css";

export default function Pg21() {
    const [summary1, setSummary1] = useState(true);
    const [summary2, setSummary2] = useState(true);
    return (
        <>
            <Navbar />
            <section className="pg21">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg21-content">
                                <h2 className="clr-black-light">Despesas</h2>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        gap: "56px",
                                        marginBottom: "76px",
                                    }}
                                >
                                    <div>
                                        <p
                                            className="fs-300 clr-black-light"
                                            style={{ marginBottom: "0.5rem" }}
                                        >
                                            Despesas mês
                                        </p>
                                        <p
                                            className="fs-300 clr-black-light"
                                            style={{ marginBottom: "0.5rem" }}
                                        >
                                            de Outubro
                                        </p>
                                        <strong
                                            className="clr-black-extralight"
                                            style={{
                                                fontSize: "34px",
                                                lineHeight: "44px",
                                            }}
                                        >
                                            22,43€
                                        </strong>
                                    </div>
                                    <div
                                        style={{
                                            width: "2px",
                                            height: "110px",
                                            backgroundColor: "#D9D9D9",
                                        }}
                                    ></div>
                                    <a
                                        href=""
                                        className="btn-contain"
                                        style={{
                                            padding: "12px 34px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        ver faturas
                                    </a>
                                </div>
                                <div
                                    className="features"
                                    style={{ marginBottom: "2rem" }}
                                >
                                    <strong className="fs-300 clr-black-light">
                                        outubro
                                    </strong>
                                    <table className="feature-table">
                                        <tbody>
                                            <tr className="tr-up">
                                                <td>
                                                    <div className="block-up">
                                                        <img
                                                            src={Bulb}
                                                            alt=""
                                                        />
                                                        <span>luz</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-up">
                                                        <img
                                                            src={Water}
                                                            alt=""
                                                        />
                                                        <span>água</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-up">
                                                        <img src={Gas} alt="" />
                                                        <span>gás</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-up">
                                                        <img
                                                            src={Wifi}
                                                            alt=""
                                                        />
                                                        <span>internet</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-up">
                                                        <span>total</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-up">
                                                        <span>total/pax</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="tr-up">
                                                <td>
                                                    <div className="block-down">
                                                        <span>30€</span>
                                                        <span>
                                                            <a href="">
                                                                Fatura
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-down">
                                                        <span>25€</span>
                                                        <span>
                                                            <a href="">
                                                                Fatura
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-down">
                                                        <span>40€</span>
                                                        <span>
                                                            <a href="">
                                                                Fatura
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-down">
                                                        <span>28€</span>
                                                        <span>
                                                            <a href="">
                                                                Fatura
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-down">
                                                        <span>132€</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="block-down">
                                                        <span>30,75€</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h3
                                    className="clr-black-light"
                                    style={{
                                        fontSize: "22px",
                                        lineHeight: "32px",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    Histórico de despesas
                                </h3>
                                <div className="pg21-bottom">
                                    <table className="bottom-table-up">
                                        <tbody>
                                            <tr>
                                                <td>Nome</td>
                                                <td>Estado</td>
                                            </tr>
                                            <tr>
                                                <td>Despesas de setembro</td>
                                                <td>
                                                    <details>
                                                        <summary
                                                            onClick={() => {
                                                                setSummary1(
                                                                    !summary1
                                                                );
                                                            }}
                                                        >
                                                            <span>Pago</span>
                                                            <img
                                                                src={
                                                                    summary1
                                                                        ? TriangleDown
                                                                        : TriangleUp
                                                                }
                                                                alt=""
                                                            />
                                                        </summary>
                                                    </details>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Despesas de agosto</td>
                                                <td>
                                                    <details>
                                                        <summary
                                                            onClick={() => {
                                                                setSummary2(
                                                                    !summary2
                                                                );
                                                            }}
                                                        >
                                                            <span>Pago</span>
                                                            <img
                                                                src={
                                                                    summary2
                                                                        ? TriangleDown
                                                                        : TriangleUp
                                                                }
                                                                alt=""
                                                            />
                                                        </summary>
                                                    </details>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="features"
                                        style={{
                                            marginTop: "2rem",
                                            width: "100%",
                                        }}
                                    >
                                        <strong className="fs-300 clr-black-light">
                                            outubro
                                        </strong>
                                        <table className="feature-table">
                                            <tbody>
                                                <tr className="tr-up">
                                                    <td>
                                                        <div className="block-up">
                                                            <img
                                                                src={Bulb}
                                                                alt=""
                                                            />
                                                            <span>luz</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-up">
                                                            <img
                                                                src={Water}
                                                                alt=""
                                                            />
                                                            <span>água</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-up">
                                                            <img
                                                                src={Gas}
                                                                alt=""
                                                            />
                                                            <span>gás</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-up">
                                                            <img
                                                                src={Wifi}
                                                                alt=""
                                                            />
                                                            <span>
                                                                internet
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-up">
                                                            <span>total</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-up">
                                                            <span>
                                                                total/pax
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="tr-up">
                                                    <td>
                                                        <div className="block-down">
                                                            <span>30€</span>
                                                            <span>
                                                                <a href="">
                                                                    Fatura
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-down">
                                                            <span>25€</span>
                                                            <span>
                                                                <a href="">
                                                                    Fatura
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-down">
                                                            <span>40€</span>
                                                            <span>
                                                                <a href="">
                                                                    Fatura
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-down">
                                                            <span>28€</span>
                                                            <span>
                                                                <a href="">
                                                                    Fatura
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-down">
                                                            <span>132€</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="block-down">
                                                            <span>30,75€</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
