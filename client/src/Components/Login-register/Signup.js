import React, { useState } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../action/auth";
import { connect } from "react-redux";
import axios from "axios";
import image1  from './img/img1.jpeg'
const SignUp = ({ isLoggedIn, registerUser }) => {
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  let { firstname, lastname, email, phone, password } = data;
  if (isLoggedIn) return <Redirect to="/" />;

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); 
  };
  const submitData = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      password === ""
    )
      document.getElementById("error-register").innerHTML =
        "Please field all information";
    //   return alert("Empty value");
    else {
      if (!email.includes("@"))
        document.getElementById("error-register").innerHTML =
          "Please enter valid email address.";
      else {
        registerUser(firstname, lastname, email, phone, password);
        if (isLoggedIn === false) {
          document.getElementById(
            "error-register"
          ).innerHTML = localStorage.getItem("error");
        }
      }
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signup-connect">
          <img src={image1} style={{width:'100%'}}></img>
        </div>
        <div className="signup-classic">
          <h1>Create Account</h1>
          {/* <div className="social-container"></div>
          <span>or use your phone number for registration</span> */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => onchange(e)}
                name="firstname"
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div className="col-md-6 mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => onchange(e)}
                name="lastname"
                required
              />
            </div>
          </div>

          <div>
            <label>Email address</label>
            <input
              type="email"
              id="email"
              pattern=".+@globex.com"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => onchange(e)}
              name="email"
              required
            />
          </div>
          <div>
            <label>Phone number</label>
            <input
              type="number"
              className="number form-control"
              placeholder="(+84)"
              onChange={(e) => onchange(e)}
              name="phone"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => onchange(e)}
              name="password"
              required
            />
          </div>
          <p id="error-register" style={{ color: "red" }}></p>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={(e) => submitData(e)}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="account">sign in?</a>
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { registerUser })(SignUp);
