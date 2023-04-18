import React from "react";

const ImageGallery = ({ image, text }) => {
  return (
    <div className="img-container">
      <img src={image} alt="description" />
      <p>{text}</p>
    </div>
  );
};

export default ImageGallery;
