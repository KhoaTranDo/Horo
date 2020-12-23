import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
export default function Listroom(props) {
  //format prices
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6001/room/PostAllRoom")
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.typeRoom]);

  return (
    <>
      <div className="row">
        {data1.map((item, index) => {
          if (
            item.properties.roomtype === props.typeRoom ||
            props.typeRoom === null
          ) {
            if(item.properties.status===0){
            return (
              <div className="col-12 col-sm-6 col-md-4 col-xl-4" key={index}>
                <div className="Card wow fadeInUp" data-wow-delay="0.3s">
                  <div className="cardhome">
                    <img
                      className="card-img"
                      src={`http://localhost:6001/${item.properties.image[0]}`}
                      alt="Card"
                    />
                    {/* <div className="cardhome__tym">
                  <span>Save</span>
                </div> */}
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
                      <i className="fa fa-home" aria-hidden="true"></i> {item.properties.title}
                    </Link>
                    <div className="taghome-location">
                      <ul><i className="fa fa-map-marker" aria-hidden="true"></i>  {item.properties.address.address} , {item.properties.address.xa} , {item.properties.address.City} , {item.properties.address.country}</ul>
                      <p> <MDBIcon icon="ruler" /> {item.properties.Size} M2</p>
                      <p><i className="far fa-users"></i>  {item.properties.genderRules}</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          }
          }
        })}
      </div>
    </>
  );
}