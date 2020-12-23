import React, { Component } from "react";
import "./Addstyle.css";
import AddImage from "./AddImage";
import Adress from "./Address";
import Select from "react-select/creatable";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { extend } from "../../typeRoom";
import { TypeRoom } from "../../typeRoom";
import { GenderRules } from "../../typeRoom";
// Create Tran Do Anh Khoa
// Date: 25/11/2020

const roomtype = TypeRoom.slice(1);

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: "",
      NumberRoom: "",
      NumberPeople: "",
      address: "",
      roomtype: "",
      image: [],
      feature: "",
      genderRules: "",
      describe: "",
      prices: "",
      UserID: "",
      title: "",
    };
  }

  postServerRoom = (obj) => {
    var img = [];
    obj.image.map(async (i) => {
      img.push(i.name);
      const formData = new FormData();
      formData.append("picture", i);
      // Send image to local
      const res = await fetch("http://localhost:6001/room/picture", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
    });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Get name image
      this.state.image = img;
      this.state.UserID = JSON.parse(localStorage.getItem("user"));
      const body = JSON.stringify(obj);
      axios.post("http://localhost:6001/room/add", body, config);
    } catch (error) {
      console.log("error");
    }
  };
  // Action
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name + ":" + e.target.value);
  };
  handleType = (selectedOption) => {
    this.setState({ roomtype: selectedOption.name });
  };
  handleGender = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ genderRules: selectedOption.value });
  };
  handleFeature = (selectedOption) => {
    if (selectedOption === null) {
      this.setState({ feature: "" });
    } else {
      this.setState({ feature: selectedOption });
    }
  };
  getAddress = (item) => {
    this.setState({ address: item });
  };
  fileUpload = (files) => {
    console.log(files[0]);
  };
  postRoom = () => {
    if (!this.state.address || !this.state.address.location) {
      alert("Field address");
    } else {
      this.postServerRoom(this.state);
      this.props.history.push("/");
    }
  };
  render() {
    //Remove Scroll input Number
    var inputTypeNumbers = document.querySelectorAll("input[type=number]");
    for (var a = 0; a < inputTypeNumbers.length; a++) {
      inputTypeNumbers[a].onwheel = function (event) {
        event.target.blur();
      };
    }
    if (localStorage.getItem("user") === null) {
      alert("Login before use this function");
      return <Redirect to="/account" />;
    } else {
      return (
        // Div Main

        <main>
          <div className="container-fluid">
            {/* Add image */}
            <div className="row">
              {/* Add address */}
              <div
                className="col-md-4 order-md-2 mb-4 "
                style={{ marginTop: "50px" }}
              >
                <Adress
                  address={this.getAddress.bind(this)}
                  price={this.state.prices}
                />
              </div>
              <div className="col-md-8 order-md-1">
                <div>
                  <AddImage image={this.state.image} />
                </div>
                {/* Add place detail */}
                <div>
                  {/* Title */}
                  <span>Title</span>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={this.handleChange}
                  ></input>
                  {/* AreaArea */}
                  <span>Area</span>
                  <input
                    type="number"
                    name="Size"
                    className="number form-control"
                    onChange={this.handleChange}
                    min="0"
                  ></input>
                  {/* Tyle of room */}
                  <span>Types of residential rental</span>
                  <ul>
                    <Select
                      name="roomtype"
                      options={roomtype}
                      getOptionLabel={(x) => x.name}
                      getOptionValue={(x) => x.name}
                      onChange={this.handleType}
                    />
                  </ul>
                  {/* Number of room */}
                  <span>Room Number</span>
                  <input
                    type="number"
                    name="NumberRoom"
                    className="number form-control"
                    onChange={this.handleChange}
                    max="10"
                    min="0"
                  ></input>
                  {/* People */}
                  <span>Capacity</span>
                  <input
                    type="number"
                    name="NumberPeople"
                    className="number form-control"
                    onChange={this.handleChange}
                    max="10"
                    min="0"
                  ></input>

                  <span>Features of Place</span>
                  <Select
                    closeMenuOnSelect={false}
                    isMulti
                    name="feature"
                    options={extend}
                    className="basic-multi-select"
                    getOptionLabel={(x) => x.name}
                    getOptionValue={(x) => x.name}
                    onChange={this.handleFeature}
                    classNamePrefix="select"
                  />
                </div>

                {/* Rental conditions */}
                <div>
                  <span>Gender</span>
                  <Select options={GenderRules} onChange={this.handleGender} />

                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      More Describe
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="describe"
                      onChange={this.handleChange}
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                </div>
                {/* price:*/}
                <div>
                  <span>Prices/month</span>
                  <input
                    type="number"
                    name="prices"
                    onChange={this.handleChange}
                    className="form-control"
                  ></input>
                </div>
                <button
                  className="btn btn-outline-primary"
                  onClick={this.postRoom}
                >
                  Post this Room
                </button>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}

export default Add;
