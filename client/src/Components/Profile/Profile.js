import axios from "axios";
import React, { Component } from "react";
import Demo from '../leesor/Addroom/Add'
class Addroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    const a = axios
      .get(`http://localhost:6001/account/`, "", config)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="row pl-2">
          <div class="col-2">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="home"
              >
                Room Manager
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-feedback"
                role="tab"
                aria-controls="profile"
              >
                Feedback
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile"
              >
                Profile
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages"
              >
                Password
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                Settings
              </a>
            </div>
          </div>
          <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                  <Demo/>
                
              </div>
              <div
                class="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
               
                <div className="col-md-12">
                  {/* Profile */}
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
                              <label
                                htmlFor="name"
                                className="col-4 col-form-label"
                              >
                                <p>First: {this.state.data.firstname}</p>
                              </label>
                              {/* <div className="col-8">
                                <input
                                  id="name"
                                  name="name"
                                  value={this.state.data.firstname}
                                  placeholder="First Name"
                                  className="form-control here"
                                  type="text"
                                />
                              </div> */}
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="lastname"
                                className="col-4 col-form-label"
                              >
                                <p>Last name: {this.state.data.lastname}</p>
                              </label>
                              {/* <div className="col-8">
                                <input
                                  id="lastname"
                                  name="lastname"
                                  value={this.state.data.lastname}
                                  placeholder="Last Name"
                                  className="form-control here"
                                  type="text"
                                />
                              </div> */}
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="email"
                                className="col-4 col-form-label"
                              >
                                 <p>Email: {this.state.data.email}</p>
                              </label>
                              {/* <div className="col-8">
                                <input
                                  id="email"
                                  name="email"
                                  value={this.state.data.email}
                                  placeholder="Email"
                                  className="form-control here"
                                  required="required"
                                  type="text"
                                />
                              </div> */}
                            </div>                          
                            <div className="form-group row">
                              <div className="offset-4 col-8">
                                <button
                                  name="submit"
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Update My Profile
                                </button>
                                <button
                                  name="submit"
                                  type="submit"
                                  className="btn btn-primary"
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
                </div>
              </div>
              {/* Profile */}
              <div
                class="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                  <div className="form-group row">
                              <label
                                htmlFor="newpass"
                                className="col-4 col-form-label"
                              >
                                Password
                              </label>
                              <div className="col-8">
                                <input
                                  id="newpass"
                                  name="newpass"
                                  placeholder="New Password"
                                  className="form-control here"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="newpass"
                                className="col-4 col-form-label"
                              >
                                New Password
                              </label>
                              <div className="col-8">
                                <input
                                  id="newpass"
                                  name="newpass"
                                  placeholder="New Password"
                                  className="form-control here"
                                  type="text"
                                />
                              </div>
                            </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                {" "}
                vvvv
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Addroom;
