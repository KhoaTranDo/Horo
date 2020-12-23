// src/DisplayMapClass.js
import React, { Component } from "react";
import Roomprovide from "./ListRoom/context";
import MapBox from "./MapAcction/MapBox";
import Rooms from "./ListRoom/RoomsContainer";
import './Map.css'
export class MainSearch extends Component {
  render() {
    return (
      <>
        <div className='map'>
          {/* <DisplayMapClass/> */}
          <Roomprovide>
            <div>
            <MapBox style={{ zIndex: -1 }} />
            </div>
            <div style={{marginTop: '200px'}}>
            <Rooms />
            </div>
          </Roomprovide>
        </div>
      </>
    );
  }
}