import React, { Component } from 'react'
import {
    MDBIcon,
  } from "mdbreact";
export default class Footer extends Component{
    render()
    {
        return(
            <div style={footer}>
                <div>
                <a>
                <i class="far fa-heart"></i>
                <span>Save</span>
                </a>
                <a>
                <i class="fas fa-exclamation-triangle"></i>
                <span>Report</span>
                </a>
                    <h1>Prices:</h1>
                    <a href='/bookroom'><button>Check In</button></a>
                </div>
                <div>
                    <h1>This is footer</h1>
                </div>
            </div>
        )
    }
}

const footer={
        "position": "fixed",
        "left": "0",
        "bottom": "0",
        "width": "100%",
        "backgroundColor": "red",
        "color": "white",
        "height":'20%'
      
      
}