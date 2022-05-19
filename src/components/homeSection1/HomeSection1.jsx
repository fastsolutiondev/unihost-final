import React from "react";
import { useState } from "react";
import Home from "../../assets/images/icon-home.svg";
import Search from "../../assets/images/icon-search.svg";
import Home1 from "../../assets/images/icon-home1.svg";
import ArrowLeft from "../../assets/images/icon-arrow-left.svg";
import ArrowRight from "../../assets/images/icon-arrow-right.svg";
import NavBarbr from "../../components/NavBarbr";
import "./HomeSection1.css";
import HomeInputFeild from "../homeInputFeild/HomeInputFeild";

export default function HomeSection1() {
    const [width, setWidth] = useState(window.innerWidth);
    return (
        <section>
            <div className="container-fluid header">
                <div className="ycontainer-sm">
                    <h1 className="fs-950 clr-white">
                        A tua
                        <img
                            src={Home}
                            style={{ display: "inline-block" }}
                            alt=""
                        />
                        a distancia de um&nbsp;
                        <NavBarbr width={width} />
                        click!
                    </h1>
                    <HomeInputFeild />
                </div>
            </div>
        </section>
    );
}
