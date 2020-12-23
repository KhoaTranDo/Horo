import React, { Component } from "react";
import {TypeRoom} from "../typeRoom";

class Caterology extends Component {
  caterology = (e) => {
    if (e.target.name !== "all") this.props.typeroom(e.target.name);
    else this.props.typeroom(null);
  };
  render() {
    return (
      <div className="caterology">
        {/* List Caterogy room */}
        {TypeRoom.map((room, index) => (
          <a key={index} onClick={this.caterology} name={room.value}>
            <button>
              <img
                src={room.image}
                style={{ width: "150px", height: "150px", zIndex: "-1" }}
                alt="my image"
                name={room.value}
                onClick={this.caterology}
              />
            </button>
            <span style={{ zIndex: "3" }} onClick={this.caterology}>
              {room.name}
            </span>
          </a>
        ))}
      </div>
    );
  }
}

export default Caterology;
