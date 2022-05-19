import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Icon1 from "../../assets/images/icon-pg14-1.svg";
import Icon2 from "../../assets/images/icon-pg14-2.svg";
import Icon3 from "../../assets/images/icon-pg14-3.svg";
import Icon4 from "../../assets/images/icon-pg14-4.svg";
import Icon5 from "../../assets/images/icon-pg14-5.svg";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Pg14.css";

export default function Pg14() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/15`;
        navigate(path);
    };
    const newrouteChange = () => {
        let path = `/27`;
        navigate(path);
    };

    const textRouteChange = () => {
        let path = `/35`;
        navigate(path);
    };

    const notificationRouteChange = () => {
        let path = `/36`;
        navigate(path);
    };
    return (
        <>
            <NavBar />
            <section className="pg14">
                <div className="pg14-img">
                    <div className="pg14-img-text">
                        <h1 className="clr-white">Uni-Desk</h1>
                        <p className="fs-700 clr-white">Estudante</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <div className="pg14-grid">
                            <div className="pg14-card pg14-card1">
                                <img src={Icon1} alt="" />
                                <h2
                                    onClick={routeChange}
                                    className="fs-600 bold clr-acc"
                                >
                                    Minha estadia
                                </h2>
                                <div className="card-text">
                                    <h4>Informações gerais</h4>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Renda</p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Reparações</p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Despesas</p>
                                    </div>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Informações contratuais</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={newrouteChange}
                                className="pg14-card pg14-card2"
                            >
                                <img src={Icon2} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    Favoritos
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
                                    Caixa de entrada
                                </h2>
                                <div className="card-text">
                                    <h4 onClick={textRouteChange}>
                                        Pedidos de reserva
                                    </h4>
                                    <div className="card-desc">
                                        <img
                                            src={Icon5}
                                            alt=""
                                            className="card-desc-icon"
                                        />
                                        <p>Mensagens</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={notificationRouteChange}
                                className="pg14-card pg14-card4"
                            >
                                <img src={Icon4} alt="" />
                                <h2 className="fs-600 bold clr-acc">
                                    Notificações
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
