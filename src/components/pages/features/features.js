import React from 'react';
import ReactPlayer from 'react-player'
import './features.css';
import banner from '../../../assets/banner.mov';
import banner_gif from '../../../assets/img/banner.gif'

import aladdin from '../../../assets/img/aladdin logo design.png'

const features = (props) => (
    <div className="features">
    <header className="abfeaturesout-header">
        <div className="banner-box">
            <video 
                autoPlay={"autoplay"} 
                loop
                playsinline={"playsinline"}
                muted>
                <source src={banner} type="video/mp4" />
            </video>
            <img className='banner_img' alt="banner" src={banner_gif} />
            <div className="banner-text-features">
                <p className="m-w-font">Buyaladdin</p>
                <p className="s-w-font">
                    디자인을 머티리얼과 같은 단순하면서도 럭셔리한 감성을 추구하고 있습니다.<br/>
                </p>
            </div>
        </div>
        
        <br/><br/>

        <div className="features-content">
            <h1>Buyaladdin 로고 재 디자인</h1>
            <img className="features-img" alt="aladdin" src={aladdin} />
            <div className="">알라딘의 마법 램프를 요정 램프에 비유하여<br/>기본 틀에서 크게 벗어나지 않고 로고를 친숙하게 제작하였습니다.</div>
        </div><br/>

        <br/><hr className='hr-content'/><br/>

        <div className="features-content">
            <h1>영상 자료 1</h1>
            <div className='video_size'>
                <ReactPlayer
                    title='유튭 영상이요'
                    className='react-player'
                    url='https://www.youtu.be/JtyWq44Lp6E'
                    width='100%' height='100%'
                    loading="lazy"
                    controls
                />
            </div>
            <br/>
            <div className="">바이 알라딘의 기존 영상을 제작해보았습니다.</div><br/>
            <br/>
        </div>

        <div className="features-content">
            <h1>영상 자료 2</h1>
            <div className='video_size'>
                <ReactPlayer
                    title='유튭 영상이요'
                    className='react-player'
                    url='https://www.youtu.be/j0GBsMez1Is'
                    width='100%' height='100%'
                    loading="lazy"
                    controls
                />
            </div><br/>
            <div className="">바이 알라딘의 스트리밍 서비스 광고 영상을 제작했습니다.</div><br/>
            <br/>
        </div>
    </header>
</div>
)

export default features;
