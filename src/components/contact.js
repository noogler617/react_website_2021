import React, { Component } from 'react';
import { Form, Jumbotron, Col, Button, Container} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './contact.css'



export class Contact extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="text-center">
          <h2>Please send me a message if you would like to connect</h2>
      </Jumbotron>
      <Container>

        </Container>
          <Jumbotron className="bottom-bar">
          <div className="socialLink">
          <ul>
            <SocialIcon url="https://www.linkedin.com/in/ryan-k-mills/" />

            <SocialIcon url="https://www.youtube.com/channel/UC4mMpfMzB3jnP2xNcawunoA?view_as=subscriber" />
            <SocialIcon url="https://github.com/noogler617" />
          </ul>
          </div>
          </Jumbotron>





    </div>
        )
      }
}
