import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";

export function Header({ title, homeAction, discovered }) {
  let classAnimation = discovered ? "home-button-transition" : "";

  return (
    <div className="title-container">
      {discovered ? (
        <div className={`home-button ${classAnimation}`}>
          <a href="#home" className="home" onClick={() => homeAction()}>
            <HomeIcon style={{ color: "white", fontSize: "2em" }} />
          </a>
        </div>
      ) : null}
      <h1 className={`title ${classAnimation}`}>{title}</h1>
    </div>
  );
}
