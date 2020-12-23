import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
function About() {
  return (
    <div className="">
      <div className="row">
        <h1 className="text-center m-auto display-4 d-inline-block">Our Team</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-3 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/customers/customer3.svg")}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Nguyễn Hoàng Nguyên <p className="float-right"></p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/customers/customer3.svg")}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
               Trần Đỗ Anh Khoa <p className="float-right"></p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/customers/customer3.svg")}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
               Tôn Thất Minh Huy <p className="float-right"></p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/customers/customer3.svg")}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-100">
                Nguyễn Hoài Thế Sang <p className="float-right"></p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
