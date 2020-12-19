import React, { Component } from "react";
import ActiveGallery from "./ActiveGallery";
import GalleryGrid from "./galleryGrid";

export default class Gallery extends Component {
  state = {
    gallery:[],
    activeIndex: 0,
    image:''
  };
  renderGallery = () => {
     if (this.props.image.length) {
      return (
        <>
          <ActiveGallery activeGallery={this.props.image[this.state.activeIndex]} />
          <GalleryGrid gallery={this.props.image} handleClick={this.handleClick} />
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
