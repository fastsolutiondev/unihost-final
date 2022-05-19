import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg32form from "../../components/pg32form/Pg32form";
import ProgressBar from "../../components/progressBar/ProgressBar";

function Pg32() {
    return (
        <div>
            <Navbar />
            <ProgressBar idx={9} />
            <Pg32form />
            <Footer />
        </div>
    );
}

export default Pg32;
