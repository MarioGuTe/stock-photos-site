import React from "react";
import { useNavigate } from "react-router-dom";

const ImageGallery = ({
  image,
  description,
  smallPhoto,
  mediumPhoto,
  photo,
  user,
  userImage,
  tags,
}) => {
  const navigate = useNavigate();
  const goToDetailsPage = () => {
    navigate("/details", {
      state: { smallPhoto, mediumPhoto, photo, user, userImage, tags },
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
    </div>
  );
};

export default ImageGallery;
