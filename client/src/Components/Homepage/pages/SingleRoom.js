import React, { Component } from "react";
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
      data: [],
      address: [],
      image: "",
      position: "",
      Lessor: "",
      id:'',
      name:'',
      features:[],
      phone:''
    };
  }
  static contextType = RoomContext;

  componentDidMount() {
    axios
      .get(`http://localhost:6001/room/detail/${this.props.match.params.slug}`)
      .then((res) => {
        this.setState({ data: res.data.news[0].properties });
        this.setState({ address: this.state.data.address });
        this.setState({ image: this.state.data.image });
        this.setState({ id: res.data.news[0].UserID });
        this.setState({ position: this.state.address.location });
        this.setState({ features: this.state.data.feature });
        axios
          .get(`http://localhost:6001/account/UserProfile/${this.state.id}`)
          .then((res) => {
            this.setState({name:res.data.result.firstname+' '+res.data.result.lastname})
            this.setState({phone:res.data.result.phone})
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  Contact=()=>{
      if(localStorage.getItem("user")===null)
      document.getElementById("show-Phone").innerHTML =
      'Please Login before contact'
      else
      document.getElementById("show-Phone").innerHTML =
       'Phone Number: '+this.state.phone

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
                <div className="widget-head">
                  <h1><span style={{"fontSize": "30px" , "color": "brown"}}> <i className="fa fa-home" aria-hidden="true"></i>&ensp;</span><b>Title</b>
                  <hr/>
                  </h1>
                  
                </div>
                <h1>{this.state.data.title}</h1>
                <ul className="extras"></ul>
              </div>
            </div>
            {/* room dcribe address */}
            <div className=" mb-8  grid-margin">
              <div className="card content1">
                <div className="widget-head">
                  <h1><b><span style={{"fontSize": "30px" }}><i className="far fa-map-marked-alt" style={{"color": "brown"}}></i>&ensp; Address Information</span><hr/></b> </h1>
                </div>
                <ul className="extras">
                  <div className="w-1">
                    <h1 className="mb-0"><span style={{"fontSize": "30px" , "color": "brown"}}><i className="fad fa-city"></i> </span></h1>
                    <h1> {this.state.address.address},{this.state.address.xa},{this.state.address.City},{this.state.address.country}<small/></h1>
                  </div>
                  
                </ul>
              </div>
            </div>
          </div>
          {/* Information */}
          <div className=" mb-8  grid-margin">
            <div className="card  content1">
              <div className="widget-head">
                <h1><b>Information</b>
                <hr/>
                </h1>
              </div>
              <article className="info">
                <p>Acreage:{this.state.data.Size}</p>
                <p>Room Number:{this.state.data.NumberRoom}</p>
                <p>Capacity:{this.state.data.NumberPeople} {this.state.data.genderRules}</p>
                <p>Room Type:{this.state.data.roomtype}</p>
              </article>
            </div>
          </div>
        </section>
        <div className=" mb-8  grid-margin">
          <div className="card  content1">
            <section className="room-extras">
              <div className="widget-head">
                <h1><b>Details</b>
                <hr/>

                </h1>
              </div>
              <ul className="details">
                <h2>City:{this.state.data.describe}</h2>
                <h2>City:{this.state.data.genderRules}</h2>
                <h2>City:{this.state.data.describe}</h2>
                {this.state.features.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
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
            <div className="pl-5 pr-5 card h-10">
              <div>
                <div className="widget-head">
                  <h1> <span style={{"fontSize": "30px" , "color": "brown"}}><i className="fad fa-id-card"></i></span><b> Lessor detail</b>  <hr/></h1>
              
                </div>
                <p style={{"fontSize": "30px"}}>Name:{this.state.name}</p>
                <p style={{"fontSize": "20px"}} id='show-Phone'></p>
                <p>
                <button className="btn btn-primary btn-block" onClick={this.Contact}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
