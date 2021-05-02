import React from "react";
import "../styles/portfolio.css";
import Amsterdam from "../images/amsterdam.jpg";
import PortfolioPic from "../images/profilePic.jpeg"


function Portfolio() {
  return (
    <div>
    
    <div className="container">
    <div className="card bg-dark text-white" width="100%">
       <img className="card-img" src={Amsterdam} alt="amsterdampic" />
     </div>
    </div>


    <section className="container justify-content-center" id="about-me" padding="1rem 12rem 1rem 0rem"> 
      <div className="row align-items-end">
        <div className="col-12 col-md-6">
        <img className="profile-pic" src={PortfolioPic} alt="" />
      </div>

      <div className="col-12 col-md-6">
        <h1>About Me</h1>
        <p>I’m an aspiring Full-Stack Web Developer with a hunger for knowledge in Front-End and Back end. As a full-time student at UCLA Extension 
          Bootcamp, I am now familiar and well versed in HTML, CSS, JavaScript, and currently learning Node. Within the past weeks, my works include 
          fixing and creating websites to fully operating and functioning websites. In addition to web development, I enjoy learning about new 
          technology since the start of my professional career, working for major tech industries such as Best Buy, Verizon, and Mobile Samsung HQ. My ambition is 
          to be the best of my ability to continue challenging myself to grow in this high-demand industry as a Web Developer.</p>
      </div>
      </div>
    </section>

    </div>
  );
}

export default Portfolio;
