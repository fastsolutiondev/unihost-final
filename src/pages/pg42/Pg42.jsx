import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import Img1 from "../../assets/images/rectangle_3400.jpg";
import Img2 from "../../assets/images/rectangle_3401.jpg";
import Img3 from "../../assets/images/rectangle_3402.jpg";
import Img4 from "../../assets/images/rectangle_3403.jpg";
import icon1 from "../../assets/images/icons8_add.svg";
import Img5 from "../../assets/images/rectangle_3404.jpg";
import Img6 from "../../assets/images/rectangle_3405.jpg";
import Img7 from "../../assets/images/rectangle_3406.jpg";
import Img8 from "../../assets/images/rectangle_3407.jpg";
import Footer from "../../components/footer/Footer";
import "./Pg42.css";

export default function Pg42() {
    return (
        <>
            <Navbar />
            <section className="pg40">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <header>
                            <p className="fs-400 clr-black-light">
                                Anúncios &gt; Detalhes dos Anúncios
                            </p>
                        </header>
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg40-content">
                                <h2 className="clr-black-light">
                                    Condições e regras
                                </h2>
                                <h3 className="fs-600 clr-black-light">
                                    As suas regras
                                </h3>
                                <div>
                                    <span>

                                        Animais permitidos
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                </div>
                                <div>
                                    <span>

                                        Fumar permitido
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                </div>
                                <div>
                                    <span>

                                        Eventos Permitidos
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                    <span>
                                        <input type="text" />
                                    </span>
                                </div>
                                <div>
                                    <span>

                                        Outra Regra
                                    </span>
                                    <span>
                                        <input type="text" placeholder="Adicionar" />
                                    </span>
                                </div>
                                <div>
                                    <p>
                                        Limpeza
                                    </p>
                                    <input type="text" />
                                </div>
                                <button className="button">
                                    Guardar alterações
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
