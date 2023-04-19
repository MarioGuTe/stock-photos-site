import React from "react";

const ImageGallery = ({ image, text }) => {
  return (
    <div className="img-container">
      <img src={image} alt="description" />
    </div>
  );
};

export default ImageGallery;
