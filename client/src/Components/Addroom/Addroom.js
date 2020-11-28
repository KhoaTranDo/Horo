import React, { Component } from "react";
import "./Addstyle.css";
import AddImage from "./AddImage";
import Adress from "./Address";
import Select from "react-select/creatable";
import Sliderbar from "./Sliderbar";
import Feature from "./Feature";

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
class Addroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      city: 0,
    };
  }
  // state = {
  //   selectedFile: null,
  //   city:'',
  // };
  fileUpload = (files) => {
    console.log(files[0]);
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
              <div style={{width:'100%',height:'auto'}}>
                <Adress />
              </div>
              {/* Add address on Map */}
              <div></div>

              {/* Add place detail */}
              <div>
                {/* AreaArea */}
                <span>Area</span>
                <input type="number"></input>
                {/* Tyle of room */}
                <span>Types of residential rental</span>
                <ul>
                  <Select
                    options={roomtype}
                    getOptionLabel={(x) => x.name}
                    getOptionValue={(x) => x.name}
                  />
                </ul>
                {/* Number of room */}
                <span>Number of Room</span>
                <input type="number"></input>
                {/* People */}
                <span>Quanlity</span>
                <input type="number"></input>
                <span>Features of Place</span>
                <Feature />
              </div>

              {/* Rental conditions */}
              <div>
                <span>Gender</span>
                <Select options={options} />

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">More Describe</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{resize:'none'}}
                  ></textarea>
                </div>
              </div>
              {/* price:*/}
              <div>
                {/* Radio button free */}
                <label style={{ display: "flex" }}>
                  <span>WIFI Price </span>
                  <input type="number"></input>
                  <input type="checkbox" name="Wifi" value="Free" />
                  Free
                </label>
                <br />
                <span>First Prices</span>
                <input type="number"></input>
                <span>Prices/month</span>
                <input type="number"></input>
              </div>
              <button className="btn btn-outline-primary">
                Post this Room
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default Addroom;
