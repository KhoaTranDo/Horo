import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { RoomContext } from "./context";
export default function Listroom(props, { rooms }) {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const [data1, setData1] = useState([]);
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = context;
  useEffect(() => {
    axios
      .get("http://localhost:6001/room/PostAllRoom")
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => console.log(err));
  }, [context.price,context.Size,context.capacity]);

  return (
    <div className="room-list">
      <div className="row">
        {data1.map((item, index) => {
          if (item.properties.status === 0) {     
            if (parseInt(item.properties.prices,10) < context.price ) {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-xl-4" key={index}>
                  <div className="Card wow fadeInUp" data-wow-delay="0.3s">
                    <div className="cardhome">
                      <img
                        className="card-img"
                        src={`http://localhost:6001/${item.properties.image[0]}`}
                        alt="Card"
                      />

                      <div className="cardhome__price">
                        <span>
                          {formatNumber(item.properties.prices)
                            ? formatNumber(item.properties.prices) + " VND"
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="taghome">
                      <Link
                        to={`/rooms/detail/${item.properties.slug}`}
                        className="Link-detail-news"
                      >
                        <i className="fa fa-home" aria-hidden="true"></i>{" "}
                        {item.properties.title}
                      </Link>
                      {/* <link className="Link-detail-news" onClick={this.NewsDeitail} id={item._id} to={`trang-chu/thong-tin-chi-tiet/${item._id}`}>{item.fields.description}</link> */}
                      <div className="taghome-location">
                        <h4>
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>{" "}
                          {item.properties.address.address} ,{" "}
                          {item.properties.address.xa} ,{" "}
                          {item.properties.address.City} ,{" "}
                          {item.properties.address.country}
                          <small/></h4>
                        <h5>
                          {" "}
                          <MDBIcon icon="ruler" /> {item.properties.Size} M<sup>2</sup>
                          <small/></h5>
                        <h5>
                          <i className="far fa-users"></i>{" "}
                          {item.properties.genderRules}
                          <small/></h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
}
