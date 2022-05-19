import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import pg27Data from './pg27Data.svg'

export default function Pg27() {
    return (
        <div>
            <Navbar />
            <div className="container">

                <img src={pg27Data} alt="" />
            </div>
            <Footer />

        </div>
    )
}
