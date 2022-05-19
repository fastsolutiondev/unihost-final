import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import pg35Data from "./Pg35Data.svg";

export default function Pg35() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <img src={pg35Data} alt="" />
            </div>

            <Footer />
        </div>
    )
}
