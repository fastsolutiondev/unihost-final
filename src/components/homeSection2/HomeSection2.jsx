import React from "react";
import HomeSection2Cards from "../homeSection2Cards/HomeSection2Cards";
import Icon1 from "../../assets/images/homeSection2-1.svg";
import Icon2 from "../../assets/images/homeSection2-2.svg";
import Icon3 from "../../assets/images/homeSection2-3.svg";
import "./HomeSection2.css";

export default function HomeSection2() {
    return (
        <section>
            <div className="ycontainer-sm section2">
                <HomeSection2Cards
                    img={Icon1}
                    heading="Seguro e Verificado"
                    text="Valorizamos e protegemos a integridade das listas"
                />
                <HomeSection2Cards
                    img={Icon2}
                    heading="Proteção dos inquilinos"
                    text="Tens 24h após a entrada para confirmar se a casa que reservaste corresponde."
                />
                <HomeSection2Cards
                    img={Icon3}
                    heading="Procura rápida e inteligente"
                    text="De forma simplificada encontra o teu espaço ideal."
                />
            </div>
        </section>
    );
}
