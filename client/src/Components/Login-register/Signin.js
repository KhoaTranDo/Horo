import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../action/auth";

const Signin = ({ isLoggedIn, loginUser }) => {
  let [data, setData] = useState({
    email: "",
    password: "",
    inCheck: false,
  });
  let [tb] = useState({
    email: "Mess Alert",
    password: "Mess Alert",
    messEmail: "",
    messPassword: "",
  });
  if (isLoggedIn === true) {
    return <Redirect to="/" />;
  }

  let { email, password } = data;

  const errms = {
    email: data.email,
    password: data.password,
  };
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const loginAccount = (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "")
      document.getElementById("error-login").innerHTML =
        "Please field all information";
    else {
      if (!data.email.includes("@"))
        document.getElementById("error-login").innerHTML =
          "Please enter valid email address.";
      else {
        if (data.email !== "" && data.password !== "") {
          // errormsg();

          loginUser(email, password);
          if (isLoggedIn === false) {
            axios
              .post("http://localhost:6001/account/login", errms)
              .then((response) => {})
              .catch((error) => {
                document.getElementById("error-login").innerHTML =
                  error.response.data.msg;
              });
          }
        }
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup-connect"></div>
      <div className="signup-classic">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email "
            onChange={(e) => onchange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            onChange={(e) => onchange(e)}
          />
        {/* <a href="/#">Forgot your password?</a> */}
        <p className="forgot-password text-left">
          <a href="/register">Sign up</a>
        </p>
        </div>
        <span name="name">{tb.mess}</span>
        <p id="error-login" style={{ color: "red" }}></p>
        <button
          onClick={(e) => loginAccount(e)}
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { loginUser })(Signin);
