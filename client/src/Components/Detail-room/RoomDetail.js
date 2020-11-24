import React, { Component } from "react";
import DisplayMapClass from "./Gallery/Displaymap";
import './RoomStyle.css'
import { Button, Table } from "react-bootstrap";
import Gallery from "./Gallery/Gallery";
import Footer from './Footer'


export default class main extends Component {
  constructor (props){
    super(props);
    this.state = {
        slug: this.props.match.params.slug,
    };
}
  render() {
    // const { getRoom } = this.context;
    //     const room = getRoom(this.state.slug);
    return (
      <>
      <div
        className="main"
      >
          <div className="row">
            {/* Image Show */}
            <Gallery/>
          </div>
        <div className="content">
          <div className="row mt-7 mb-5 title">
            <h3 itemProp="name" className="col-sm-9">
              Căn hộ mini full nội thất - thang máy - giờ tự do ngay Q1 Q3
            </h3>
            <div
              className="col-sm-3"
            >
              <Button variant="outline-primary" style={{ float: "right" }}>
                <span className="L3u-1">Chia sẻ</span>
              </Button>
            </div>
          </div>

          {/* room dcribe address */}
          <div className=" mb-4  grid-margin">
            <div className="card h-100 content1">
              <div>
                <h1>Address</h1>
                <p></p>
              </div>
            </div>
          </div>
          {/* extention on room */}

          <div className="mb-4 grid-margin">
            <div className="card h-100 content1">
              <div>
                <h1>Place Detail</h1>
                <p>

                </p>
              </div>
            </div>
          </div>

          {/* ROle of room */}

          <div className="mb-4 grid-margin">
            <div className="card h-100 content1">
                <div>
                  <h1>Rules</h1>
                </div>
            </div>
          </div>
           {/* ROle of room */}

           <div className="mb-4 grid-margin">
            <div className="card h-100 content1">
                <div>
                  <h1>Rental conditions</h1>
                </div>
            </div>
          </div>
          {/* Map this room */}
          <div className="mb-4 grid-margin ">
            <div className="float-left col-lg-6 mb-5 grid-margin div-map">
                <DisplayMapClass/>
            </div>
            <div className=" float-left col-lg-6 mb-4 grid-margin">
              <div className="card h-10">
                <div>
                <h1>Lessor detail</h1>
                <p>Name:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
        </>
    );
  }
}

