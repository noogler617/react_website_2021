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
           I enjoy working with networks, firewalls, Cloud (Azure, AWS) services, creating and breaking Linux servers, and practice coding with Python.</p>

           <p>When not on a computer I enjoy writing and playing music.
            I have been playing music for over 20 years and played many of Boston's music venues such as The Paradise Rock Club, Harper's Ferry, the Middle East.</p>
          </div>

        </Container>

        </div>
        )
      }
}
