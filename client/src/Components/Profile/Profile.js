import React, { Component } from "react";
import "./Addstyle.css";
import AddImage from "./AddImage";

const roomtype = [
  { id: 1, name: "room" },
  { id: 2, name: "Full House" },
  { id: 3, name: "Bedsit" },
  { id: 4, name: "Dorm" },
  { id: 5, name: "Flat" },
];
const extend = [
  { id: 1, name: "Wifi" },
  { id: 2, name: "Show" },
  { id: 3, name: "Kitchen" },
  { id: 4, name: "Dorm" },
  { id: 5, name: "Flat" },
];
class Addroom extends Component {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (e) => {};
  fileUpload = (files) => {
    console.log(files[0]);
  };

  render() {
    return (
      // Div Main
      <div>
        {/* div navbar left */}
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>

        {/* div containt */}
        <div className="containt">
          {/* Add image */}
          <div>
            <AddImage />
          </div>
          {/* Add address */}
          <div>
            <h1>Address</h1>
            <input type="text"></input>
            <h2>City</h2>
            <input type="text"></input>
            <h2>Quan Huyen</h2>
            <input type="text"></input>
            <h2>Phuong Xa</h2>
            <input type="text"></input>
            <h2>Ten Duong</h2>
            <input type="text"></input>
            <h2>So Nha</h2>
            <input type="text"></input>
          </div>
          {/* Add address on Map */}
          <div></div>

          {/* Add place detail */}
          <div>
            {/* Tyle of room */}
            <ul>
              <div class="btn-group">
                <select class="custom-select" id="inputGroupSelect01">
                  {roomtype.map((room) => (
                    <option value={"./" + room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
            </ul>
            {/* Number of room */}
            <span>Number of Room</span>
            <input type="number"></input>
            {/* People */}
            <input type="number"></input>
            <span>Area</span>
            <input type="text"></input>
          </div>

          {/* Rental conditions */}
          <div>
            <span>Gender</span>
            <form>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">All member</label>
            </form>
            <span>Feature</span>
            <div>
              <label class="waves-effect waves-light btn btn-flat">
                <input type="checkbox" name="countries[]" value="african" />
                African
              </label>
              <label class="waves-effect waves-light btn btn-flat">
                <input type="checkbox" name="countries[]" value="british" />
                British
              </label>
              <label class="waves-effect waves-light btn btn-flat">
                <input type="checkbox" name="countries[]" value="french" />
                French
              </label>
              <label class="waves-effect waves-light btn btn-flat">
                <input type="checkbox" name="countries[]" value="german" />
                German
              </label>
            </div>
          </div>
          {/* price:*/}
          <div>
            <span>Prices</span>
            {/* Radio button free */}
            <span>Prices</span>
            <span>Prices</span>
            <span>Prices</span>
            <span>First Prices</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Addroom;
