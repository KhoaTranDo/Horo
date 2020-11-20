import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Banner from "../Banner";
import Services from "../Services";
import FeturedRooms from "../FeaturedRooms";

const Home = () => {
  return (
    <>
      {/* Form main */}
      {/* Form Image And Search */}
      <Hero>
        <Banner title="Rent a home in Da Nang city">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
          <form className="searchform cf" style={{ display: "flex" }}>
            <input type="text" placeholder="Is it me you’re looking for?" />
            <Link to="/searchmap">
            <button type="submit">Search</button>
            </Link>
            <Link to="/searchmap">
              <button type="button">Search on Map</button>
            </Link>
          </form>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </>
  );
};
export default Home;
