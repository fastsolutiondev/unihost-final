import React, { useState } from "react";
import GoogleLogin from 'react-google-login';

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Pg12form.css";
function Pg12form() {

  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");

  const [givenName, setGivenName] = useState("");
  const [googleId, setGoogleId] = useState("");
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/49`;
    navigate(path);
  };

  const handleLogin = async (res) => {
    if (res.profileObj) {

      setFamilyName(res.profileObj.familyName)
      setGivenName(res.profileObj.givenName)
      setGoogleId(res.profileObj.googleId)
      setEmail(res.profileObj.email)
      let familyname = res.profileObj.familyName
      let givenname = res.profileObj.givenName
      let googleid = res.profileObj.googleId
      let useremail = res.profileObj.email
      console.log(familyname, givenname, googleid, useremail)
      let result = await fetch(
        'http://localhost:5000/register', {
        method: "post",
        body: JSON.stringify({ familyname, givenname, googleid, useremail }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
        alert("Data saved succesfully");
        setEmail("");
        setFamilyName("")
        setGivenName("")
        setGoogleId("")
      }
    }
    else {
      console.log("Register Failed")
    }
  }
  // store returned user somehow

  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-6" id="form-back">
            <div className="modal-header ">
              <div>
                <a href="#" className="modal-title" id="form-links">
                  Iniciar sessão
                </a>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <a id="form-link" href="#" className="modal-title">
                  Registar
                </a>
              </div>
            </div>
            <div className="modal-body">
              <h4>
                Bem-vindo à{" "}
                <a href="" id="head-link">
                  Unihosts.pt
                </a>
              </h4>

              <div className="row mt-4">
                <button
                  onClick={routeChange}
                  id="form-btns"
                  className="btn "
                  type="button"
                >
                  Registar com e-mail
                </button>
              </div>
              <div className="row text-center mt-3">
                <div className="col-5">
                  <hr />
                </div>
                <div className="col-2">
                  <h1>ou</h1>
                </div>
                <div className="col-5">
                  <hr />
                </div>
              </div>
              <div className="row  mb-2">
                <div className="col">
                  <button id="btn-back-fb" className="btn btn-block">
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </button>
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col">

                  <div className="row mt-4 mb-2" >

                    <GoogleLogin
                      clientId="966802598212-fsue9808emu2oqe1rn1e5tjnhimi537g.apps.googleusercontent.com"
                      buttonText="Log in with Google"
                      onSuccess={handleLogin}
                      onFailure={handleLogin}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </div>
              </div>
              <div className="row text-center mt-4 mb-4">
                <p id="text-links">
                  Ao registar-se está a concordar com os nossos{" "}
                  <a className="link-footer" href="">
                    termos e condições
                  </a>{" "}
                  e{" "}
                  <a href="" className="link-footer">
                    política de privacidade
                  </a>{" "}
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Pg12form;
