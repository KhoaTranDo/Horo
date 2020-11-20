// src/DisplayMapClass.js
import React, {Component} from "react";
import { connect } from "react-redux";
import axios from "axios";
import Roomprovide from './ListRoom/context'
import MapBox from './MapAcction/MapBox'
import Rooms from './ListRoom/RoomsContainer'

export class MainSearch extends Component {
  render() {
    return (
        <div style={styleMap}>
                {/* <DisplayMapClass/> */}
                <Roomprovide>
                <MapBox/>
                <Rooms/>
                </Roomprovide>
        </div>
    );
  }
}

const styleMap={
    margin: 'auto',
    width: '90%',
    height: '300px',
    marginTop: '2px',
}