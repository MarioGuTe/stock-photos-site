import React from "react";

const ImageGallerySkeleton = ({ cards }) => {
  return (
    <div className="skeleton-img-container">
      {/* <main className="skeleton-image"></main> */}
      <img
        className="skeleton-image"
        src="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_1280.jpg"
        alt="skeleton"
      />
    </div>
  );
};

export default ImageGallerySkeleton;
