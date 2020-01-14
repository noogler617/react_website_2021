import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Barn from '../night-sky.jpg'
import './portfolio.css';


export class Portfolio extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="head-color">
          <h2>Portfolio Page</h2>
          </Jumbotron>
          <Container>
            <Row>
            <Col>
              <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src={Barn} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      MagicMirror Display
                    </Card.Text>
                  <Button variant="primary">Live link here.</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={Barn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={Barn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
          </Container>

          <Container>
            <Row>
            <Col>
              <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src={Barn} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Another Project
                    </Card.Text>
                  <Button variant="primary">Click Here.</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={Barn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '21rem' }}>
              <Card.Img variant="top" src={Barn} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
          </Container>
          </div>
        )
      }
}
