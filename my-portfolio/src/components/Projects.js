import React from "react";



function Projects() {
  return (
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
  );
}

export default Projects;