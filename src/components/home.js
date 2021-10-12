import React, { Component } from 'react';

import Astro from '../Astro-Farm.jpg'
import './home.css'


export class Home extends Component {
      render() {
        return(
          <div id="image">
            <img src={Astro} alt="Stars in the sky" />

                <h1>Welcome to my website. Have a look around.</h1>


          </div>

        )
      }
}
