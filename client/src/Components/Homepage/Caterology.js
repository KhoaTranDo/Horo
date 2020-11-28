import React, { Component } from "react";

const roomtype = [
  { id: 1, name: "room" },
  { id: 2, name: "Full House" },
  { id: 3, name: "Bedsit" },
  { id: 4, name: "Dorm" },
  { id: 5, name: "Flat" },
];
class Caterology extends Component {
  render() {
    return (
      <>
      {/* List Caterogy room */}
        <div className="list-group">
          {roomtype.map((room,index) => (
            <a key={index} href={'./'+room.id} className="list-group-item">
              {room.name}
            </a>
          ))}
        </div>
      </>
    );
  }
}

export default Caterology;
