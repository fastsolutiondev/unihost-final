import React from "react";
import Faqs from "../../components/faqs/Faqs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Togglebtn from "../../components/togglebtn/Togglebtn";
import "./Pg9.css";
function Pg9() {
  return (
    <div>
      <Navbar />
      <Togglebtn />
      <Faqs
        heading1="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading3="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading4="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        heading5="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque?"
        opentext="Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        , sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
        s dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
      />

      <Footer />
    </div>
  );
}

export default Pg9;
