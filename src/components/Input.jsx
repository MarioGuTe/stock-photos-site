import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ onSearchInputChange, searchQuery }) => {
  return (
    <div className="input-container">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Buscar"
        onChange={onSearchInputChange}
        value={searchQuery}
      />
    </div>
  );
};

export default Input;
