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
        <Form className="main-form" name="contact">
                <Form.Group as={Col}>
                <Form.Control type="text" name="name" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                <Form.Control as="textarea" rows="4" name="message" />
                </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
          </Form>
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
