import React, { Component } from "react";
import "./Addstyle.css";
import AddImage from "./AddImage";
import Adress from "./Address";
import Select from "react-select/creatable";
import Sliderbar from "../Sliderbar";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Create Tran Do Anh Khoa
// Date: 25/11/2020

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
  { id: 2, name: "Air-Conditioner"},
  { id: 3, name: "Washing Machine" },
  { id: 4, name: "Television" },
  { id: 5, name: "Parking Space" },
  { id: 4, name: "Balcony" },
  { id: 5, name: "Water Purifier" },
  { id: 4, name: "Microwave" },
  { id: 5, name: "Fridge" },
];


class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Size: "",
      NumberRoom: "",
      NumberPeople: "",
      address: "",
      roomtype: "",
      image:[],
      feature: "",
      genderRules: "",
      describe: "",
      firstprice: "",
      prices: "",
      UserID:'',
      title:''
    };
  }

  postServerRoom = (obj) =>{
    var img=[];
    obj.image.map(async(i)=>{
      img.push(i.name)
      const formData = new FormData()
      formData.append("picture",i)
    // Send image to local
    const res = await fetch("http://localhost:6001/room/picture", {
      method: "POST",
      body: formData
    }).then(res => res.json())
   
    })
    try{
      const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    // Get name image
    this.state.image=img
      this.state.UserID= JSON.parse(localStorage.getItem('user'))
      const body = JSON.stringify(obj); 
       axios.post('http://localhost:6001/room/add',body,config);
      
    }catch(error){
       console.log('error')
    }
}
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
    // if(!this.state.address||!this.state.address.location){
    //   alert('Field address')
    // }
    // else{
    // this.postServerRoom(this.state)
    // }
    this.props.history.push('/')
   
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
              <div className='row'>
              {/* Add address */}
              <div className='col-md-4 order-md-2 mb-4 ' style={{marginTop:'50px'}}>
                <Adress address={this.getAddress.bind(this)} />
              </div>
                <div className='col-md-8 order-md-1'>
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

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">More Describe</label>
                  <textarea
                    className="form-control"
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
              <div className="alert alert-success">
  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
    ×</button>
  <span className="glyphicon glyphicon-ok" /> <strong>Success Message</strong>
  <hr className="message-inner-separator" />
  <p>
    You successfully read this important alert message.</p>
</div>

            </div>
            </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default (Add);
