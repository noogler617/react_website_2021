import React, { Component } from 'react';

import Astro from '../astro2.jpg'
import './home.css'


export class Home extends Component {
      render() {
        return(
          <div id="image">
            <img src={Astro} alt="Stars in the sky" />

                <h1>Welcome to Ryan&rsquo;s website.</h1>


          </div>

        )
      }
}
