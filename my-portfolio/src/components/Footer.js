import React from "react";

function Footer() {
  return (
    <footer className="container" id="additional-links">
       <h4 className="display-6 text-center">Additional Links</h4>
       <div id="footer-links">
           <button data-target="#linkedin-info">
              <a href="https://www.linkedin.com/in/ginavargas89/" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></button>
           <button data-target="#github-info">
              <a href="https://github.com/ginavargas1" rel="noopener noreferrer"><i className="fab fa-github"></i></a></button>
       </div>
     </footer>
  );
}

export default Footer;