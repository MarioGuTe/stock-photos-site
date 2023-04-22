import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowLeft, FaSearch, FaRegHeart } from "react-icons/fa";

const DetailsPage = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const location = useLocation();
  return (
    <>
      <header className="details-header">
        <div className="arrow-left-container">
          <NavLink className={setActiveClass} end to="/">
            <FaArrowLeft className="arrow-left" />
          </NavLink>
        </div>
        <div className="details-input-container">
          <input type="text" placeholder="Buscar" />
          <FaSearch className="details-search-icon" />
        </div>
      </header>
      <section className="details-buttons">
        <div className="details-heart-container">
          <FaRegHeart className="details-heart" />
        </div>
        <div className="details-download-button">
          <button>Descargar</button>
          <FaAngleDown className="details-angle-down" />
        </div>
      </section>
      <section className="details-image-section">
        <div className="details-image-container">
          <img src={location.state.photo} alt="hola" />
        </div>
        <div className="details-user-container">
          <p>Foto cortesía de: {location.state.user}</p>
          <img src={location.state.userImage} alt="photo-provider" />
        </div>
        <div className="details-info-container">
          <p>info 2</p>
          <p>info 3</p>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
