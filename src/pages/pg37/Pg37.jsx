import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Icon1 from "../../assets/images/icon-pg37-1.svg";
import Icon2 from "../../assets/images/icon-pg14-3.svg";
import Icon3 from "../../assets/images/icon-pg37-2.svg";
import Icon4 from "../../assets/images/icon-pg14-4.svg";
import Icon5 from "../../assets/images/icon-pg14-5.svg";
import Icon6 from "../../assets/images/icon-pg37-3.svg";
import "./Pg37.css";
import { Link } from "react-router-dom";

export default function Pg37() {
    return (
        <>
            <NavBar />
            <section className="pg14">
                <div className="pg14-img">
                    <div className="pg14-img-text">
                        <h1 className="clr-white">Uni-Desk</h1>
                        <p className="fs-700 clr-white">senhorio</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <div className="pg14-grid">
                            <div className="pg14-card pg14-card1">
                                <img src={Icon1} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    Anúncios
                                </h2>
                                <div className="card-text">
                                    <h4 className="bold">
                                        <Link to="/38">Painel</Link>
                                    </h4>
                                    <details>
                                        <summary>Anúncios</summary>
                                        <ul>
                                            <li style={{ gap: "0.5rem" }}>
                                                <div
                                                    className="cricle bg-acc"
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                    }}
                                                ></div>
                                                <Link to="/39">
                                                    Detalhes dos anúncios
                                                </Link>
                                            </li>
                                            <li style={{ gap: "0.5rem" }}>
                                                <div
                                                    className="cricle bg-acc"
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                    }}
                                                ></div>
                                                <Link to="/40">Fotos</Link>
                                            </li>
                                            <li style={{ gap: "0.5rem" }}>
                                                <div
                                                    className="cricle bg-acc"
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                    }}
                                                ></div>
                                                <Link to="/41">
                                                    Condições e regras
                                                </Link>
                                            </li>
                                            <li style={{ gap: "0.5rem" }}>
                                                <div
                                                    className="cricle bg-acc"
                                                    style={{
                                                        width: "8px",
                                                        height: "8px",
                                                        borderRadius: "50%",
                                                    }}
                                                ></div>
                                                <Link to="/42">Preços</Link>
                                            </li>
                                            <li style={{ gap: "0.5rem" }}>
                                                <img
                                                    src={Icon5}
                                                    alt=""
                                                    className="card-desc-icon"
                                                />
                                                Informações contratuais
                                            </li>
                                        </ul>
                                    </details>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Calendário</p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <Link to="/43">
                                            <p>Reviews</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="pg14-card pg14-card2">
                                <img src={Icon2} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    Caixa de entrada
                                </h2>
                                <div className="card-text">
                                    <h4>
                                        <Link to="/35">
                                            {" "}
                                            Pedidos de reserva
                                        </Link>
                                    </h4>
                                    <h4>Mensagens</h4>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="pg14-card pg14-card3">
                                <img src={Icon3} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    Uni-controlo
                                </h2>
                                <div className="card-text">
                                    <h4>
                                        <Link to="/44">Hóspedes</Link>
                                    </h4>
                                    <h4>
                                        <Link to="/45">Transações</Link>
                                    </h4>
                                    <h4>
                                        <Link to="/47">Despesas</Link>
                                    </h4>
                                    <h4>Reparações</h4>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Mensagens</p>
                                    </div>
                                </div>
                                <img
                                    src={Icon6}
                                    alt=""
                                    style={{
                                        width: "42px",
                                        justifySelf: "end",
                                    }}
                                />
                            </div>
                            <div className="pg14-card pg14-card4">
                                <img src={Icon4} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    <Link to="/36">Notificações</Link>
                                </h2>
                                <div className="card-text">
                                    <h4></h4>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
