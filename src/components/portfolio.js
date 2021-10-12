import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap';
import Barn from '../night-sky.jpg'
import './portfolio.css';
import Mirror from '../magic-mirror.jpg'
import Radio from '../Car-Radio.jpg'


export class Portfolio extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="head-color">
          <h2>Portfolio Page</h2>
          <h3>Here you can see what probets that i have created using a Raspberry Pi</h3>

          </Jumbotron>
          <Container>
            <Row>
            <Col>
            <CardDeck>
              <Card bg="dark" text="white" border="dark">
                <Card.Img variant="top" src={Mirror} />
                <Card.Body>
                  <Card.Title>Raspberry Pi</Card.Title>
                  <Card.Text>
                    <p>This is Magic Mirror that I made with a Raspberry Pi. I used a Google Maps API to see traffic in my area.</p>
                    Also used was MBTA module showing when the next 5 buses to Harvard Sq were arriving at a nearby bus stop.
                    The calendar was setup and configured to synced with my personal Google Calendar, and have the weather set to my current location.
                    <p>The background run on a module that changes the background image ever couple of minutes.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>

                </Card.Footer>
              </Card>
              <Card bg="dark" text="white" border="dark">
                <Card.Img variant="top" src={Radio} />
                <Card.Body>
                  <Card.Title>Raspberry Car Radio</Card.Title>
                  <Card.Text>
                  With this project i truned my old car radio into a pi radio. The screen is the Raspberry Pi 7 inch touch screen.
                  <p>I used a third party software that I found online.</p>
                  <p>Please click the YouTube link below to watch a video.</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button href="https://youtu.be/yzzvHq4B3wU" target="_blank">YouTube Video</Button>
                </Card.Footer>
              </Card>
              <Card bg="dark" text="white" border="dark">
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
