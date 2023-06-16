import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Styles/style.css";
import axios from "axios";

function Registartion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleReset = (e) => {
    setName("");
    setPassowrd("");
    setEmail("");
    setPhoneNo("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(name, email, passowrd, phoneNo);
    if(name=="" || email=="" || passowrd=="" || phoneNo==""){
      alert("Fill all Fields like email, password, name & phone no !!");
      return;
    }
    const url = `https://localhost:7255/api/Registartion/Registration`;
    const data = {
      name: name,
      email: email,
      password: passowrd,
      phoneNo: phoneNo,
      isActive: 0,
      isApproved: 0,
      UserType:""
    };
    axios
      .post('https://localhost:7255/api/Registartion/Registration', data)
      .then((result) => {
        const dt = result.data;
        console.log(dt);
        alert(dt.statusMessage            );
        handleReset();
      })
      .catch((error) => {
        console.log(error);
        alert(error.statusMessage);
      });
  };

  // const handleLogin=()=>{
  //   window.location.url="/";
  // }
  const handleLogin = () => {
    // Redirect to the login page
    window.location.href = "/";
  };
  

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Student registration form
                    </h3>

                    <div className="row">
                      <div className="col-md">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="form-label" for="form3Example1m">
                            Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label">Email ID</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        value={passowrd}
                        onChange={(e) => setPassowrd(e.target.value)}
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="txet"
                        id="form3Example97"
                        className="form-control form-control-lg"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                      <label className="form-label">Phone No</label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        onClick={() => handleReset()}
                      >
                        Reset all
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        onClick={(e) => handleSave(e)}
                      >
                        Submit form
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-lg ms-2"
                        onClick={(e) => handleLogin(e)}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registartion;
