import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
