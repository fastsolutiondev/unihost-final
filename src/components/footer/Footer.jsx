import React, { useState } from "react";
import Logo2 from "../../assets/images/logo2.svg";
import Socials from "../socials/Socials";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-footer">
                <div className="ycontainer-sm footer">
                    <article className="footer-article logo">
                        <img src={Logo2} alt="" style={{ width: "17.25rem" }} />
                    </article>
                    <article className="footer-article article1">
                        <h3 className="footer-heading fs-300 clr-white bold">
                            Unihosts
                        </h3>

                        <Link to="/10" className="fs-300 clr-white">
                            Sobre nós
                        </Link>

                        <Link to="/8/#" className="fs-300 clr-white">
                            Blog
                        </Link>

                        <Link to="/53" className="fs-300 clr-white">
                            Torne-se um parceiro
                        </Link>

                        <a href="/" className="fs-300 clr-white">
                            Termos e condições
                        </a>

                        <a href="/" className="fs-300 clr-white">
                            Política de cookies
                        </a>

                        <Link to="/53" className="fs-300 clr-white">
                            Fale connosco
                        </Link>
                    </article>
                    <article className="footer-article article2">
                        <h3 className="footer-heading fs-300 clr-white bold">
                            Estudantes
                        </h3>

                        <a href="/" className="fs-300 clr-white">
                            Como alugar
                        </a>

                        <Link to="/9" className="fs-300 clr-white">
                            Ajuda para os Estudantes
                        </Link>

                        <Link to="/12" className="fs-300 clr-white">
                            Iniciar sessão/Registar
                        </Link>
                    </article>
                    <article className="footer-article article3">
                        <h3 className="footer-heading fs-300 clr-white bold">
                            Senhorios
                        </h3>

                        <Link to="/7" className="fs-300 clr-white">
                            Como funciona
                        </Link>

                        <Link to="/34" className="fs-300 clr-white">
                            Ajuda para os senhorios
                        </Link>

                        <Link to="/12" className="fs-300 clr-white">
                            Iniciar sessão/ Registar
                        </Link>

                        <div>
                            <Link
                                to="/4_5"
                                className="fs-100 btn-contain footer-last transition btn-shadow"
                            >
                                Anuncie a sua propriedade
                            </Link>
                        </div>
                    </article>
                    <article className="socials">
                        <Socials
                            bgClr="#fff"
                            clr="#c48b60"
                            width="38px"
                            fSize="24px"
                        />
                    </article>
                </div>
                <div className="container-sm footer-bottom">
                    <p
                        className="fs-100 clr-white"
                        style={{
                            paddingTop: "2rem",
                            paddingBottom: "1.625rem",
                            marginBottom: "0",
                            textAlign: "center",
                        }}
                    >
                        Unihosts
                    </p>
                </div>
            </div>
        </footer>
    );
}
