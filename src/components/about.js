import React, { Component } from 'react'
import { Container, Image, Jumbotron } from 'react-bootstrap';
import Barn from '../barn.jpg'
//import Night from '../night.jpg'
import './about.css'
export class About extends Component {
      render() {
        return(
          <div>
          <Image src={Barn} className="header-image" />
          <Jumbotron>
            <h2>About Me...</h2>
          </Jumbotron>
        <Container className="about-section">
            <p>Hello earthling , My name is Ryan. I&rsquo;m a nerd who lives in Boston</p>
            <p>Currently I work as Desktop Engineer for a consulting company.</p>
            <p>I Oversee network operations for several small and medium sized businesses in highly regulated
             environments,</p><p> including the financial services and pharmaceutical industries.</p>

             <p>Outside of work enjoy playing music, taking photo&rsquo;s of the stars, golfing in the summer. </p>

             <p>Other hobbies I enjoy doing are building Web apps and Software programs with Javascript and Python. </p>
        </Container>
        <Jumbotron className="about-bottom">
        </Jumbotron>
        </div>
        )
      }
}
