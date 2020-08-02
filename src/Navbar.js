import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix Logo"
      />

      {/* <img className="nav_avatar" src="./avatar-370-456322.png" alt="US" /> */}
    </div>
  );
}
export default Navbar;
