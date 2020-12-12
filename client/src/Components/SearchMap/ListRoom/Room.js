import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "./images/room-1.jpeg";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

export default function Room({ room }) {
  const formatter = new Intl.NumberFormat("en");
  const { name, slug, images, price } = room;
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="Card wow fadeInUp" data-wow-delay="0.3s">
            <div className="cardhome">
              <img
                className="card-img"
                src={images[0] || defaultImg}
                alt="Card"
              />
              <div className="cardhome__tym">
                <span>Save</span>
              </div>
              <div className="cardhome__price">
                <span>
                  {formatNumber(price) ? formatNumber(price) + " VND" : ""}
                </span>
              </div>
            </div>
            <div className="taghome">
              <Link to={"/rooms/" + slug} className="Link-detail-news">
                {name}
              </Link>
              {/* <link className="Link-detail-news" onClick={this.NewsDeitail} id={item._id} to={`trang-chu/thong-tin-chi-tiet/${item._id}`}>{item.fields.description}</link> */}
              <div className="taghome-location">
                {/* <span> {this.state.NameDistricts[index] + ", "+this.state.NameCity[index]}</span> */}
                <span> {name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
