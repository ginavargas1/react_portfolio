import React from "react";



function Navbar() {
  

  return (
    <nav>
    <div className="container">
      <ul className="nav vav-pills justify-content-center ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#additional-links">Additional Links</a>
        </li>
      </ul>
   </div>
  </nav>
  );
}

export default Navbar;