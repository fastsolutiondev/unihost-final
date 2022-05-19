import React from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg7sectone from "../../components/Pg7sectone/Pg7sectone";
import "./Pg7.css";
import image1 from "../../assets/images/img1.png";
import image11 from "../../assets/images/img11.png";
import image2 from "../../assets/images/2.png";
import image22 from "../../assets/images/22.png";
import image3 from "../../assets/images/3.png";
import image33 from "../../assets/images/33.png";
import image4 from "../../assets/images/4.png";
import image44 from "../../assets/images/44.png";
import image5 from "../../assets/images/5.png";
import image55 from "../../assets/images/55.png";
import image6 from "../../assets/images/6.png";
import image66 from "../../assets/images/66.png";
import image7 from "../../assets/images/7.png";
import image77 from "../../assets/images/77.png";
import Button from "../../components/button/Button";
import Pg7cardsect from "../../components/pg7cardsect/Pg7cardsect";
import Pg7cartcards from "../../components/pg7cartcards/Pg7cartcards";
import Maps from "../../components/maps/Maps";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Pg7() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/23`;
    navigate(path);
  };
  return (
    <div>
      <Navbar />
      <Pg7sectone />
      <div className="container">
        <div className="row">
          <Card
            className
            heading="Criar o anúncio "
            text="Elabore o seu anúncio o mais completo possível - ter uma
                descrição simples e conciso é importante. Defina as duas regras
                e detalhes da propriedade para que os inquilinos saibam
                exatamente o que esperar. "
            img={image1}
            img11={image11}
          />
          <Card
            heading="Defina as condições de arrendamento "
            text="Decidir se a sua propriedade possui ou não despesas incluídas 
          (se sim, quais delas) é uma das coisas que os inquilinos mais perguntam -
           antecipe esse tipo de perguntas e coloque o valor conforme o que pretende.
            Ainda nas condições estabeleça a sua política de cancelamento - Azares acontecem!
             Pode escolher a sua política de entre as 3 que temos disponíveis. Esta informação será\
              exibida no seu anúncio. "
            img={image22}
            img11={image2}
          />
          <Card
            heading="Adicione fotografias da propriedade "
            text="Elabore o seu anúncio o mais completo possível - ter uma
          descrição simples e conciso é importante. Defina as duas regras
          e detalhes da propriedade para que os inquilinos saibam
          exatamente o que esperar. "
            img={image33}
            img11={image3}
          />
          <Card
            heading="Receba pedidos de reserva "
            text="Sempre que houver alguém interessado este enviará um pedido de
           reserva com aquilo que procura. Estes pedidos de reserva podem ser aceites
            ou recusados até 24h, a partir deste tempo já não é possível aceitar a reserva. "
            img={image44}
            img11={image4}
          />
          <Card
            heading="Reserva confirmada "
            text="Após confirmar a reserva procure dar o máximo de informações e indicações ao seu novo inquilino. "
            img={image55}
            img11={image5}
          />
          <Card
            heading="Receba os seus novos inquilinos "
            text="É importante que receba as pessoas para que se possam conhecer e esclarecer eventuais dúvidas.
           Assinar contratos e preparar os restantes meses pode também ser um dos tópicos. "
            img={image66}
            img11={image6}
          />
          <Card
            heading="Receba o seu primeiro pagamento "
            text="Quando a reserva é confirmada debitamos ao inquilino a primeira renda 
          e guardamos este valor até 24h após a entrada. Após garantir que tudo está correto,
           o dinheiro é libertado para o seu cartão, que deve adicionar nos métodos de pagamento."
            img={image77}
            img11={image7}
          />
        </div>
      </div>
      {/* Button */}
      <div onClick={routeChange} className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <Button text="Criar o anúncio" />
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* Card Section */}
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col">
            <Pg7cardsect />
          </div>
        </div>
      </div>
      {/* Cart Cards */}
      <div className="container mb-4">
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <Pg7cartcards />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      {/* Map */}
      <div className="container">
        <div className="row">
          <div className="col">
            <Maps />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pg7;
