import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap';
import Barn from '../night-sky.jpg'
import './portfolio.css';
import Mirror from '../magic-mirror.jpg'
import Radio from '../Car-Radio.jpg'
import Lab from '../Home-Lab.jpg'


export class Portfolio extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="head-color">
          <h2>Portfolio Page</h2>
          <h3>Here you can see what projects that i have created using a Raspberry Pi</h3>

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
                <Button href="https://youtu.be/yzzvHq4B3wU" target="_blank" border="dark">YouTube Video</Button>
                </Card.Footer>
              </Card>
              <Card bg="dark" text="white" border="dark">
                <Card.Img variant="top" src={Lab} />
                <Card.Body>
                  <Card.Title>Home Lab</Card.Title>
                  <Card.Text>
                  This is a home-lab that I have put together and configured to run my home network.
                  <p>I have a Ubiquti Dream machine Pro, w/ APC Surge Protector, 48 PoE switch.</p>
                  <p>There are also two raspberry pi boards. One has PiHole with PiVPN & the other is a Raspberry NAS along with a Synology NAS DS220+.</p>
                  <p></p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>

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
