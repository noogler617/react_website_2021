import React, { Component } from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './contact.css'



export class Contact extends Component {
      render() {
        return(
          <div>
          <Jumbotron className="text-center">
          <h3>Please use the social links below if you would like connect and send a message or follow me on YouTube.</h3>

      </Jumbotron>
        <Container>

        </Container>
          <Jumbotron className="bottom-bar">
          <div className="socialLink">
          <ul>
            <li className="linkedin"><SocialIcon url="https://www.linkedin.com/in/ryan-k-mills/" target="_blank" /></li>

            <li className="youtube"><SocialIcon url="https://www.youtube.com/channel/UC4mMpfMzB3jnP2xNcawunoA?view_as=subscriber" target="_blank" /></li>
            <li className="github"><SocialIcon url="https://github.com/noogler617" target="_blank" /></li>
          </ul>
          </div>
          </Jumbotron>




          <p>&copy; Ryan Mills 2021</p>
    </div>
        )
      }
}
