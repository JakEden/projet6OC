import React, { useState } from "react";
import vector from "../assets/Vector.png";
import "../styles/Dropdown.scss";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <div className="dropdown-title">{props.titre}</div>
        <button
          className={`toggle ${isOpen ? "rotate" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={vector} alt="arrow" />
        </button>
      </div>
      <div className={isOpen ? "content show" : "content"}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Dropdown;
