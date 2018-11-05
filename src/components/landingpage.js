import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src = {require('../components/headshotcircle.png')}
                           
                            alt="avatar"
                            className="avatar-image"
                        />
                        <div className='banner-text'>
                            <h1>Web Developer</h1>

                            <hr />

                            <p> HTML/CSS | Bootstrap | Wordpress | Javascript | React</p>
                            
                            <div className="social-links">

                                {/* linkedin */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* github */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/* facebook */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-facebook-square"  aria-hidden="true" />
                                </a>

                                {/* youtube */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-youtube-square"  aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>

                </Grid>
            </div>
         );
    }
}
 
export default LandingPage;