import React, {useEffect, useState } from "react";
import axios from 'axios'
function Profile(props) {
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",

  });
  useEffect(() => {
    setData({
      ...data,
      firstname: props.user.firstname,
      lastname: props.user.lastname,
      email: props.user.email,
      phone: props.user.phone,
    });
    console.log(props.user);
  }, [props.user]);

  const Submit = (e) => {
    e.preventDefault();
    const body ={
      id:localStorage.getItem('id'),
      firstname: data.firstname,
      lastname: data.lastname,
      phone:data.phone,
    }
    axios
    .post("http://localhost:6001/account/UpdateProfile", body)
    .then((res)=>{
      document.getElementById("error-Profile").innerHTML =
      res.data.msg;
    })
    .catch((error) => {
      document.getElementById("error-Profile").innerHTML =
        error.response.data.msg;
    });
  };
  const HandleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
    console.log(e.target.value)
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h4>Your Profile</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-4 col-form-label">
                  <p>First name</p>
                </label>
                <div className="col-8">
                  <input
                    id="name"
                    name="firstname"
                    value={data.firstname}
                    placeholder="First Name"
                    className="form-control here"
                    type="text"
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lastname" className="col-4 col-form-label">
                  <p>Last name</p>
                </label>
                <div className="col-8">
                  <input
                    id="lastname"
                    name="lastname"
                    value={data.lastname}
                    placeholder="Last Name"
                    className="form-control here"
                    type="text"
                    onChange={HandleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-4 col-form-label">
                  <p>Email</p>
                </label>
                <div className="col-8">
                  <input
                    id="email"
                    name="email"
                    value={data.email}
                    placeholder="Email"
                    className="form-control here"
                    required="required"
                    type="text"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-4 col-form-label">
                  <p>Phone</p>
                </label>
                <div className="col-8">
                  <input
                    id="phone"
                    name="phone"
                    value={data.phone}
                    placeholder="Phone number"
                    className="form-control here"
                    required="required"
                    type="number"
                    onChange={HandleChange}
                    min="1" max="5"
                  />
                </div>
              </div>
              <p id="error-Profile" style={{ color: "red" }}></p>
              <div className="form-group row">
                <div className="offset-4 col-8">
                  <button
                    name="submit"
                    type="submit"
                    className="btn btn-primary"
                    onClick={Submit}
                  >
                    Update My Profile
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

export default Profile;
