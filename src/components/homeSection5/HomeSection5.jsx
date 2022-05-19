import React from "react";
import HomeSection5Cards from "../homeSection5Cards/HomeSection5Cards";
import Icon1 from "../../assets/images/homeSection2-3.svg";
import Icon2 from "../../assets/images/homeSection5-2.svg";
import Icon3 from "../../assets/images/homeSection5-3.svg";
import { Link } from "react-router-dom";

import { CgHome } from "react-icons/cg";
import "./HomeSection5.css";

export default function HomeSection5() {
    return (
        <section>
            <div className="container-fluid">
                <div className="ycontainer-sm section5">
                    <h2 className="fs-900 clr-black-main bold">
                        Como Funciona?
                    </h2>
                    <div className="sec5-card-container">
                        <HomeSection5Cards
                            img={Icon1}
                            heading="Pesquisa"
                            text="De forma intuitiva defina a localização, datas e características que pretende para um estadia ideal!"
                        />
                        <HomeSection5Cards
                            img={Icon2}
                            heading="Reserva"
                            text="Assim que o pedido for confirmado irás agilizar e esclarecer com o senhorio a data de mudança e entrega das chaves."
                        />
                        <HomeSection5Cards
                            img={Icon3}
                            heading="Mudança"
                            text="O primeiro pagamento só será transferido após verificares a casa, estamos aqui para qualquer questão. Boa estadia!"
                        />
                    </div>
                    <Link
                        to="/4_5"
                        className="btn-contain transition btn-shadow fs-300 clr-white"
                    >
                        Encontrar <CgHome /> um...
                    </Link>
                </div>
            </div>
        </section>
    );
}
