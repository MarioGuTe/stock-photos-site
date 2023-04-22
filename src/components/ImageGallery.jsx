import React from "react";
import { useNavigate } from "react-router-dom";

const ImageGallery = ({ image, description, photo, user, userImage }) => {
  const navigate = useNavigate();
  const goToDetailsPage = () => {
    navigate("/details", { state: { photo, user, userImage } });
  };

  return (
    <div className="img-container">
      <img src={image} alt={description} onClick={goToDetailsPage} />
    </div>
  );
};

export default ImageGallery;
