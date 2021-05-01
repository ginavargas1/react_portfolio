import React from "react";
import "../styles/portfolio.css";
import Amsterdam from "../images/amsterdam.jpg";
import PortfolioPic from "../images/profilePic.jpeg"


function Portfolio() {
  return (
    <div>
     <div className="container text-center my-4">
       <h1>Gina Vargas</h1>
       <p>Full-Time Student Coding Boot Camp at UCLA Extension</p>
      </div>

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
          <li className="nav-item">
            <a className="nav-link" href="./files/Gina Vargas Resume .pdf">Resume</a>
          </li>
        </ul>
     </div>
    </nav>


    <div className="container">
    <div className="card bg-dark text-white" width="100%">
       <img className="card-img" src={Amsterdam} alt="amsterdampic" />
     </div>
    </div>


    <section className="container justify-content-center" id="about-me" padding="1rem 12rem 1rem 0rem"> 
      <div className="row align-items-end">
        <div className="col-12 col-md-6">
        <img className="profile-pic" src={PortfolioPic} />
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
  


    <div className="container" id="projects" >
       <h2>Projects</h2>
       <br/>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
      <div className="card">
        <img src="./images/furrydaycare.png" className="card-img-top" alt="Furry_DayCare" />
        <div className="card-body">
          <h5 className="card-title">Furry DayCare</h5>
          <p className="card-text">Book an appointment for your pet</p>
          <a href="https://guarded-plains-25331.herokuapp.com" className="btn btn-primary">Furry DC Link</a>
        </div>
      </div>
     </div>
     <div className="col">
      <div className="card">
        <img src="./images/employeeTracker2.png" className="card-img-top" alt="Employee_Tracker" />
        <div className="card-body">
          <h5 className="card-title">Employee Tracker</h5>
          <p className="card-text">Back-End application using MySQL and Inquirer</p>
          <a href="https://github.com/ginavargas1/employee-tracker" className="btn btn-primary">Repository Link</a>
        </div>
      </div>
     </div>
     <div className="col">
       <div className="card">
        <img src="./images/note_taker.png" className="card-img-top" alt="Note_Tacker" />
        <div className="card-body">
          <h5 className="card-title">Note Taker</h5>
          <p className="card-text">Note Taker is an application that allows the user to create and delete notes</p>
          <a href="https://guarded-plains-25331.herokuapp.com" className="btn btn-primary">Note Taker Link</a>
        </div>
       </div>
      </div>
     </div>
    </div>



     <footer className="container" id="additional-links">
       <h4 className="display-6 text-center">Additional Links</h4>
        <div id="footer-links">
        <button data-target="#linkedin-info">
           <a href="https://www.linkedin.com/in/ginavargas89/" target="_blank"><i className="fab fa-linkedin"></i></a></button>
        <button data-target="#github-info">
           <a href="https://github.com/ginavargas1" target="_blank"><i className="fab fa-github"></i></a></button>
        </div>
     </footer>


    </div>


  );
}

export default Portfolio;
