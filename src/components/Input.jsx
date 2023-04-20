import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Input = ({ searchText }) => {
  const [text, setText] = useState("");

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      searchText(text);
    }
  };

  return (
    <div className="input-container">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

export default Input;
