import React from "react";
import "./Pg8cards.css";
function Pg8cards() {
  return (
    <div>
      {" "}
      <section>
        <div className="container-lg">
          <div className="container-sm section8">
            <div className="top">
              <h2
                className="fs-600 clr-black-main bold"
                style={{ fontSize: "40px" }}
              >
                Pertence Onde Tu Quiseres!
              </h2>
              <div className="form-group col-4 otuline-secondary">
                <select id="inputState" className="form-control">
                  <option>Categoria</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <div className="sec8-card-container">
              <article className="transition uplift sec8-article sec8-card1">
                <h2 className="fs-600 clr-white">
                  5 estratégias para inovar no seu anúncio
                </h2>
                {/* <p className="fs-200 clr-white">
            {" "}
            Dizem que a universidade são os melhores tempos da nossa vida.
            E, na maioria das vezes, estão correctos. Mas obviamente que é
            também um período de grandes desafios.
          </p> */}
              </article>
              <article className="transition uplift sec8-article sec8-card2">
                <h2 className="fs-600 clr-white">
                  Sobreviver à universidade - um guia completo
                </h2>
                <p className="fs-200 clr-white">
                  {" "}
                  Dizem que a universidade são os melhores tempos da nossa vida.
                  E, na maioria das vezes, estão correctos. Mas obviamente que é
                  também um período de grandes desafios.
                </p>
                <div className="comments">
                  <p>30 de Janeiro de 2022</p>
                  <p>By Unihosts</p>
                </div>
              </article>
              <article className="transition uplift sec8-article sec8-card3">
                <h2 className="fs-600 clr-white">
                  5 regras para ser um ótimo colega de casa
                </h2>
                {/* <p className="fs-200 clr-white">
            {" "}
            Dizem que a universidade são os melhores tempos da nossa vida.
            E, na maioria das vezes, estão correctos. Mas obviamente que é
            também um período de grandes desafios.
          </p> */}
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pg8cards;
