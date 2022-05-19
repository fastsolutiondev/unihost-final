import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Computer from "../../assets/images/icons8_laptop_computer.svg";
import ComponentX from "../../components/componentX/ComponentX";
// import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import "./Pg52.css";
function Pg52() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-4 mb-4">
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
                            Anúncios Detalhes dos Anúncios
                        </span>
                    </header>
                </div>
                <div className="row chatback">
                    <div className="col-4 mt-4 mb-4">
                        <div className="m-4">
                            {" "}
                            <ComponentX />
                        </div>
                    </div>

                    <div className="col-8 mt-4 mb-4">
                        <p
                            style={{
                                color: "#222F41",
                                fontSize: "30px",
                                fontWeight: "300",
                                marginTop: "20px",
                            }}
                        >
                            Quarto privado em Aveiro
                        </p>
                        <p
                            style={{
                                color: "#707070",
                                fontSize: "22px",
                                fontWeight: "400",
                                marginTop: "20px",
                            }}
                        >
                            Calendário
                        </p>
                        <p
                            style={{
                                color: "#C48B60",
                                fontSize: "22px",
                                fontWeight: "bold",
                                marginTop: "20px",
                            }}
                        >
                            Não se esqueça de manter o seu calendário atualizado!
                        </p>
                        <Calendar onChange={onChange} value={value} />


                        <div className="footerContent">
                            <p><strong>
                                Estadia mínima
                            </strong></p>
                            <div>
                                <input type="text" />
                            </div>
                            <p><strong>
                                Tempo de antecedência
                            </strong></p>
                            <div>
                                <input type="text" />
                            </div>

                            <button class="uk-button uk-button-primary">Guardar alterações</button>



                        </div>
                        <div className="footerContent2">
                            <h3>Descontos (opcional)</h3>
                            <div>
                                <div>
                                    <p><strong>
                                        Desconto trimestral</strong></p>
                                    <input type="text" />
                                    <div>
                                        <div>
                                            <p><strong>
                                                Desconto semestral</strong></p>
                                            <input type="text" />

                                        </div>
                                    </div>
                                    <button class="uk-button uk-button-primary">Guardar alterações</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pg52;
