// src/DisplayMapClass.js
import React, {Component} from "react";
import DisplayMapClass from './Displaymap'
import MapBox from './MapBox'

export class MainSearch extends Component {
  render() {
    return (
        <div style={styleMap}>
                {/* <DisplayMapClass/> */}
                <MapBox/>
        </div>
    );
  }
}

const styleMap={
    margin: 'auto',
    width: '600px',
    height: '300px',
    marginTop: '30px',
}