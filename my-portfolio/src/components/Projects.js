import React from "react";
import Project2 from "../images/furrydaycare.png"
import EmployeeTracker from "../images/employeeTracker.png"
import Notes from "../images/note_taker.png"
import Move from "../images/the_move.png"
import Fitness from "../images/fitness.png"
import Ecommerce from "../images/e-commerce.png"
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



function Projects() {
  return (
    <div className="container" id="projects" >
        <h2>Projects</h2>
        <br/>
        <Card.Group centered>
            <Card>
                <Image src={Move} alt="The Move" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>The Move</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                      Made to search and create events in your city and post live real time comments and photos for the event
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://radiant-harbor-61772.herokuapp.com/" target="_blank"/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={Project2} alt="Furry Daycare" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>Furry Daycare</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                      Book an appointment for your pet
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://murmuring-island-53639.herokuapp.com/" target="_blank"/>
                </Card.Content>
            </Card> 
            <Card>
                <Image src={Fitness} alt="Fitness Tracker" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>Fitness Tracker</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                      Add your fitness activity and monitor you progress 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://workout-tracker-g.herokuapp.com/stats" target="_blank"/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={EmployeeTracker} alt="Employee Tracker" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>Employee Tracker</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                    Back-End application using MySQL and Inquirer
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://youtu.be/SUfSYc_hoAs" target="_blank"/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={Ecommerce} alt="E-Commerce" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>E-Commerce</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                      Back-End application
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://youtu.be/oZ6FMG07cJs" target="_blank"/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={Notes} alt="Employee Tracker" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>Note Taker</Card.Header>
                    <Card.Meta>
                        <span className="date">2021</span>
                    </Card.Meta>
                    <Card.Description>
                       Note Taker is an application that allows the user to create and delete notes
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   <Button content="Link" primary  as="a" href="https://guarded-plains-25331.herokuapp.com" target="_blank"/>
                </Card.Content>
            </Card>
        </Card.Group>

        
        <br/>

    <br/>
   
 </div>
  );
}

export default Projects;