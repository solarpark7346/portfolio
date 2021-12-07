import React from 'react';
import ReactPlayer from 'react-player'

import './works.css';

import banner from '../../../assets/banner.mov';

const works = (props) => (
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
        <header className="works-header">
            <ReactPlayer //바이알라딘 공고 영상
                className='react-player'
                url='https://youtu.be/Cw2SfUqtg_I' 
                width='100%'
                height='100%'
                controls/> 
        
            <ReactPlayer
                className='react-player' // MINO - ‘도망가 (Run away)’ 팬메이드 뮤직비디오 Fan Made MV
                url='https://youtu.be/iDiiqMILReY' 
                width='100%'
                height='100%'
                controls/> 

            <ReactPlayer // [웹드라마] 거울귀신
                className='react-player'
                url='https://youtu.be/-U_OtHsd8pk' 
                width='100%'
                height='100%'
                controls/> 

            <ReactPlayer // 자동차 부릉부릉 [with a6400]
            className='react-player'
            url='https://youtu.be/cOlbGo2En0s' 
            width='100%'
            height='100%'
            controls/> 

            <ReactPlayer // MACBOOK M1 PRO 16inch unboxing teaser video
                className='react-player'
                url='https://youtu.be/TE8UbETpmdY' 
                width='100%'
                height='100%'
                controls/> 

            <ReactPlayer //닥터스트레인지 마법진진자라잔
                className='react-player'
                url='https://youtu.be/cpWxAtnxqBc' 
                width='100%'
                height='100%'
                controls/> 

            <ReactPlayer //[4k] [국내여행] 담양으로 (죽녹원) iphone xs
                className='react-player'
                url='https://youtu.be/JQ8j1Y87Xqk' 
                width='100%'
                height='100%'
                controls/> 

        </header>
    </div>
)

export default works;
