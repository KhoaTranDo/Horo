// src/DisplayMapClass.js
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
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
            <MapBox style={{ zIndex: -1 }} />
            <Rooms />
          </Roomprovide>
        </div>
      </>
    );
  }
}