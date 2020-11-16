import React, { useState } from "react";
import "./loginRegister.css";
import { registerUser } from "../../action/auth";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';
import axios from "axios";

const Register = ({isLoggedIn,registerUser}) => {
	
  let[data,setData] = useState({
    name: '',
    phone: '',
    password: '',
  });
  let[tb,setTb] =useState({
    name: 'Mess Alert',
    phone: 'Mess Alert',
    password: 'Mess Alert',
  });
  let {name,phone,password} = data;  
  if(isLoggedIn) return <Redirect to='/'/>
  
 
  const onchange = (e) => {
    setData({ ...data,[e.target.name]:e.target.value })
    if(e.target.value===''){
        setTb({ ...tb,[e.target.name]:'Mess'})
    }
    else{
      setTb({ ...tb,[e.target.name]:'Mess Alert'})
    }
  };
  const submitData = (e) => {
      e.preventDefault();
    if (
      name === "" &&
      phone === "" &&
      password === ""
    )
   return alert("Empty value");
    else {registerUser(name,phone,password);
        const errms = {
          name: data.name,
          phone: data.phone,
          password: data.password,
        };
        if (isLoggedIn === false) {
      const errormsg =axios
      .post("http://localhost:6001/account/register", errms)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {         
        document.getElementById("error-register").innerHTML=error.response.data.msg
      });
    }
  }
  };

  return (
	  <div className="form-container sign-up-container">

      {/* Register */}
     
        <form action="#" >
          <h1>Create Account</h1>
          <div className="social-container"></div>
          <span>or use your phone number for registration</span>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => onchange(e)}
            name="name"
          />
          <span className={tb.name} name="name">Vui lòng nhập Tên </span>
          <input
            type="number"
            className="number"
            placeholder="Phone Number"
            onChange={(e) => onchange(e)}
            name="phone"
          />
           <span className={tb.phone} name="phone">Vui lòng nhập số điện thoại </span>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => onchange(e)}
            name="password"
          />
           <span className={tb.password} name="password">Vui lòng nhập mật khẩu</span>
           <p id="error-register"></p>
           <br/>
          <button onClick={(e) => submitData(e)}>Sign Up</button>
        </form>
 

      <footer>
        {/* <p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p> */}
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps,{registerUser})(Register);
