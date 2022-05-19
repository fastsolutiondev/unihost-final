import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg4_5input from "../../components/pg4_5input/Pg4_5input";
import Pg4_5selection from "../../components/pg4_5selection/Pg4_5selection";

import "./Pg4_5.css";

function Pg4_5() {
    return (
        <div>
            <Navbar />
            <Pg4_5input />
            <Pg4_5selection />
            <Footer />
        </div>
    );
}

export default Pg4_5;
