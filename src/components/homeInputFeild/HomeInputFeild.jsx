import React from "react";
import Home1 from "../../assets/images/icon-home1.svg";
import ArrowLeft from "../../assets/images/icon-arrow-left.svg";
import ArrowRight from "../../assets/images/icon-arrow-right.svg";
import Search from "../../assets/images/icon-search.svg";
import "./HomeInputFeild.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeInputFeild = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/4_5`;
    navigate(path);
  };

  return (
    <div className="input-feild">
      <div className="div1" style={{ position: "relative" }}>
        <input type="text" className="input input1" />
        <p className="p1">
          Encontrar <img src={Home1} alt="" /> em...
        </p>
      </div>
      <div className="div2" style={{ position: "relative" }}>
        <input type="text" className="input input2" />
        <p className="p2">
          <img src={ArrowRight} alt="" /> Entrada
        </p>
      </div>
      <div className="div3" style={{ position: "relative" }}>
        <input type="text" className="input input3" />
        <p className="p3">
          <img src={ArrowLeft} alt="" /> Saida
        </p>
      </div>
      <button onClick={routeChange} className="bg-acc transition btn-shadow">
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default HomeInputFeild;
