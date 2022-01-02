import React from 'react';
import './works.css';

import banner_gif from '../../../assets/img/banner.gif'
import Video from '../../video';

const works = (props) => (
    <div className="work">
        <div className="banner-box">
            <img className='banner_img' alt="banner" src={banner_gif} />
            <div className="banner-text">
                <p className="m-w-font">Work / Reel</p>
                    <p className="s-w-font">
                    Adobe Premiere Pro, After Effects<br/>
                    </p>
            </div>
        </div>
        <br/>
        <a href='https://www.youtube.com/channel/UCNUKp9Ee3-We40GgNtcTioQ'>▶︎ Youtube 'ARCHIVE' Link Click!!◀︎</a>
        <br/><br/>
            <header className="works-header">
                <Video />
            </header>
    </div>
)

export default works;
