import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Rent a home in Da Nang city"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms/>
    </>
  );
};
export default home;
  
