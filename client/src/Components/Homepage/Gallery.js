import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import bg1 from "./images/details-2.jpeg";
import bg2 from "./images/details-3.jpeg";
import bg3 from "./images/details-4.jpeg";

export function Gallery() {
  const [data] = useState([bg1, bg2, bg3]);

  return (
    <Carousel className="carousel-fade" data-ride="carousel">
      {data.map((i, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={i}
              alt="First slide"
              style={{ width: "1237px", height: "700px" }}
            />
            <Carousel.Caption>
              <Banner title="Rent a home in Da Nang city">
                <Link to="/searchmap" className="btn-primary">
                  Search On Map
                </Link>
              </Banner>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
