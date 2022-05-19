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

import footer3 from "./footer3.png";
import "./Pg41.css";

export default function Pg41() {
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
                                    Preços
                                </h2>
                                <div className="footer1">
                                    <div>

                                        <span>
                                            Valor Mensal
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                            /mês
                                        </span>

                                    </div>
                                    <div>

                                        <span>
                                            Caução
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                        </span>

                                    </div>
                                    <div>

                                        <span>
                                            Preço por pessoa extra
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                            /mês
                                        </span>

                                    </div>
                                </div>


                                <div className="footer">
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Despesas incluídas
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Despesas parcialmente incluídas
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div className="footer2">
                                    <div>

                                        <span>
                                            Gás
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                        </span> <span>
                                            <input type="text" placeholder="Valor" />
                                        </span>

                                    </div>
                                    <div>

                                        <span>
                                            Internet
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                        </span> <span>
                                            <input type="text" placeholder="Valor" />
                                        </span>

                                    </div>
                                    <div>

                                        <span>
                                            Agua
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                        </span> <span>
                                            <input type="text" placeholder="Valor" />
                                        </span>

                                    </div>
                                    <div>

                                        <span>
                                            Luz
                                        </span>
                                        <span>
                                            <input type="text" placeholder="Valor" />
                                        </span> <span>
                                            <input type="text" placeholder="Valor" />
                                        </span>

                                    </div>
                                    <div className="footer">
                                        <div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    <strong>

                                                        Despesas excluídas
                                                    </strong>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button">Guardar alterações</button>
                                    <div>
                                        <img src={footer3} alt="" />
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
