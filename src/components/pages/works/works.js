import React from 'react';
import './works.css';

import banner from '../../../assets/banner.mov';
import Video from '../../video';

const works = (props) => (
    <div className="App">

    <div className="banner-box">
        <video 
            autoPlay={"autoplay"} 
            loop
            muted>
            <source src={banner} type="video/mp4" />
        </video>
        <div className="banner-text">
            <p className="m-w-font">Work / Reel</p>
                <p className="s-w-font">
                Adobe Premiere Pro, After Effects<br/>
                </p>
        </div>
    </div>
    <br/><br/>
        <header className="works-header">
            <Video />
        </header>
    </div>
)

export default works;
