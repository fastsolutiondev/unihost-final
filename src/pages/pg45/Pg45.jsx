import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ComponentY from "../../components/componentY/ComponentY";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import Check from "../../assets/images/icon-checkmark-green.svg";
import Footer from "../../components/footer/Footer";
import "./Pg45.css";

export default function Pg45() {
    return (
        <>
            <Navbar />
            <section className="pg45">
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
                            <div className="pg45-content">
                                <h2 className="clr-black-light">Transações</h2>
                                <div className="pg45-payment">
                                    <div className="payment-article">
                                        <a
                                            href=""
                                            className="fs-300 clr-black-light"
                                        >
                                            Pagamento mensal
                                        </a>
                                        <h3 className="fs-700 clr-acc bold">
                                            795,30€
                                        </h3>
                                    </div>
                                    <div
                                        className="line"
                                        style={{
                                            width: "2px",
                                            height: "108px",
                                            backgroundColor: "#D9D9D9",
                                        }}
                                    ></div>
                                    <div className="payment-article">
                                        <a
                                            href=""
                                            className="fs-300 clr-black-light"
                                        >
                                            A pagar à unihosts
                                        </a>
                                        <h3 className="fs-700 clr-acc bold">
                                            70€
                                        </h3>
                                    </div>
                                    <div
                                        className="line"
                                        style={{
                                            width: "2px",
                                            height: "108px",
                                            backgroundColor: "#D9D9D9",
                                        }}
                                    ></div>
                                    <div className="payment-article">
                                        <a
                                            href=""
                                            className="fs-300 clr-black-light"
                                        >
                                            A pagar à unihosts
                                        </a>
                                        <h3 className="fs-700 clr-acc bold">
                                            725,30€
                                        </h3>
                                    </div>
                                </div>
                                <h3 className="fs-500 clr-black-light bold">
                                    Histórico de transações
                                </h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Renda Mensal</td>
                                            <td>
                                                <div>725,30€</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Uni-Package</td>
                                            <td>
                                                <div>€70.00</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Renda Mensal</td>
                                            <td>
                                                <div>725,30€</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Uni-Package</td>
                                            <td>
                                                <div>€70.00</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Renda Mensal</td>
                                            <td>
                                                <div>725,30€</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09/10/2022</td>
                                            <td>Comprovativo</td>
                                            <td>Uni-Package</td>
                                            <td>
                                                <div>€70.00</div>
                                                <img src={Check} alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div
                                    className="fs-300"
                                    style={{
                                        color: "#d9d9d9",
                                        textAlign: "center",
                                    }}
                                >
                                    Não tem mais transações para mostrar
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
