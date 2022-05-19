import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header1 from "../../components/header1/Header1";
import ComponentX from "../../components/componentX/ComponentX";
import card from "./card.svg";
import card2 from "./card2.svg";
import Footer from "../../components/footer/Footer";
import "./Pg38.css";
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
                                <div>
                                    <img src={card} alt="" />
                                </div>
                                <br />
                                <div>
                                    <img src={card} alt="" />
                                </div>
                                <br />

                                <div>
                                    <img src={card} alt="" />
                                </div>
                                <br />

                                <br />
                                <div>
                                    <img src={card2} alt="" />
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
