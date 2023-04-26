import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowLeft, FaSearch, FaRegHeart } from "react-icons/fa";
import { saveAs } from "file-saver";
import DarkMode from "../components/DarkMode/DarkMode";

const DetailsPage = () => {
  const [open, setOpen] = useState(false);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const location = useLocation();
  const tags = location.state.tags.split(",");

  const handleClick = (e) => {
    if (e.target.textContent.includes("S")) {
      console.log(e.target.textContent);
    } else if (e.target.textContent.includes("M")) {
      console.log(e.target.textContent);
    } else if (e.target.textContent.includes("L")) {
      console.log(e.target.textContent);
    }

    // let url = location.state.photo;
    // saveAs(url, `${tags}-from-fantastifotos.jpg`);
  };

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      <div className="details-body">
        <header className="details-header">
          <div className="arrow-left-container">
            <NavLink className={setActiveClass} end to="/">
              <FaArrowLeft className="arrow-left" />
            </NavLink>
          </div>
          <div className="details-title-container">
            <h1>FantastiFotos</h1>
          </div>
          <DarkMode />
        </header>
        <section className="details-buttons">
          <div className="details-download-button">
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              Descargar
            </button>
            {/* <FaAngleDown className="details-angle-down" /> */}
            <div
              className={`dropdown-menu-container ${
                open ? "active" : undefined
              }`}
            >
              <ul>
                <li onClick={handleClick}>
                  150 X 99 <span>S-size</span>
                </li>
                <li onClick={handleClick}>
                  640 X 426 <span>M-size</span>
                </li>
                <li onClick={handleClick}>
                  5363 X 3575 <span>L-size</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="details-image-section">
          <div className="details-image-container">
            <img src={location.state.photo} alt="loading..." />
          </div>
          <div className="details-info-container">
            {tags.map((tag) => (
              <p key={tag}>#{tag.trimStart()}</p>
            ))}
          </div>
          <div className="details-user-container">
            <p>Foto cortesía de: {location.state.user}</p>
            <div className="user-image-container">
              <img src={location.state.userImage} alt="photo-provider" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsPage;
