import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <div className="input-container">
      <FaSearch className="icon" />
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Input;
