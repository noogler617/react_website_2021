import React, { Component } from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
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
            <li className="linkedin"><SocialIcon url="https://www.linkedin.com/in/ryan-k-mills/" /></li>

            <li className="youtube"><SocialIcon url="https://www.youtube.com/channel/UC4mMpfMzB3jnP2xNcawunoA?view_as=subscriber" /></li>
            <li className="github"><SocialIcon url="https://github.com/noogler617" /></li>
          </ul>
          </div>
          </Jumbotron>





    </div>
        )
      }
}
