import React, { Component } from "react";

const roomtype = [
  { id: 1,value:'phong-thue', name: "room" },
  { id: 2,value:'phong-ghep', name: "Full House" },
  { id: 3,value:'phong-thue', name: "Bedsit" },
  { id: 4,value:'phong-thue' },
  { id: 5,value:'phong-thue' },
];
class Caterology extends Component {
  render() {
    return (
      <>
      {/* List Caterogy room */}
        <div className="list-group">
          {roomtype.map((room,index) => (
            <a key={index} href={'./rooms/'+room.value} className="list-group-item">
              {room.name}
            </a>
          ))}
        </div>
      </>
    );
  }
}

export default Caterology;
