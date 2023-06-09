import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const ImageGallery = ({
  image,
  description,
  smallPhoto,
  mediumPhoto,
  photo,
  user,
  userImage,
  tags,
  smallWidth,
  smallHeight,
  mediumWidth,
  mediumHeight,
  largeWidth,
  largeHeight,
}) => {
  const navigate = useNavigate();
  const goToDetailsPage = () => {
    navigate("/details", {
      state: {
        smallPhoto,
        mediumPhoto,
        photo,
        user,
        userImage,
        tags,
        smallWidth,
        smallHeight,
        mediumWidth,
        mediumHeight,
        largeWidth,
        largeHeight,
      },
    });
  };

  return (
    <div className="img-container">
      <img
        loading="lazy"
        src={image}
        alt={description}
        onClick={goToDetailsPage}
      />
      <FaDownload className="download-icon" onClick={goToDetailsPage} />
    </div>
  );
};

export default ImageGallery;
