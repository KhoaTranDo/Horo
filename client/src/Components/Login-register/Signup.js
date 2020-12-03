import React, { useState } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../action/auth";
import { connect } from "react-redux";
import axios from "axios";

const SignUp = ({ isLoggedIn, registerUser }) => {
  let [data, setData] = useState({
    firstname: "",
    lastname:"",
    email:"",
    phone: "",
    password: "",
  });
  let [tb, setTb] = useState({
    firstname: "Mess Alert",
    lastname: "Mess Alert",
    email: "Mess Alert",
    phone: "Mess Alert",
    password: "Mess Alert",
  });
  let { firstname,lastname,email, phone, password } = data;
  if (isLoggedIn) return <Redirect to="/" />;

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.value === "") {
      setTb({ ...tb, [e.target.name]: "Mess" });
    } else {
      setTb({ ...tb, [e.target.name]: "Mess Alert" });
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    if (firstname === "" && lastname==="" &&email==="" && phone === "" && password === "")
      return alert("Empty value");
    else {
      registerUser(firstname,lastname,email,phone,password);
      const errms = {
        firstname: data.firstname,
        lastname:data.lastname,
        email:data.email,
        phone: data.phone,
        password: data.password,
      };
      // if (isLoggedIn === false) {
      //   const errormsg = axios
      //     .post("http://localhost:6001/account/register", errms)
      //     .then((response) => {
      //     })
      //     .catch((error) => {
      //       document.getElementById("error-register").innerHTML =
      //         error.response.data.msg;
      //     });
      // }
    }
  };

  return (
    <>
    <div className="container" id="container">
      <form>
        <h1>Create Account</h1>
        {/* <div className="social-container"></div>
          <span>or use your phone number for registration</span> */}
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => onchange(e)}
            name="firstname"
          />
            <span className={tb.firstname} name="name">Vui lòng nhập Tên </span>
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input 
            type="text" 
            className="form-control"
            placeholder="Last name" 
            onChange={(e) => onchange(e)}
             name="lastname"
            />
            <span className={tb.lastname} name="name">Vui lòng nhập Tên </span>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            id='email'
            pattern=".+@globex.com"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => onchange(e)}
            name="email"
          />
          <span className={tb.email} name="phone">Vui lòng nhập địa chỉ mail </span>
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input
            type="number"
            className="number"
            placeholder="(+84)"
            onChange={(e) => onchange(e)}
            name="phone"
          />
           <span className={tb.phone} name="phone">Vui lòng nhập số điện thoại </span>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => onchange(e)}
            name="password"
          />
            <span className={tb.password} name="password">Vui lòng nhập mật khẩu</span>
        </div>
        <p id="error-register"></p>
        <button type="submit" className="btn btn-primary btn-block" onClick={(e) => submitData(e)}>
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="account">sign in?</a>
        </p>
      </form>
    </div>
    <div>

    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { registerUser })(SignUp);
// import React, { useState } from "react";
// import "./style.css";
// import { Redirect } from "react-router-dom";
// import { registerUser } from "../../action/auth";
// import { connect } from "react-redux";
// import axios from "axios";

// const SignUp = ({ isLoggedIn, registerUser }) => {
//   let [data, setData] = useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     phone: "",
//     password: "",
//   });
//   let [tb, setTb] = useState({
//     name: "Mess Alert",
//     phone: "Mess Alert",
//     password: "Mess Alert",
//   });
//   let {firstname, lastname,email, phone, password } = data;
//   if (isLoggedIn) return <Redirect to="/" />;

//   const onchange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     if (e.target.value === "") {
//       setTb({ ...tb, [e.target.name]: "Mess" });
//     } else {
//       setTb({ ...tb, [e.target.name]: "Mess Alert" });
//     }
//   };
//   const submitData = (e) => {
//     e.preventDefault();
//     if (firstname === "" &&lastname === "" &&email === "" &&  phone === "" && password === "")
//       return alert("Empty value");
//     else {
//       registerUser(firstname,lastname,email, phone, password);
//       const errms = {
//         firstname:data.firstname,
//         lastname: data.lastname,
//         email:data.email,
//         phone: data.phone,
//         password: data.password,
//       };
//       if (isLoggedIn === false) {
//         const errormsg = axios
//           .post("http://localhost:6001/account/register", errms)
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((error) => {
//             document.getElementById("error-register").innerHTML =
//               error.response.data.msg;
//           });
//       }
//     }
//   };

//   return (
//     <>
//     <div className="container" id="container">
//       <form>
//         <h1>Create Account</h1>
//         {/* <div className="social-container"></div>
//           <span>or use your phone number for registration</span> */}
//         <div className="form-group">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//             onChange={(e) => onchange(e)}
//             name="firstname"
//           />
//             <span className={tb.name} name="name">Vui lòng nhập Tên </span>
//         </div>

//         <div className="form-group">
//           <label>Last name</label>
//           <input 
//             type="text" 
//             className="form-control"
//             placeholder="Last name" 
//             onChange={(e) => onchange(e)}
//             name="lastname"
//             />
//              <span className={tb.name} name="name">Vui lòng nhập Tên </span>
//         </div>

//         <div className="form-group">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => onchange(e)}
//             name="email"
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone number</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="(+84)"
//             onChange={(e) => onchange(e)}
//             name="phone"
//           />
//            <span className={tb.phone} name="phone">Vui lòng nhập số điện thoại </span>
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => onchange(e)}
//             name="password"
//           />
//             <span className={tb.password} name="password">Vui lòng nhập mật khẩu</span>
//         </div>
//         <p id="error-register"></p>
//         <button type="submit" className="btn btn-primary btn-block" onClick={(e) => submitData(e)}>
//           Sign Up
//         </button>
//         <p className="forgot-password text-right">
//           Already registered <a href="account">sign in?</a>
//         </p>
//       </form>
//     </div>
//     <div>

//     </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   isLoggedIn: state.isLoggedIn,
// });

// export default connect(mapStateToProps, { registerUser })(SignUp);
