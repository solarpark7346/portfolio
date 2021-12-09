import React from 'react';
import './works.css';

import banner from '../../../assets/banner.mov';
import banner_gif from '../../../assets/img/banner.gif'
import Video from '../../video';

const works = (props) => (
    <div className="App">

    <div className="banner-box">
        <video 
            playsinline={"playsinline"}
            autoPlay={"autoplay"} 
            loop
            muted>
            <source src={banner} type="video/mp4" />
        </video>
        <img className='banner_img' alt="banner" src={banner_gif} />
        <div className="banner-text">
            <p className="m-w-font">Work / Reel</p>
                <p className="s-w-font">
                Adobe Premiere Pro, After Effects<br/>
                </p>
        </div>
    </div>
    <br/>
        <header className="works-header">
            <Video />
        </header>
    </div>
)

export default works;
