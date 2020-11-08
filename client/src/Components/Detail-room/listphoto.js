import React from "react";

const Listphoto = ({ imgUrl, handleClick, index, max }) => {
  if (index < 3) {
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
  } else {
    if (index === 4)
      return (
        <div className="list-image">
          <div className="list-image-main2">
            <div className="list-image-text">{max - 4}+</div>
            <img
              src={imgUrl}
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={handleClick}
              data-index={index}
              alt=""
            ></img>
          </div>
        </div>
      );
    else {
      return null;
    }
  }
};

export default Listphoto;
