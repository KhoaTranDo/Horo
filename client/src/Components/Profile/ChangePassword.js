import React, { useState } from "react";
import axios from "axios";
export default function ChangePassword(props) {
  let [newPassword, setnewPassword] = useState(null);
  let [passwordComfirm, setpasswordComfirm] = useState(null);

  const HandleChange = (e) => {
    if (e.target.name === "newPassword") setnewPassword(e.target.value);
    if (e.target.name === "passwordComfirm") setpasswordComfirm(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    if(newPassword!==passwordComfirm){
      document.getElementById("error-changPassword").innerHTML =
      'Password confirm is not same'
    }
    else{
    const body = {
      id: localStorage.getItem("id"),
      password: newPassword,
    };
    axios
      .post("http://localhost:6001/account/ChangePassword", body)
      .then((res)=>{
        document.getElementById("error-changPassword").innerHTML =
        res.data.msg;
      })
      .catch((error) => {
        document.getElementById("error-changPassword").innerHTML =
          error.response.data.msg;
      });
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h4>Change Password</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group row">
                <label htmlFor="newPassword" className="col-4 col-form-label">
                  New Password
                </label>
                <div className="col-8">
                  <input
                    id="newPassword"
                    name="newPassword"
                    placeholder="Password"
                    onChange={HandleChange}
                    className="form-control here"
                    type="password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="passwordComfirm"
                  className="col-4 col-form-label"
                >
                  New Password Confirm
                </label>
                <div className="col-8">
                  <input
                    id="passwordComfirm"
                    name="passwordComfirm"
                    placeholder="New Password"
                    onChange={HandleChange}
                    className="form-control here"
                    type="password"
                  />
                </div>
              </div>
              <p id="error-changPassword" style={{ color: "red" }}></p>
              <div className="form-group row">
                <div className="offset-4 col-8">
                  <button
                    name="submit"
                    className="btn btn-primary"
                    onClick={Submit}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
