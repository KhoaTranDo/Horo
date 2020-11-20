import React, { Component } from "react";
import ActiveGallery from "./ActiveGallery";
import GalleryGrid from "./galleryGrid";
import axios from "axios";

export default class Gallery extends Component {
  state = {
    gallery: [],
    activeIndex: 0,
  };
  componentDidMount() {
<<<<<<< HEAD
    axios
      .get(
=======
    axios.get(
>>>>>>> 8233be0a16398ad03e25436c422052742a3f4962
        "https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json"
      )
      .then((res) => {
        this.setState({ gallery: res.data.thumbnails });
      });
  }
  renderGallery = () => {
    const { gallery, activeIndex} = this.state;
    if (gallery.length) {
      return (
        <>
          <ActiveGallery activeGallery={gallery[activeIndex]} />
          <GalleryGrid gallery={gallery} handleClick={this.handleClick} />
        </>
      );
    }
    return null;
  };

  handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute("data-index");
    this.setState({ activeIndex: newActiveIndex });
  };

  render() {
    return (
      <div className="gallery">
        {/* Left Side */}

        {this.renderGallery()}
      </div>
    );
  }
}
