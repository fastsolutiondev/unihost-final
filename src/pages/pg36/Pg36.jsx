import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import pg6Data from "./pg6Data.svg";

export default function Pg36() {
    return (
        <div>
            <Navbar />

            <div className="pg36 container">
                <img src={pg6Data} alt="" />
            </div>
            <Footer />

        </div>
    )
}
