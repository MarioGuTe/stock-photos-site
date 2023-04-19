import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ retrievedText }) => {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault;
    setText(e.target.value);
    retrievedText({ text });
  };

  return (
    <div className="input-container">
      <FaSearch className="icon" />
      <input type="text" placeholder="Buscar" onChange={handleOnChange} />
    </div>
  );
};

export default Input;
