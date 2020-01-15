import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap';
import Barn from '../night-sky.jpg'
import './portfolio.css';
import Mirror from '../magic-mirror.jpg'


export class Portfolio extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="head-color">
          <h2>Portfolio Page</h2>
          <p>Below are few project i have been working on</p>
          <p> Links are in the descrpition </p>
          </Jumbotron>
          <Container>
            <Row>
            <Col>
            <CardDeck>
              <Card bg="dark" text="white">
                <Card.Img variant="top" src={Mirror} />
                <Card.Body>
                  <Card.Title>Raspberry Pi</Card.Title>
                  <Card.Text>
                    This is Magic Mirror that I made with a Raspberry Pi. More details in the link below.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button target="_blank" href="https://www.reddit.com/r/raspberry_pi/comments/ep41cq/magic_mirror_build/">Project Link</Button>
                </Card.Footer>
              </Card>
              <Card bg="dark" text="white">
                <Card.Img variant="top" src={Barn} />
                <Card.Body>
                  <Card.Title>Coming Soon</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button href="#">Coming Soon</Button>
                </Card.Footer>
              </Card>
              <Card bg="dark" text="white">
                <Card.Img variant="top" src={Barn} />
                <Card.Body>
                  <Card.Title>Coming Soon</Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button href="#">Coming Soon</Button>
                </Card.Footer>
              </Card>
            </CardDeck>
            </Col>
            </Row>
          </Container>
          <Jumbotron className="bottom">
          </Jumbotron>

          </div>
        )
      }
}
