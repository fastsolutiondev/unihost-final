import React from "react";

export default function NavBarbr(props) {
    if (props.width >= 1080) {
        return <br />;
    } else {
        return <span></span>;
    }
}
