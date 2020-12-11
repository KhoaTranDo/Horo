import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Banner from "../Banner";
import Services from "../Services";
import FeturedRooms from "../FeaturedRooms";
import SearchDetails from "../SearchDetails";

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
          <SearchDetails />
            <Link to="/searchmap">
              <button type="button">Search on Map</button>
            </Link>
          
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </>
  );
};
export default Home;
