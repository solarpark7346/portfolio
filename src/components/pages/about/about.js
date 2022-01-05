import React from 'react';
import { Link } from "react-router-dom";
import './about.css';

import Img from '../../img'
import banner_gif from '../../../assets/img/banner.gif'

import PBS from '../../../assets/img/PBS.jpg'

import pr from '../../../assets/icons/pr.png'
import ae from '../../../assets/icons/ae.png'
import ps from '../../../assets/icons/ps.png'
import xd from '../../../assets/icons/xd.png'
import ai from '../../../assets/icons/ai.png'

const about = (props) => (
    <div className="about">
        
            <div className="banner-box">
                <img className='banner_img' alt="banner" src={banner_gif} />
                <div className="banner-text">
                    <p className="m-w-font">Park bo seong</p>
                        <p className="s-w-font">
                        뜨거운 차 본네트 위 계란 후라이가 되는 것처럼 앞으로 취직할 기업에 자연스럽게 스며들겠습니다.<br/>
                    </p>
                </div>
            </div><br/><br/>
        
        <header className="about-header">
            <div className="about-content">
                <img className="PBS" alt="PBS" src={PBS} />
                <div className="profile-about">
                    <pr className='font-lighter'>ARCHIVE</pr>
                    <div>
                        <pr className='m-font'>영상 제작자</pr> 
                        <pr className='l-font'> 박 보 성</pr>
                    </div>
            
                    <br/><hr/><br/>
                    <div className="s-font">안녕하세요. 저는 대구에서 활동중인 비디오 아티스트입니다.</div><br/>
                    <div>
                        뜨거운 차 본네트 위 계란 후라이가 되는 것처럼<br/>
                        앞으로 취직할 기업에 자연스럽게 스며들겠습니다.<br/>
                    </div>
                    <div className='null-box'></div>
                    <div className="font-lighter-2">CONTACT</div><br/>
                    <div className="s-font">{props.address}</div>
                    <div className="s-font">{props.phone}</div>
                    <div className="s-font"><Link to="solarpark7346@gmail.com">{props.email}</Link></div><br/>
                </div>
            </div>
            
            <br />
            <br />
            <br />
            <div className="about_banner">
                <p className="m-w-font">SERVICES</p>

                <p className="s-w-font">
                    기본의 충실한 작업을 추구하며 느낌있는 영상과 사진을 제작하고 있습니다.<br/>
                    Adobe Premiere Pro, After Effects, Photoshop, Illustrator, XD 그 외 Vegas15를 다루고 있습니다.
                </p>
                <br/><br/>
            </div><br/><br/>

                <div className="about-content">
                    <img className="ARCHIVE_LOGO" alt="ARCHIVE_LOGO" src={pr} />
                    <div className="right-about">
                        <h1>Adobe Premiere Pro</h1>
                        <div className="s-font"></div><br/>
                        <div className="">영상을 촬영하고 편집 할 때 주로 사용합니다.</div><br/><br/><br/>
                        <div className="s-font"><Link to="../portfolio/Works">작품 보러가기 ▶︎</Link></div><br/>
                    </div>
                </div>

                <div className="about-content">
                    <img className="ARCHIVE_LOGO" alt="ARCHIVE_LOGO" src={ae} />
                    <div className="right-about">
                        <h1>Adobe After Effects</h1>
                        <div className="s-font"></div><br/>
                        <div className="">영상 광고 디자인, 모션 그래픽을 할 때 사용합니다.</div><br/><br/><br/>
                        <div className="s-font"><Link to="../portfolio/Works">작품 보러가기 ▶︎</Link></div><br/>
                    </div>
                </div>

                <div className="about-content">
                    <img className="ARCHIVE_LOGO" alt="ARCHIVE_LOGO" src={xd} />
                    <div className="right-about">
                        <h1>Adobe XD</h1>
                        <div className="s-font"></div><br/>
                        <div className="">웹 디자인 초안 와이어프레임, 디자인을 할 때 사용합니다.</div><br/><br/><br/>
                        <div className="s-font">
                            <a href="https://xd.adobe.com/view/7ac18f1d-8717-46ce-8e90-80e3f9e0b052-2f92/">작품 보러가기 ▶︎</a>
                        </div><br/>
                    </div>
                </div>

                <div className="about-content">
                    <img className="ARCHIVE_LOGO" alt="ARCHIVE_LOGO" src={ps} />
                    <div className="right-about">
                        <h1>Adobe Photoshop</h1>
                        <div className="s-font"></div><br/>
                        <div className="">사진 보정, 상업용 판매 이미지 제작에 사용합니다.</div><br/><br/><br/>
                        <div className="s-font"><Link to="../portfolio">작품 보러가기 ▶︎</Link></div><br/>
                    </div>
                </div>

                <div className="about-content">
                    <img className="ARCHIVE_LOGO" alt="ARCHIVE_LOGO" src={ai} />
                    <div className="right-about">
                        <h1>Adobe Illustrator</h1>
                        <div className="s-font"></div><br/>
                        <div className="">작품의 로고 디자인, 모션 그래픽을 제작할 때<br/> 도움 되는 이미지를 제작합니다.</div><br/><br/><br/>
                        <div className="s-font"><Link to="../portfolio/Features">작품 보러가기 ▶︎</Link></div><br/>
                    </div>
                </div>

        </header>
    </div>
)

about.defaultProps = {
    email: 'solarpark7346@gmail.com',
    phone: '010-6606-1698',
    address: '대한민국 대구광역시 달서구 계대동문로 99',
    wellcome: '안녕하세요!'
}

export default about;
