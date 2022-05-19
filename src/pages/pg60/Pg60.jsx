import React from "react";
import Contacards from "../../components/contacard/Contacards";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import img1 from "../../assets/images/contaimg1.png";
import img2 from "../../assets/images/contaimg2.png";
import img3 from "../../assets/images/contaimg3.png";

function Pg60() {
  return (
    <div>
      <Navbar />
      <Contacards
        heading="Informações pessoais"
        text="Forneça os dados sobre si e como o podemos contactar."
        img={img1}
      />
      <Contacards
        heading="Pagamentos e recebimentos"
        text="Defina como vai receber/pagar as transações que efectuar."
        img={img2}
      />
      <Contacards
        heading="Configurações"
        text="Atualize a sua palavra-passe e controle as notificações."
        img={img3}
      />
      <Footer />
    </div>
  );
}

export default Pg60;
