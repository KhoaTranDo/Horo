import React, { useState} from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import bg1 from "./images/details-2.jpeg";
import bg2 from "./images/details-3.jpeg";
import bg3 from "./images/details-4.jpeg";
export function Gallery() {
  const [data, setData] = useState([bg1,bg2,bg3]);

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
                <form className="searchform cf" style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Is it me you’re looking for?"
                  />
                  <Link to="/searchmap">
                    <button type="submit">Search</button>
                  </Link>
                  <Link to="/searchmap">
                    <button type="button">Search on Map</button>
                  </Link>
                </form>
              </Banner>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>

  );
}
