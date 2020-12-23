import React from "react";

const Listphoto = ({ imgUrl, handleClick, index, max }) => {
  if (index <= 4) {
    return (
      <div className="list-image">
        <img
          src={imgUrl}
          className="list-image-main"
          onClick={handleClick}
          data-index={index}
          alt=""
        ></img>
      </div>
    );
  }
};

export default Listphoto;