import React from "react";
import "./HomeSection5Cards.css";

export default function HomeSection5Cards(props) {
    return (
        <article className="sec5-article">
            <img src={props.img} alt="" />
            <h3 className="clr-black-light fs-700">{props.heading}</h3>
            <p className="fs-600" style={{ color: "#7D8A97" }}>
                {props.text}
            </p>
        </article>
    );
}
