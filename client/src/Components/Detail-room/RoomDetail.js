import React, { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import DisplayMapClass from './Displaymap'

import {

  Button,
  Table,

} from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import Gallery from "./Gallery";

export default class main extends Component {
  render() {
    return (
      <div className="App" style={{ width: "100%",backgroundColor:'red'}}>
        <div className='true'>
          <div className="row">
            {/* Image Show */}
            <Gallery/>
          </div>
          <div
            className="row mt-5 mb-5"
            style={style}
          >
            <h3 itemProp="name" className="col-sm-10">
              Căn hộ mini full nội thất - thang máy - giờ tự do ngay Q1 Q3
            </h3>
            <div
              style={{
                border: "2px solid red",  
                borderRadius: "5px",
                padding: "10px",
                float: "right",
              }}
              className="col-sm-2"
            >
              <Button variant="outline-primary" style={{ float: "right" }}>
                <span className="L3u-1">Chia sẻ</span>
              </Button>
            </div>
          </div>
              
        {/* room describe */}
            <div className="col-lg-12 mb-4 grid-margin" >
              <div className="card h-100"   style={style}>
            <h4 className='card-header'>Room Detail</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis ipsam eos, nam perspiciatis natus commodi
                    similique totam consectetur praesentium molestiae atque
                    exercitationem ut consequuntur, sed eveniet, magni nostrum
                    sint fuga.
                  </p>
                </div>
              </div>
            </div>
              {/* Map this room */}
              <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100"  style={style1} >
                <DisplayMapClass/>
              </div>
            </div>
            {/* extention on room */}
           
            <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100"  style={style}>
              <h4 className='card-header'>Extention</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <Button variant="btn btn-primary">Learn More</Button>
                </div>
              </div>
            </div>
         
         {/* ROle of room */}
        
          <div className="col-lg-12 mb-4 grid-margin">
              <div className="card h-100"  style={style}>
              <h4 className='card-header'>Extention</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <Button variant="btn btn-primary">Learn More</Button>
                </div>
              </div>
            </div>


          <div className="row mb-4" >
            <div className="col-sm-12 grid-margin" >
              <div className="card h-100">
                <h4 className="card-header">Table</h4>
                <div className="card-body">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style={
  "paddingLeft":"32px",
  "paddingRight":"32px",
  "marginLeft":"32px",
  "marginRight":"32px",
  "backgroundColor":"#FFFFFF",
  "paddingTop":"32px",
  "paddingBottom":"24px",
  "borderRadius":"20px",
  "marginTop":"32px"
}
const style1={
  "paddingLeft":"32px",
  "paddingRight":"32px",
  "marginLeft":"32px",
  "marginRight":"32px",
  "backgroundColor":"#FFFFFF",
  "paddingTop":"32px",
  "paddingBottom":"24px",
  "borderRadius":"20px",
  "marginTop":"32px",
}