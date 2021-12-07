import React from 'react';

import './home.css';

import banner from '../../../assets/banner.mov';

import img01 from '../../../assets/img/01.jpg'
import img02 from '../../../assets/img/02.jpg'
import img03 from '../../../assets/img/03.png'
import img04 from '../../../assets/img/04.jpg'
import img05 from '../../../assets/img/05.jpg'
import img06 from '../../../assets/img/06.jpg'
import img07 from '../../../assets/img/07.jpg'
import img08 from '../../../assets/img/08.jpg'

const home = (props) => (
    <div className="App">

    <div className="banner-box">
        <video autoplay='true' loop='true' muted='true'>
            <source src={banner} type="video/mp4" />
        </video>
        <div className="banner-text">
            <p className="m-font"> 뜨거운 차 본네트 위 계란 후라이가 되는 것처럼 앞으로 취직할 기업에 자연스럽게 스며들겠습니다. </p>
        </div>
    </div>
    <br/><br/>
        <header className="home-header">

            <div className="s-img">
                <img className="Image" alt="img04" src={img04} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img01" src={img01} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img03" src={img03} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img02" src={img02} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img02" src={img07} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img02" src={img05} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img02" src={img06} />
            </div>

            <div className="s-img">
                <img className="Image" alt="img02" src={img08} />
            </div>


        </header>
    </div>
)

export default home;
