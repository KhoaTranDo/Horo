import React, { useState} from "react";
import { logOut } from "../../action/auth";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Gallery } from "./Gallery";
import "./style.css";
import Listroom from "./Listroom";
import Caterology from "./Caterology";
import Service from "./Services";

const Homepage = ({ isLoggedIn, logOut }) => {
   let[typeRoom,setTypeRoom]= useState(null)
    const getType =(item)=>{
        setTypeRoom(item)
    }
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
            <div >
              <Caterology typeroom={getType.bind(this)} />
            </div>
          <div className="row col-lg-12" >
            <div className="col-lg-12 ">
              <div className="row">
                <Listroom typeRoom={typeRoom} />
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
