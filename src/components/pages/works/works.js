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
            <p className="m-font"> 뜨거운 차 본네트 위 계란 후라이가 되는 것처럼 앞으로 취직할 기업에 자연스럽게 스며들겠습니다. </p>
        </div>
    </div>
    <br/><br/>
        <header className="works-header">
            <Video />
        </header>
    </div>
)

export default works;
