import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import DisplayMapClass from "./Gallery/Displaymap";
import { RoomContext } from "../context";
import Gallery from "./Gallery/Gallery";
import axios from "axios";
import "./SingleRoom.css";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
      data: [],
      address: [],
      image: "",
      position: "",
    };
  }
  static contextType = RoomContext;

  componentDidMount() {
    axios
      .get(`http://localhost:6001/room/detail/${this.props.match.params.slug}`)
      .then((res) => {
        // setData(res.data);
        this.setState({ data: res.data.news[0].properties });
        this.setState({ address: this.state.data.address });
        this.setState({ image: this.state.data.image });
        this.setState({ position: this.state.address.location });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <section className="single-room content">
          {/* Image Show */}
          <div className="w-10">
            <Gallery image={this.state.image} />
          </div>
          {/* Content */}
          <div>
            {/* Title */}
            <div className=" mb-8  grid-margin">
              <div className="card content1">
                <div class="widget-head">
                  <h1>{this.state.data.title}</h1>
                </div>
                <ul className="extras"></ul>
              </div>
            </div>
            {/* room dcribe address */}
            <div className=" mb-8  grid-margin">
              <div className="card content1">
                <div className="widget-head">
                  <h1>Address Information:</h1>
                </div>
                <ul className="extras">
                  <div className="w-1">
                    <p className='mb-0'>Address:</p>
                    <p>{this.state.address.address}</p>
                  </div>
                  <div className="w-1">
                    <p>City:</p>
                    <p>{this.state.address.country}</p>
                  </div>
                  <div className="w-1">
                    <p>Dictrics:</p>
                    <p>{this.state.address.City}</p>
                  </div>
                  <div className="w-1">

                    <p>Area:</p>
                    <p>{this.state.address.xa}</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* Information */}
          <div className=" mb-8  grid-margin">
            <div className="card  content1">
              <div className="widget-head">
                
                <h1>Information</h1>
              </div>
              <article className="info">
                <p>Acreage:{this.state.data.Size}</p>
                <p>NumberRoom:{this.state.data.NumberRoom}</p>
                <p>NumberPeople:{this.state.data.NumberPeople}</p>
                <p>roomtype:{this.state.data.roomtype}</p>
                <p>Acreage:{this.state.data.Size}</p>
              </article>
            </div>
          </div>
        </section>
        <div className=" mb-8  grid-margin">
          <div className="card  content1">
            <section className="room-extras">
              <div className="widget-head">
                <h1>Details</h1>
              </div>
              <ul className="details">
                <h2>City:{this.state.data.describe}</h2>
                <h2>City:{this.state.data.genderRules}</h2>
                <h2>City:{this.state.data.describe}</h2>
                {/* {description.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))} */}
              </ul>
            </section>
          </div>
        </div>
        {/* Map this room */}
        <div className="mb-4 grid-margin ">
          <div className=" card  content1 float-left col-lg-6 mb-5 grid-margin div-map">
            <DisplayMapClass location={this.state.position} />
          </div>
          <div className=" float-left col-lg-6 mb-4 grid-margin">
            <div className="card h-10">
              <div>
                <div className="widget-head">
                  <h1>Lessor detail</h1>
                </div>
                <p>Name:</p>
                <p>
                  Contact: <button>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
