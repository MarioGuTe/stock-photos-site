import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDown, FaArrowLeft, FaAngleRight } from "react-icons/fa";
import { saveAs } from "file-saver";
import DarkMode from "../components/DarkMode/DarkMode";

const DetailsPage = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const tags = location.state.tags.split(",");
  let menuRef = useRef();
  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((open) => !open);
  };

  const downloadPhoto = (e) => {
    if (e.target.textContent.includes("small")) {
      let url = location.state.smallPhoto;
      saveAs(url, `${tags}-small.jpg`);
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 4000);
    } else if (e.target.textContent.includes("medium")) {
      let url = location.state.mediumPhoto;
      saveAs(url, `${tags}-medium.jpg`);
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 4000);
    } else if (e.target.textContent.includes("large")) {
      let url = location.state.photo;
      saveAs(url, `${tags}-large.jpg`);
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 4000);
    }
  };

  useEffect(() => {
    let handler = (e) => {
      e.stopPropagation();
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler, true);
    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  });
  return (
    <>
      <div className="details-body">
        <header className="details-header">
          <div className="arrow-left-container">
            <NavLink end to="/">
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
            <button ref={menuRef} onClick={handleToggle}>
              Descargar
            </button>
            <FaAngleDown className="details-angle-down" />
            <div
              className={`dropdown-menu-container ${
                open ? "active" : undefined
              }`}
            >
              <ul>
                <li onClick={downloadPhoto}>
                  <span>
                    {location.state.smallWidth}×{location.state.smallHeight}
                  </span>
                  <span>small</span>
                  <span>JPG</span>
                  <span className="details-angle-right">
                    <FaAngleRight className="icon-right" />
                  </span>
                </li>
                <li onClick={downloadPhoto}>
                  <span>
                    {location.state.mediumWidth}×{location.state.mediumHeight}
                  </span>
                  <span>medium</span>
                  <span>JPG</span>
                  <span className="details-angle-right">
                    <FaAngleRight className="icon-right" />
                  </span>
                </li>
                <li onClick={downloadPhoto}>
                  <span>
                    {location.state.largeWidth}×{location.state.largeHeight}
                  </span>
                  <span>large</span>
                  <span>JPG</span>
                  <span className="details-angle-right">
                    <FaAngleRight className="icon-right" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="details-image-section">
          <div className="details-image-container">
            <img src={location.state.photo} alt={tags} />
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
        <div className={`modal ${openModal ? "active-modal" : undefined}`}>
          Tu descarga comenzará en unos segundos 😉
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
