// import axios from "axios";
import React, { Component } from "react";
// import { ThemeProvider } from "react-bootstrap";
 import img1 from "./images/haichau.jpg";
 import img2 from "./images/nguhanhson.jpg";
 import img3 from './images/details-4.jpeg';
 import img4 from './images/details-1.jpeg'
 import img5 from './images/details-3.jpeg';
 import img6 from './images/details-2.jpeg'
const roomtype = [
  { id: 0, image:img1,  value: "all", name: "All of Type" },
  { id: 1,  image:img2, value: "room", name: "room" },
  { id: 2,  image:img3, value: "Full House", name: "Full House" },
  { id: 3,  image:img4, value: "Bedsit", name: "Bedsit" },
  { id: 4,  image:img5, value: "Dorm", name: "Dorm" },
  { id: 5,  image:img6, value: "Flat", name: "Flat" },
];
class Caterology extends Component {
 
  caterology = (e) => {
    if (e.target.name !== "all") this.props.typeroom(e.target.name);
    else this.props.typeroom(null);
  };
  render() {
    return (
      <div className="caterology">
        {/* List Caterogy room */}
        {roomtype.map((room, index) => (
      
          <a key={index} onClick={this.caterology} name={room.value}>
        <button><img src={room.image} style={{width:'150px',height:'150px',zIndex:'-1'}} alt="my image" name={room.value} onClick={this.caterology} /></button>
            <span style={{zIndex:'3'}} onClick={this.caterology}>{room.name}</span>
          </a>
      
        ))}
      </div>
    );
  }
}

export default Caterology;
