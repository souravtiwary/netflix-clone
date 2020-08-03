import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
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
