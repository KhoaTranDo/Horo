import React, { useState } from "react";
import "./style.css";
import { Provider } from "react-redux";
import store from "../../store";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../action/auth";

const Signin = ({ isLoggedIn, loginUser }) => {
    let [data, setData] = useState({
        phone: "",
        password: "",
        inCheck:false,
    });
    let [tb, setTb] = useState({
        phone: "Mess Alert",
        password: "Mess Alert",
        mess: "",
    });
    if (isLoggedIn === true) {
        return <Redirect to = "/" /> ;
    }

    let { phone, password } = data;

    const errms = {
        phone: data.phone,
        password: data.password,
    };

    const onchange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
        if (e.target.value === "") {
            setTb({...tb, phone: "Mess" });
        } else {
            setTb({...tb, phone: "Mess Alert" });
        }
    };
    const loginAccount = (e) => {
        e.preventDefault();

        if (data.password === "") {
            setTb({...tb, password: "Mess" });
        } else {
            setTb({...tb, password: "Mess Alert" });
        }

        if (data.phone !== "" && data.password !== "") {
            // errormsg();

            loginUser(phone, password);
            if (isLoggedIn === false) {
                const errormsg = axios
                    .post("http://localhost:6001/account/login", errms)
                    .then((response) => {
                    })
                    .catch((error) => {
                        document.getElementById("error-login").innerHTML=
                            error.response.data.msg;
                    });
            }
        }
    };


  return (
    <div className="container" id="container">
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="Phone number"
            onChange={(e) => onchange(e)}
          />
           <span className={tb.phone} name="name">
          Vui lòng nhập số điện thoại{" "}
        </span>
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
           <span className={tb.password} name="name">
          Vui lòng nhập mật khẩu{" "}
        </span>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            {/* <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label> */}
          </div>
        </div>
        <span name="name">{tb.mess}</span>
        <p id="error-login"></p>
        <button onClick={(e) => loginAccount(e)} className="btn btn-primary btn-block">
          Submit
        </button>
        <a href="/#">Forgot your password?</a>
          <p className="forgot-password text-left">
            Forgot <a href="/register">Sign up</a>
          </p>
        
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, {loginUser})(Signin);