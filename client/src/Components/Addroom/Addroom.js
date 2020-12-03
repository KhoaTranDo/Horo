import React, { Component } from "react";
import "./Addstyle.css";
import AddImage from "./AddImage";
import Adress from "./Address";
import Select from "react-select/creatable";
import Sliderbar from "./Sliderbar";
import axios from 'axios';
//import {postRoom} from '../../action/AddRoom'
import { connect } from "react-redux";

const roomtype = [
  { id: 1, name: "room" },
  { id: 2, name: "Full House" },
  { id: 3, name: "Bedsit" },
  { id: 4, name: "Dorm" },
  { id: 5, name: "Flat" },
];
const options = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];
const extend = [
  { id: 1, name: "Wifi" },
  { id: 2, name: "Show" },
  { id: 3, name: "Kitchen" },
  { id: 4, name: "Dorm" },
  { id: 5, name: "Flat" },
];

class Addroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: "",
      NumberRoom: "",
      NumberPeople: "",
      address: "",
      roomtype: "",
    //  Wifi: "",
      feature: "",
      genderRules: "",
      describe: "",
      firstprice: "",
      prices: "",
    };
  }
  postServerRoom = (obj) =>{
    console.log(obj);
    try{
      const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
       const body = JSON.stringify(obj); 
       console.log(body)
      axios.post('http://localhost:6001/room/add',body,config);

        // dispatch(loadUser());
        
    }catch(error){
       console.log('error')
    }
}
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
   if(selectedOption === null){
    this.setState({ feature: '' });
   }else{
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
    if(!this.state.address||!this.state.address.location){
      alert('Field address')
    }
    console.log(this.state);
 
    this.postServerRoom(this.state)
  };
  render() {
    return (
      // Div Main
      <div id="layoutSidenav">
        {/* div navbar left */}
        <Sliderbar />
        {/* div containt */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              {/* Add image */}
              <div>
                <AddImage />
              </div>
              {/* Add address */}
              <div style={{ width: "100%", height: "auto" }}>
                <Adress address={this.getAddress.bind(this)} />
              </div>
              {/* Add address on Map */}
              <div></div>

              {/* Add place detail */}
              <div>
                {/* AreaArea */}
                <span>Area</span>
                <input
                  type="number"
                  name="Size"
                  className="form-control"
                  onChange={this.handleChange}
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
                <span>Number of Room</span>
                <input
                  type="number"
                  name="NumberRoom"
                  className="form-control"
                  onChange={this.handleChange}
                ></input>
                {/* People */}
                <span>Quanlity</span>
                <input
                  type="number"
                  name="NumberPeople"
                  className="form-control"
                  onChange={this.handleChange}
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
                <Select options={options} onChange={this.handleGender} />

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">More Describe</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name='describe'
                    onChange={this.handleChange}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>
              {/* price:*/}
              <div>
                {/* Radio button free */}
                {/* <label style={{ display: "flex" }}>
                  <span>WIFI Price </span>
                  <input
                    type="number"
                    className="form-control"
                    name="Wifi"
                    onChange={this.handleChange}
                  ></input>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="Wifi"
                      onChange={this.handleChange}
                      value="Free"
                      id="defaultCheck1"
                    ></input>
                    <label class="form-check-label" for="defaultCheck1">
                      Free
                    </label>
                  </div>
                </label> */}

                <br />
                <span>First Prices</span>
                <input
                  type="number"
                  name="firstprice"
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
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
          </main>
        </div>
      </div>
    );
  }
}

export default (Addroom);
