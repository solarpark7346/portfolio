import React from 'react';

import './home.css';

import banner from '../../../assets/banner.mov';
import Img from '../../img'

const home = (props) => (
    <div className="App">

    <div className="banner-box">
        <video autoplay='true' loop='true' muted='true'>
            <source src={banner} type="video/mp4" />
        </video>
        <div className="banner-text">
            <p className="m-w-font">Park bo seong</p>
                <p className="s-w-font">
                뜨거운 차 본네트 위 계란 후라이가 되는 것처럼 앞으로 취직할 기업에 자연스럽게 스며들겠습니다.<br/>
                </p>
        </div>
    </div>
    <br/><br/>
        <header className="home-header">
            <Img />
        </header>
    </div>
)

export default home;
