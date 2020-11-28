import React, { useState } from "react";
import Axios from "axios";
import Image from "cloudinary-react";
function AddImage() {
  const [selectedImages, setSelectedImage] = useState([]);

  const imageHandleChange = (e) => {
    // console.log(e.target.files)
    // if (e.target.files) {
    //   const fileArray = Array.from(e.target.files).map((file) =>
    //     URL.createObjectURL(file)
    //   );
    //   console.log(fileArray);
    //   setSelectedImage((prevImages) => prevImages.concat(fileArray));
    //   Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    // }
  };
  const upload = (files) => {
    const formdata = new FormData();
    formdata.append("file", selectedImages);
    formdata.append("upload_preset", "ly4xxrms");

    Axios.post(
      "https://api.cloudinary.com/v1_1/horoproject/image/upload",
      formdata
    ).then((response) => {
      console.log(response.data.secure_url);
    });
  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          src={photo}
          key={photo}
          style={{ width: "200px", height: "200px" }}
        />
      );
    });
  };
  return (
    // <div className="app">
    //   <div className="heading">React Multiple Images Preview</div>
    //   <div>
    //     <div class="input-group mb-3">
    //       <div class="custom-file">
    //         <input
    //           type="file"
    //           class="custom-file-input"
    //           id="file"
    //           onChange={(e) => {
    //             setSelectedImage(e.target.files);
    //           }}
    //           id="inputGroupFile02"
    //         ></input>
    //         <label class="custom-file-label" for="inputGroupFile02">
    //           Choose file
    //         </label>
    //       </div>
    //       <div class="input-group-append">
    //         <span class="input-group-text" htmlFor="file" id="">
    //           <button onClick={upload}>Upload</button>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="result"></div>
    //   </div>
    // </div>
    <div>
      <input
        type="file"
        onChange={(e) => {
          setSelectedImage(e.target.files[0]);
        }}
      ></input>
      <button onClick={upload}>Upload</button>
    </div>
  );
}
export default AddImage;
