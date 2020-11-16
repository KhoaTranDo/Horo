import React, { useState } from "react";
import "./loginRegister.css";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../action/auth";
import { connect } from "react-redux";
import axios from "axios";

const Login = ({ isLoggedIn, loginUser }) => {
  let [data, setData] = useState({
    phone: "",
    password: "",
  });
  let [tb, setTb] = useState({
    phone: "Mess Alert",
    password: "Mess Alert",
    mess: "",
  });
  if (isLoggedIn === true) {
    return <Redirect to="/Detail" />;
  }

  let { phone, password } = data;

  const errms = {
    phone: data.phone,
    password: data.password,
  };

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.value === "") {
      setTb({ ...tb, phone: "Mess" });
    } else {
      setTb({ ...tb, phone: "Mess Alert" });
    }
  };
  const loginAccount = (e) => {
    e.preventDefault();

    if (data.password === "") {
      setTb({ ...tb, password: "Mess" });
    } else {
      setTb({ ...tb, password: "Mess Alert" });
    }

    if (data.phone !== "" && data.password !== "") {
      // errormsg();
      
      loginUser(phone, password);
      if (isLoggedIn === false) {
        const errormsg =axios
          .post("http://localhost:6001/account/login", errms)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {         
            document.getElementById("error-login").innerHTML=error.response.data.msg
          });
       
      }
    }
  };

  return (
    <div className="form-container sign-in-container ">
      <form action="/#">
        <h1>Sign in</h1>
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          onChange={(e) => onchange(e)}
        />
        <span className={tb.phone} name="name">
          Vui lòng nhập số điện thoại{" "}
        </span>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => onchange(e)}
        />
        <span className={tb.password} name="name">
          Vui lòng nhập mật khẩu{" "}
        </span>
        <span name="name">{tb.mess}</span>
        <a href="/#">Forgot your password?</a>
        <p id="error-login"></p>
        <button onClick={(e) => loginAccount(e)}>Sign In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { loginUser })(Login);
