import React from 'react';
import ReactPlayer from 'react-player'
import './works.css';

import banner_gif from '../../../assets/img/banner.gif'
import Video from '../../video';

import ARCHIVE_LOGO_IMG from '../../../assets/img/ARCHIVE.png'

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

            <section className='video-section1'>
                <div className='left-video-section1'>
                    <h1>[뮤비] MINO - ‘도망가 (Run away)’ 팬메이드 뮤직비디오 Fan Made MV</h1>

                    <h3>기여도 <strong>연출, 감독, 촬영, 편집</strong></h3>
                    <h3>프로그램 <strong>연출, 감독, 촬영, 편집</strong></h3>
                    <h3>카메라 <strong>연출, 감독, 촬영, 편집</strong></h3>
                    <h3>러닝타임 <strong>연출, 감독, 촬영, 편집</strong></h3>

                    <h2>OVERVIEW</h2>
                    MINO의 노래 중, '도망가'의 팬메이드 뮤직 비디오를 연출과 촬영을 하였습니다.
                </div>
                
                <div>
                    <ReactPlayer
                        title='유튭 영상이요'
                        url='https://www.youtu.be/iDiiqMILReY'
                        loading="lazy"
                        width={1000}
                        height={600}
                        controls
                    />
                </div>
            </section>

            <section className='stll_cut'>
                <h1>Stll cut</h1>
                <div className='stll_cut_imgs'>

                </div>
            </section>


            <br/>

            <img className='ARCHIVE_LOGO_IMG' alt='ARCHIVE_LOGO_IMG' src={ARCHIVE_LOGO_IMG} />
            <br/><br/>
            <a href='https://www.youtube.com/channel/UCNUKp9Ee3-We40GgNtcTioQ'>▶︎ Youtube 'ARCHIVE' Link Click!!◀︎</a>
            <br/><br/>

            <h1>Videos</h1>
            <header className="works-header">
                <Video />
            </header>
    </div>
)

export default works;
