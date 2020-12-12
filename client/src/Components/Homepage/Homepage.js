import React, { useState, useEffect } from "react";
import { logOut } from "../../action/auth";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Gallery } from "./Gallery";
import axios from "axios";
import "./style.css";
import Listroom from "./Listroom";
import Caterology from "./Caterology";
import Service from "./Services";

const Homepage = ({ isLoggedIn, logOut }) => {
  const [data, setData] = useState([]);

  //Get Ads from Json Nodejs
  useEffect(() => {
    axios
      .get("http://localhost:6001/Add")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Page Content */}
      <div className="row  ">
        {/* /.col-lg-3 */}
        <div className="col-lg-10 mx-auto ">
          {/* SlideImage */}
          <div className="row">
            <div className="pb-5">
              <Gallery />
            </div>
          </div>
          <div className="row" style={{ float: "left" }}>
            <div className="col-lg-3 sidebar">
              <Caterology />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <Listroom />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <footer className="py-1 bg-dark">
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website 2020
        </p>
      </footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { logOut })(Homepage);
