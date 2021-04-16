import React, { Component } from 'react'
import { Container, Image, Jumbotron } from 'react-bootstrap';
import Barn from '../barn.jpg'
//import Night from '../night.jpg'
import './about.css'
export class About extends Component {
      render() {
        return(
          <div>

          <Jumbotron>
            <h2>About Me</h2>
          </Jumbotron>
        <Container className="about-section">
        <div className="text">
          <p>I am a driven, self-motivated IT professional with extensive experience and training that will
          enable me to significantly contribute to your company's IT division. My record demonstrates
          high performance and success, both individually and as a member of a highly functioning
          team. Therefore, I know that I would be able to continue to thrive in a position with your
          company.</p>
          <p>I specialized in System/Network Administrain, as well as Azure and AWS Cloud Administration. </p>
          </div>

        </Container>

        </div>
        )
      }
}
