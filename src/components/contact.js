import React, { Component } from 'react';
import { Form, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';


export class Contact extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="text-center">
          <h1>Contact</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
      </Jumbotron>
<Container>
      <Form>
            <Row>
            <Col sm={8}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phonenumber" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            </Col>
            <Col sm={4}>
            </Col>
            </Row>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
        </Form>
        </Container>
        </div>
        )
      }
}
