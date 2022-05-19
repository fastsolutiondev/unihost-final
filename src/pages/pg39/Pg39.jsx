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
import options from "./options.png"
import "./Pg39.css";
import Pg32form from "../../components/pg32form/Pg32form";
import Maps from "../../components/maps/Maps";

export default function Pg40() {
    return (
        <>
            <Navbar />
            <section className="pg40">
                <div className="container-fluid">
                    <div className="ycontainer-sm">
                        <Header1 />
                        <main>
                            <div style={{ padding: "50px" }}>
                                <ComponentX />
                            </div>
                            <div className="middle-line"></div>
                            <div className="pg40-content">
                                <h2 className="clr-black-light">
                                    Quarto privado em Aveiro
                                </h2>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Título do Anúncio</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Máximo de 50 palavras" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Nome interno</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Máximo de 50 palavras" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Descreva o seu espaço de forma simples e concisa.</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Descreva o seu espaço em 500 palavras" rows="3"></textarea>
                                </div>


                                <div>
                                    <span class="form-check">
                                        <span><strong>Vive na propriedade?</strong></span>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Sim
                                        </label>
                                        <input class="check-input" type="checkbox" value="" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Não
                                        </label>
                                        <input class="check-input" type="checkbox" value="" />
                                    </span>
                                </div>
                                <div>
                                    <span class="form-check">
                                        <span><strong>Tipo de senhorio?</strong></span>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Particular
                                        </label>
                                        <input class="check-input" type="checkbox" value="" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Profissional
                                        </label>
                                        <input class="check-input" type="checkbox" value="" />
                                    </span>
                                </div>
                                <div>
                                    <img src={options} alt="" />
                                </div>
                                <div>
                                    <Pg32form />
                                </div>
                                <div>
                                    <Maps />
                                </div>
                                <div>
                                    <Pg32form />
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
