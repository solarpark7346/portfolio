import React from 'react';
import './Fourth.css';

import pr from '../../../assets/icons/pr.png'
import ae from '../../../assets/icons/ae.png'
import ps from '../../../assets/icons/ps.png'
import ai from '../../../assets/icons/ai.png'

import archive_logo from '../../../assets/img/logo/archive_logo.png'
import ninefruit_logo from '../../../assets/img/logo/ninefruit_logo.jpg'
import ahahclip_logo from '../../../assets/img/logo/ahahclip_logo.jpg'
import { Link } from 'react-router-dom';

const Fourth = (props) => (
    <div className="Fourth">
        <div className='section04_flex'>
            <div className='left-section'>
                <h1>
                    박보성은<br/>
                    <strong>어떤 능력을</strong><br />
                    가지고 있을까?
                </h1>
            </div>

            <div className="Section03">
                <div className='Section03-content'>
                    <div className="img-banner-box">
                        <img className="img-LOGO" alt="LOGO" src={pr} />
                        <h1>Premiere Pro<br/>
                            
                        </h1>
                    </div>

                    <div className="img-banner-box">
                        <img className="img-LOGO" alt="LOGO" src={ae} />
                        <h1>After Effects<br/>
                            
                        </h1>
                    </div>

                    <div className="img-banner-box">
                        <img className="img-LOGO" alt="LOGO" src={ps} />
                        <h1>Photoshop<br/>
                            
                        </h1>
                    </div>

                    <div className="img-banner-box">
                        <img className="img-LOGO" alt="LOGO" src={ai} />
                        <h1>Illustrator<br/>
                            
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{margin:"5%",}}/>
        <center><h2>Youtube</h2></center>
        <br/>

        <div className='Fourth-content'>
            <div className="img-banner-box">
                <a href='https://www.youtube.com/channel/UCNUKp9Ee3-We40GgNtcTioQ'>
                    <img className="img-LOGO" alt="LOGO" src={archive_logo} />
                </a>
                <h3>아카이브<br/></h3>
            </div>

            <div className="img-banner-box">
                <a href='https://www.youtube.com/channel/UCgx4TX8unAmdfXI9mwoWMOA'>
                    <img className="img-LOGO" alt="LOGO" src={ninefruit_logo} />    
                </a>
                <h3>나인프루트<br/></h3>
            </div>

            <div className="img-banner-box">
                <a href='https://www.youtube.com/channel/UCGQJUIYmpAFpMhMQIXk7yDQ'>
                    <img className="img-LOGO" alt="LOGO" src={ahahclip_logo} />
                </a>
                <h3>아아클립<br/></h3>
            </div>
        </div>
    </div>
)

export default Fourth;
