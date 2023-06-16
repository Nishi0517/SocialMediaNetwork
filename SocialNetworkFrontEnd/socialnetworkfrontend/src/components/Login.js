import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Styles/style.css";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  

  const handleReset = (e) => {
   
    setPassowrd("");
    setEmail("");
   
  };

  const handleLogin = (e) => {
    // e.preventDefault();
  
    // const url = `https://localhost:7255/api/Registartion/Login`;
    const data = {
        "id": 0,
        "name": "string",
        "email": email,
        "password": passowrd,
        "phoneNo": "string",
        "isActive": 0,
        "isApproved": 0,
        "UserType":""
    };
    axios
      .post('https://localhost:7255/api/Registartion/Login', data)
      .then((result) => {
        const dt = result.data;
        if(dt.statusCode===200){
            if(email==="admin@gmail.com" && passowrd==="admin"){
                localStorage.setItem("loggedEmail",email);
                localStorage.setItem("username",result.data.registration.name);    
                alert(dt.statusMessage);
                // Assuming login is successful, navigate to AdminDashboard
                //history.push("/admindashboard");
                window.location.href="/admindashboard";
                console.log("page of admin")
            }
            else{
                localStorage.setItem("loggedEmail",email);
                localStorage.setItem("username",result.data.registration.name);
                if(dt.registration.userType==="STAFF")
                    history.push("/staffdashboard");
                else
                window.location.href="/userdashboard";
            }
        }
        else{
            alert(dt.statusMessage);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.statusMessage);
      });
  };

  const handleRegister=()=>{
    window.location.href="/registartion";
  }
  
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
  
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3"
               className="form-control form-control-lg"
                placeholder="Enter a valid email address" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />
              <label className="form-label">Email address</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" 
                value={passowrd}
                onChange={(e)=>setPassowrd(e.target.value)}
                />
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox"
                 value="" id="form2Example3" />
                <label className="form-check-label">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg"
                style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                onClick={(e)=>handleLogin(e)}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                  className="link-danger" onClick={(e)=>handleRegister(e)}>Register</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      {/* <!-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      {/* <!-- Copyright -->
  
      <!-- Right --> */}
      <div>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#!" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      {/* <!-- Right --> */}
    </div>
  </section>
  );
}

export default Login;
