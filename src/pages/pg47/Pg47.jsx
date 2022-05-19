import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ComponentY from "../../components/componentY/ComponentY";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import "./Pg47.css";
export default function Pg47() {
    return (
        <>
            <Navbar />
            <section className="pg47">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <header
                            className="pg47-header"
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
                            <div className="pg47-content">
                                <h2 className="clr-black-light">Despesas</h2>
                                <div className="pg47-buttons">
                                    <a href="">Anúncio 1</a>
                                    <a href="">Anúncio 2</a>
                                    <a href="">Anúncio 3</a>
                                    <a href="">Anúncio 4</a>
                                </div>
                                <table className="pg47-table">
                                    <tbody>
                                        <tr className="tr-up">
                                            <td>
                                                <div className="block-up">
                                                    <span>Mês</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>luz</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>água</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>gás</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
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
                                        <tr className="tr-down">
                                            <td>
                                                <div className="block-down">
                                                    <span>Julho</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-down">
                                                    <AiOutlinePlus
                                                        style={{
                                                            color: "#C48B60",
                                                        }}
                                                    />
                                                    <span>
                                                        <a href="">Adicionar</a>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-down">
                                                    <span>25€</span>
                                                    <span>
                                                        <a href="">Fatura</a>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-down">
                                                    <span>40€</span>
                                                    <span>
                                                        <a href="">Fatura</a>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-down">
                                                    <span>28€</span>
                                                    <span>
                                                        <a href="">Fatura</a>
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
                                <div style={{ marginBottom: "64px" }}>
                                    <a
                                        href=""
                                        className="btn-contain transition btn-shadow fs-200"
                                        style={{
                                            padding: "14px 26px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        Guardar alterações
                                    </a>
                                </div>
                                <h4
                                    className="fs-500 clr-black-light bold"
                                    style={{ marginBottom: "12px" }}
                                >
                                    Histórico de despesas
                                </h4>
                                <p
                                    className="fs-500 clr-black-light"
                                    style={{ marginBottom: "45px" }}
                                >
                                    06/06/2021 - Despesas de Maio
                                </p>
                                <table
                                    className="pg47-table"
                                    style={{ marginBottom: "33px" }}
                                >
                                    <tbody>
                                        <tr className="tr-up">
                                            <td>
                                                <div className="block-up">
                                                    <span>Mês</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>luz</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>água</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
                                                    <span>gás</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="block-up">
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
                                        <tr className="tr-down">
                                            <td
                                                style={{ padding: "20px 25px" }}
                                            >
                                                <div className="block-down">
                                                    <span>Julho</span>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p
                                    className="fs-500 clr-black-light"
                                    style={{ marginBottom: "30px" }}
                                >
                                    05/05/2021 - Despesas de Abril
                                </p>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "#262E36",
                                        marginBottom: "33px",
                                    }}
                                ></div>
                                <p
                                    className="fs-500 clr-black-light"
                                    style={{ marginBottom: "30px" }}
                                >
                                    08/04/2021 - Despesas de Março
                                </p>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "#262E36",
                                        marginBottom: "33px",
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
