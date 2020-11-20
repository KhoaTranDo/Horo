import React, { Component } from "react";
import DisplayMapClass from "./Displaymap";
import './RoomStyle.css'
import { Button, Table } from "react-bootstrap";
import Gallery from "./Gallery";

export default class main extends Component {
  render() {
    return (
      <div
        className="main"
      >
          <div className="row">
            {/* Image Show */}
            <Gallery />
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
          {/* Map this room */}
          <div className=" col-lg-12 mb-4 grid-margin ">
            <div className="float-left col-lg-6 mb-5 grid-margin div-map">
                <DisplayMapClass/>
            </div>
            <div className=" float-left col-lg-6 mb-4 grid-margin">
              <div className="card h-10">
                <h1>Lessor detail</h1>
                <p>Name:</p>
              </div>
            </div>
          </div>

          {/* room describe */}
          <div className=" mb-4  grid-margin">
            <div className="card h-100 content1">
              <h4 className="card-header">Room Detail</h4>
              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis ipsam eos, nam perspiciatis natus commodi similique
                  totam consectetur praesentium molestiae atque exercitationem
                  ut consequuntur, sed eveniet, magni nostrum sint fuga.
                </p>
              </div>
            </div>
          </div>
          {/* extention on room */}

          <div className="col-lg-12 mb-4 grid-margin">
            <div className="card h-100 content1">
              <h4 className="card-header">Extention</h4>
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
            <div className="card h-100 content1">
              <h4 className="card-header">Extention</h4>
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
        </div>
      </div>
    );
  }
}

