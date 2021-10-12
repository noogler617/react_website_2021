import React, { Component } from 'react'
import { Container, Image, Jumbotron } from 'react-bootstrap';
import Barn from '../barn.jpg'
//import Night from '../night.jpg'
import './about.css'
export class About extends Component {
      render() {
        return(
          <div>

          <Jumbotron className="about-jumbotron">
            <h2>About Me</h2>
          </Jumbotron>
        <Container className="about-section">
        <div className="text">
          <p>Hello, </p>
          <p>My name is Ryan, welcome to my website.</p>
          <p>I currently work in IT as a system administrator.
           I enjoy working with networks, firewalls, Cloud (Azure, AWS) services, creating and breaking Linux servers, and coding with Python.</p>
          </div>

        </Container>

        </div>
        )
      }
}
