import React from "react";
import DarkMode from "./DarkMode/DarkMode";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-container">
        <p>FF</p>
      </div>
      <div className="header-favorites-container">
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
