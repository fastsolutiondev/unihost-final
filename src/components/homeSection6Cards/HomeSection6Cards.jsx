import React from "react";
import Quotes from "../../assets/images/icon-quotest.svg";
import "./HomeSection6Cards.css";

export default function HomeSection6Cards(props) {
    return (
        <article className="sec6-article">
            <div>
                <img src={Quotes} alt="" style={{ width: "42px" }} />
                <p className="fs-400 clr-black-main lead-para">
                    {props.testimonial}
                </p>
            </div>
            <div className="profile">
                <img
                    src={props.img}
                    alt=""
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "20px",
                    }}
                />
                <div>
                    <p
                        className="fs-400 clr-black-main bold"
                        style={{ marginBottom: "0" }}
                    >
                        {props.name}
                    </p>
                    <p className="fs-200" style={{ marginBottom: "0" }}>
                        {props.desc}
                    </p>
                </div>
            </div>
        </article>
    );
}
