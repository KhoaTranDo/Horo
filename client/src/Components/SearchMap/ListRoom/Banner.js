import React from "react";
const Banner = ({ children, title}) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      {children}
    </div>
  );
};
export default Banner;
