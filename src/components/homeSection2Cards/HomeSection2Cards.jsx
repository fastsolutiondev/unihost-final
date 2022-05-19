import React from "react";
import "./HomeSection2Cards.css";

const HomeSection2Cards = (props) => {
    return (
        <article className="ycard">
            <img src={props.img} alt="" />
            <div>
                <h2 className="fs500 clr-black-light">{props.heading}</h2>
                <p className="fs-300 clr-black-extralight">{props.text}</p>
            </div>
        </article>
    );
};

export default HomeSection2Cards;
