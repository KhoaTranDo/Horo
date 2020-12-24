import axios from "axios";
import React, { Component } from "react";
import Addroom from "./Addroom/Add";

import ListRoom from '../Profile/ListRoom'
class MainRoom extends Component {
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
          <div className="col-2">
            <div className="list-group" id="list-tab" role="tablist">
              <a
                className="list-group-item list-group-item-action active"
                id="list-profile-list"
                data-toggle="list"
                href="#list-room"
                role="tab"
                aria-controls="profile"
              >
                Room
              </a>
              <a
                className="list-group-item list-group-item-action "
                id="list-room-list"
                data-toggle="list"
                href="#add-room"
                role="tab"
                aria-controls="home"
              >
                 Add new room
              </a>
            </div>
          </div>
          <div className="col-10">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active "
                id="list-room"
                role="tabpanel"
                aria-labelledby="list-room-list"
              >
                <ListRoom/>
                {/* <Demo /> */}
              </div>
              <div
                className="tab-pane fade "
                id="add-room"
                role="tabpanel"
                aria-labelledby="list-room-list"
              >
                <Addroom />
              </div>
            </div>
          </div>
         
            </div>
          </div>
  
    );
  }
}
export default MainRoom;
