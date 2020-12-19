import axios from "axios";
import React, { Component } from "react";
import Demo from "../leesor/Addroom/Add";
import ChangePassword from "./ChangePassword";
import Profile from "./Profile";
import ListRoom from './ListRoom'
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
    axios
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
                id="list-profile-list"
                data-toggle="list"
                href="#profile"
                role="tab"
                aria-controls="profile"
              >
                Profile
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#Changepassword"
                role="tab"
                aria-controls="messages"
              >
                Password
              </a>
              <a
                class="list-group-item list-group-item-action "
                id="list-room-list"
                data-toggle="list"
                href="#list-room"
                role="tab"
                aria-controls="home"
              >
                Room Manager
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-feedback-list"
                data-toggle="list"
                href="#list-feedback"
                role="tab"
                aria-controls="profile"
              >
                Feedback
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
                class="tab-pane fade  "
                id="list-room"
                role="tabpanel"
                aria-labelledby="list-room-list"
              >
                <ListRoom/>
                {/* <Demo /> */}
              </div>
              <div
                class="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <div className="col-md-12">
                  {/* Profile */}
                  <Profile user={this.state.data} />
                </div>
              </div>
              {/* Profile */}
              <div
                class="tab-pane fade"
                id="Changepassword"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <div className="card">
                  <div className="card-body">
                    {/* Change Password */}
                    <ChangePassword />
                    <div
                      class="tab-pane fade"
                      id="list-settings"
                      role="tabpanel"
                      aria-labelledby="list-settings-list"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Addroom;
