import React from "react";
import "./ButtonDiscover.css";

export function ButtonDiscover({ onClick }) {
  return (
    <button onClick={onClick} className="discover-button">
      Discover one
      <br /> of <br />
      my past lives
    </button>
  );
}
