import React from "react";
import Man6 from "../../assets/images/man6.jpg";
import Img4 from "../../assets/images/img4.jpg";
import Img6 from "../../assets/images/img6.jpg";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/Navbar";
import "./Pg10.css";
export default function Pg10() {
    return (
        <>
            <NavBar />
            <section className="pg10">
                <div className="pg10-img"></div>
                <div className="container-fluid">
                    <div className="ycontainer-sm pg10-inner">
                        <h1 className="fs-950 bold clr-black-light">
                            Sobre nós
                        </h1>
                        <h2 className="fs-900 clr-black-main">
                            Uma plataforma que facilita o aluguer à velocidade
                            do agora!
                        </h2>
                        <p className="fs-600 clr-black-extralight">
                            Fomos estudantes que ainda hoje relembram memórias,
                            pessoas e experiências que marcaram o nosso
                            percurso. Somos gratos por esses momentos. O nosso
                            propósito serve para inspirar e contribuir para que
                            essa jornada académica seja rotulada pelo alojamento
                            ideal.
                        </p>
                        <div className="pg10-grid">
                            <img src={Man6} alt="" />
                            <div className="desc">
                                <h3 className="fs-900 clr-black-light">
                                    A nossa história
                                </h3>
                                <p className="fs-600 clr-black-light">
                                    A Unihosts nasce em Setembro de 2020, em
                                    plena pandemia, no quarto do João, no
                                    Baleal. Um dos grandes desafios que na
                                    altura existia era encontrar de forma
                                    simples um quarto na Universidade. Através
                                    das Associações de estudantes locais
                                    percebemos que existia uma necessidade de
                                    descomplicar este processo. Depois de alguns
                                    testes resolvemos fazer acontecer. Contamos
                                    contigo para divulgar e exponenciar este
                                    movimento! OBRIGADO!!
                                </p>
                            </div>
                        </div>
                        <div className="pg10-grid">
                            <div className="desc">
                                <h3 className="fs-900 clr-black-light">
                                    Missão
                                </h3>
                                <p className="fs-600 clr-black-light">
                                    Queremos que o estudante encontre o seu
                                    quarto ideal de forma prática, eficaz e
                                    segura! Pretendemos clarificar a oferta
                                    digital de alojamentos disponíveis de forma
                                    a consolidar uma harmonia funcional entre os
                                    proprietários e os estudantes.
                                </p>
                            </div>
                            <img src={Img4} alt="" />
                        </div>
                        <div className="pg10-grid">
                            <img src={Img6} alt="" />
                            <div className="desc">
                                <h3 className="fs-900 clr-black-light">
                                    Valores
                                </h3>
                                <p className="fs-600 clr-black-light">
                                    Acreditamos que o alojamento e todos os
                                    intervenientes do capítulo universitário são
                                    marcantes nas nossas vidas. Em comunidade
                                    queremos explorar continuamente novas
                                    ideias, processos e soluções. Valorizamos a
                                    simplicidade, transparência e compromisso de
                                    forma a aproximar as pessoas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
