import React, { useState } from "react";

// Create Tran Do Anh Khoa
// Date: 25/11/2020
function AddImage(props) {
  const [selectedImages, setSelectedImage] = useState([]);
  const [upload, setUpload] = useState([]);
  const [count, setcount] = useState(0);
  const [disable, setdisable] = useState(false);
  const formData = new FormData();
  const imageHandleChange = async (e) => {
    if (e.target.files) {
      const fileArray = URL.createObjectURL(e.target.files[0]);
      formData.append("picture", e.target.files[0]);
      upload.push(e.target.files[0]);
      props.image.push(e.target.files[0]);
      setSelectedImage((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
    //Limit imageimage
    setcount(count + 1);
    if (count === 3) {
      setdisable(true);
      document.getElementById("error-login").innerHTML =
      "Maximum 4 picture";
    }
  };

  // Preview ImageImage
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          src={photo}
          key={photo}
          style={{ width: "200px", height: "200px" }}
          alt="/"
          className='pl-4'
        ></img>
      );
    });
  };
  
  return (
    <div className="app">
      <div className="result">{renderPhotos(selectedImages)}</div>

      <br />
      <div className="input-group mb-3">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="file"
            onChange={imageHandleChange}
            id="inputGroupFile02"
            disabled={disable}
          ></input>
          <label className="custom-file-label" htmlFor="inputGroupFile02">
            Choose file
          </label>
        </div>
      </div>
      <p id="error-login" style={{ color: "red" }}></p>
      <div className="label-holder"></div>
    </div>
  );
}
export default AddImage;
