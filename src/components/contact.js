import React, { Component } from 'react';
import { Form, Jumbotron, Col, Button, Container} from 'react-bootstrap';
import './contact.css'


export class Contact extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="text-center">
          <h2>Connect with me</h2>
          <p>
            Please send me a message if you would like to work with me.
          </p>
      </Jumbotron>
      <Container>
        <Form className="main-form" method="POST" data-netlify="true">
            <Form.Row>
                <Form.Group as={Col}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter Full Name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Enter Email.</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                </Form.Row>
                <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="4" name="message" />
                </Form.Group>
                <Form.Group>
                <div data-netlify-recaptcha="true"></div>
                </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Container>

        <Container>
          <Jumbotron className="bottom-bar">

          </Jumbotron>
        </Container>




    </div>
        )
      }
}