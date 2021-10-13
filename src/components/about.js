import React, { Component } from 'react'
import { Container, Image, Jumbotron, Col, Row } from 'react-bootstrap';
import View from '../Mount-View.JPG'
import './about.css'
export class About extends Component {
      render() {
        return(
          <div>

          <Jumbotron className="about-jumbotron">
            <h2>About Me</h2>
          </Jumbotron>
          <Container>
              <Row>
                <Col>
                  <Image src={View} thumbnail Fluid />
                </Col>
              </Row>
        </Container>
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
        <Jumbotron className="about-jumbotron">

        </Jumbotron>
        <p>&copy; Ryan Mills 2021</p>
        </div>
        )
      }
}
