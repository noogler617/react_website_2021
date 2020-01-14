import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import Barn from '../night-sky.jpg'
import './about.css'
export class About extends Component {
      render() {
        return(
          <div>
          <Container>
        <Image src={Barn} className="header-image" fluid />
        </Container>
        <Container>
          <Col xs={12} sm={8} smOffset={2}>

            <h3>About Me...</h3>

            <p>Fast learning, the self-motivated technology professional that has a rigorous dedication to quality. </p>
            <p>I'm a highly resourceful and innovative problem solver looking to continue my high trajectory growth in the computer and software industry.</p>
          </Col>
        </Container>
      </div>
        )
      }
}
