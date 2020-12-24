import React, { Component } from "react";
import AddImage from "./EditImage";
import Select from "react-select/creatable";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { extend } from "../../typeRoom";
import { TypeRoom } from "../../typeRoom";
import { GenderRules } from "../../typeRoom";
// Create Tran Do Anh Khoa
// Date: 25/11/2020

const roomtype = TypeRoom.slice(1); 

class MainEditRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: "",
      NumberRoom: "",
      NumberPeople: "",
      roomtype: "",
      image: [],
      feature: "",
      genderRules: "",
      describe: "",
      prices: "",
      title: "",
      slug: this.props.match.params.slug,
      data: [],
      image: [],
      newImage:[],
      Lessor: "",
      id:'',
      name:''
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:6001/room/detail/${this.props.match.params.slug}`)
    .then((res) => {
      this.setState({ id: res.data.news[0]._id });
      this.setState({ data: res.data.news[0].properties });
      this.setState({Size: this.state.data.Size});
      this.setState({NumberPeople: this.state.data.NumberPeople});
      this.setState({NumberRoom: this.state.data.NumberRoom});
      this.setState({roomtype: this.state.data.roomtype});
      this.setState({image: this.state.data.image });
      this.setState({title: this.state.data.title});
      this.setState({describe: this.state.data.describe});
      this.setState({genderRules: this.state.data.genderRules});
      this.setState({feature: this.state.data.feature});
      this.setState({prices: this.state.data.prices});
      axios
        .get(`http://localhost:6001/account/UserProfile/${this.state.id}`)
        .then((res) => {
          this.setState({name:res.data.result.firstname})
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }
  postServerRoom = (obj) => {
    if(obj.image.length!==0){
      var img=[]
    obj.image.map(async (i) => {
      img.push(i.name);
      const formData = new FormData();
      formData.append("picture", i);
      // Send image to local
      const res = await fetch("http://localhost:6001/room/picture", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
    });
    obj.image=img
    }else{
      obj.image=this.state.image
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Get name image
      this.state.image = img;
      const body = JSON.stringify(obj);
      axios.post(`http://localhost:6001/room/LessorRoom/update/${this.state.id}`, body, config);
    } catch (error) {
      console.log("error");
    }
  
  };
  // Action
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleType = (selectedOption) => {
    this.setState({ roomtype: selectedOption.name });
  };
  handleGender = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ genderRules: selectedOption.value });
  };
  handleFeature = (selectedOption) => {
    if (selectedOption === null) {
      this.setState({ feature: "" });
    } else {
      this.setState({ feature: selectedOption });
    }
  };
  getAddress = (item) => {
    this.setState({ address: item });
  };
  fileUpload = (files) => {
    console.log(files[0]);
  };
  postRoom = () => {

    const newData ={
      title: this.state.title,
      image : this.state.newImage,
      Size : this.state.Size,
      roomtype : this.state.roomtype,
      NumberRoom: this.state.NumberRoom,
      NumberPeople:this.state.NumberPeople,
      feature: this.state.feature,
      genderRules: this.state.genderRules,
      describe: this.state.describe,
      prices: this.state.prices,
    }
      this.postServerRoom(newData);
      this.props.history.push("/room");
  };
  render() {
    if (localStorage.getItem("user") === null) {
      alert("Login before use this function");
      return <Redirect to="/account" />;
    } else {
      return (
        <div className="card">
        <div className="card-body">
        <div id="layoutSidenav">
          {/* div containt */}
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                {/* Add image */}
                <div className="row">
               
                  <div className="col-md-10 order-md-1 mx-auto">
                    <h2>
                      Image Current
                    </h2>
                    <div>
                      {this.state.image.map((item,index)=>{
                        return(
                        <img
                        src={`http://localhost:6001/${item}`}
                        key={index}
                        style={{ width: "200px", height: "200px" }}
                        alt="/"
                        className='pl-4'
                      ></img>
                        )
                    
                      })}
                    </div>
                    <hr/>
                    <h2>
                      New Image
                    </h2>
                    <div>
                      <AddImage image={this.state.newImage} />
                    </div>
                    {/* Add place detail */}
                    <div>
                      {/* Title */}
                      <span>Title</span>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.title}
                      ></input>
                      {/* AreaArea */}
                      <span>Area</span>
                      <input
                        type="number"
                        name="Size"
                        className="form-control"
                        onChange={this.handleChange}
                        min="0"
                        max='1000'
                        value={this.state.Size}
                      ></input>
                      {/* Tyle of room */}
                      <span>Types of residential rental</span>
                      <ul>
                        <Select
                          name="roomtype"
                          options={roomtype}
                          getOptionLabel={(x) => x.name}
                          getOptionValue={(x) => x.name}
                          onChange={this.handleType}
                        />
                      </ul>
                      {/* Number of room */}
                      <span>Room Number</span>
                      <input
                        type="number"
                        name="NumberRoom"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.NumberRoom}
                      ></input>
                      {/* People */}
                      <span>Capacity</span>
                      <input
                        type="number"
                        name="NumberPeople"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.NumberPeople}
                      ></input>
                      <span>Features of Place</span>
                      <Select
                        closeMenuOnSelect={false}
                        isMulti
                        name="feature"
                        options={extend}
                        className="basic-multi-select"
                        getOptionLabel={(x) => x.name}
                        getOptionValue={(x) => x.name}
                        onChange={this.handleFeature}
                        classNamePrefix="select"
                      />
                    </div>

                    {/* Rental conditions */}
                    <div>
                      <span>Gender Rules</span>
                      <Select
                        options={GenderRules}
                        onChange={this.handleGender}
                      />

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          More Describe
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="describe"
                          onChange={this.handleChange}
                          style={{ resize: "none" }}
                          value={this.state.describe}
                        ></textarea>
                      </div>
                    </div>
                    {/* price:*/}
                    <div>
                      <span>Prices/month</span>
                      <input
                        type="number"
                        name="prices"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.prices}
                      ></input>
                    </div>
                    <button
                      className="btn btn-outline-primary"
                      onClick={this.postRoom}
                    >
                      Update Information Room
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        </div>
        </div>
      );
    }
  }
}

export default MainEditRoom;
