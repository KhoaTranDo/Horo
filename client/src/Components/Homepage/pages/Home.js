import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Banner from "../Banner";
import Services from "../Services";
import FeturedRooms from "../FeaturedRooms";

const Home = () => {
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
export default Home;
  
