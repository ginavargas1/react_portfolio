import React from "react";
import "../styles/portfolio.css";
import Amsterdam from "../images/amsterdam.jpg";
import PortfolioPic from "../images/profilePic.jpeg"
import { Item, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function Portfolio() {
  return (
    <div>
    <br/>
    <div className="container">
    <div className="card bg-dark text-white">
       <img className="card-img" src={Amsterdam} alt="amsterdampic" />
     </div>
    </div>

      <br/>


      <Container text id="">
      <Item.Group relaxed>
      <Item>
        <Item.Image size="small" src={PortfolioPic} alt="about me" />

        <Item.Content verticalAlign='middle'>
           <Item.Header as="h2">About Me</Item.Header>
           <Item.Description>
             I’m an aspiring Full-Stack Web Developer with a hunger for knowledge in Front-End 
             and Back end. As a full-time student at UCLA Extension Bootcamp, I am now familiar and well versed 
             in HTML, CSS, JavaScript, and currently learning Node. Within the past weeks, my works include fixing
             and creating websites to fully operating and functioning websites. In addition to web development, I 
             enjoy learning about new technology since the start of my professional career, working for major tech 
             industries such as Best Buy, Verizon, and Mobile Samsung HQ. My ambition is to be the best of my ability 
             to continue challenging myself to grow in this high-demand industry as a Web Developer.
            </Item.Description>
          </Item.Content>
      </Item>
      </Item.Group>
      </Container>

    </div>
  );
}

export default Portfolio;
