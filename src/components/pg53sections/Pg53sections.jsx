import React, { useState } from "react";
import "./Pg53sections.css";
function Pg53sections() {


  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-4 mt-4">
              <ul>
                <li>
                  {" "}
                  <i className="fa-solid fa-file-lines mb-2"></i> Ajuda para os
                  Estudantes
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-file-lines mt-2"></i> Ajuda para os
                  Estudantes
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul>
                <li>
                  {" "}
                  <h4>Contactos</h4>
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-phone mt-4"></i> +351 914 626 616
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-envelope mt-4"></i> info@unihosts.pt
                </li>
              </ul>
            </div>
            <div className="m-4">
              <span>
                <i className="fa-brands fa-facebook m-2"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram m-2"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter m-2"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <form>
              <h4>Deixe-nos uma mensagem!</h4>
              <div className="mb-3 mt-4">
                <label for="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-4 mt-4">
                <label for="exampleFormControlTextarea1 mb-2">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button id="btn-form" className="btn mb-4" onClick={() => {
                alert("Mensagem enviada com sucesso!")
                const sendMail = async () => {
                  try {
                    await fetch(
                      'http://localhost:5000/contactUs', {
                      method: "post",
                      body: JSON.stringify({ useremail: email, message: message }),
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    })
                    result = await result.json();
                    console.log("result", result);
                    alert("Mensagem enviada com sucesso!")
                  } catch (error) {
                    alert("Erro ao enviar mensagem!")
                  }
                }
                sendMail();
              }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Pg53sections;
