import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import Warning from "../../assets/images/icon-warning.svg";
import Checkmark from "../../assets/images/icon-checkmark-green.svg";
import Footer from "../../components/footer/Footer";
import "./Pg19.css";

export default function Pg19() {
    return (
        <>
            <Navbar />
            <section className="pg19">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg19-content">
                                <h2>Renda</h2>
                                <div className="payment">
                                    <div className="payment-div">
                                        <h3 className="fs-300 clr-black-light">
                                            Valor Mensal Outubro
                                        </h3>
                                        <h2 className="clr-black-extralight bold">
                                            400&euro;/
                                            <span>mês</span>
                                        </h2>
                                    </div>

                                    <div className="payment-line"></div>

                                    <div className="payment-div">
                                        <h3 className="fs-300 clr-black-light">
                                            Despesas mês de outubro
                                        </h3>
                                        <h2 className="clr-black-extralight bold">
                                            32,40&euro;
                                        </h2>
                                    </div>

                                    <div className="payment-line"></div>

                                    <div
                                        className="payment-div"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.5rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={Warning}
                                                alt=""
                                                style={{
                                                    display: "inline-block",
                                                }}
                                            />
                                            <h3
                                                className="fs-300 clr-black-light"
                                                // style={{ marginBottom: "0", paddingBottom: "0.5rem" }}
                                            >
                                                O pagamento está em atraso
                                            </h3>
                                        </div>

                                        <a
                                            href=""
                                            style={{ alignSelf: "start" }}
                                        >
                                            Pagar renda
                                        </a>
                                    </div>
                                </div>
                                <h2
                                    className="bold clr-black-light"
                                    style={{
                                        fontSize: "22px",
                                        lineHeight: "32px",
                                        marginBottom: "1.375rem",
                                    }}
                                >
                                    Histórico de pagamentos
                                </h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Data</th>
                                            <th>Descritivo</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07/09/2021</td>
                                            <td>Renda + Despesas Setembro</td>
                                            <td>
                                                <span>425,30&euro;</span>
                                                <img src={Checkmark} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07/09/2021</td>
                                            <td>Renda + Despesas Setembro</td>
                                            <td>
                                                <span>425,30&euro;</span>
                                                <img src={Checkmark} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07/09/2021</td>
                                            <td>Renda + Despesas Setembro</td>
                                            <td>
                                                <span>425,30&euro;</span>
                                                <img src={Checkmark} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07/09/2021</td>
                                            <td>Renda + Despesas Setembro</td>
                                            <td>
                                                <span>425,30&euro;</span>
                                                <img src={Checkmark} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07/09/2021</td>
                                            <td>Renda + Despesas Setembro</td>
                                            <td>
                                                <span>425,30&euro;</span>
                                                <img src={Checkmark} alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
