import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

import EmailJS from '../../util/Email/email'

const Section05 = (props) => (
    <div className="contact">
        <header className="contact-header">
            <div className="contact-content">
                <div className="left-contact">
                    <h1 className="LOCATION">LOCATION</h1>
                    <br />
                    <br />
                    <div className="">{props.address}</div><br/>
                    <div className="s-font"><Link to="solarpark7346@gmail.com">{props.email}</Link></div><br/>
                    <div className="s-font">{props.name}</div><br/>
                    <div className="s-font">{props.instar}</div><br/>
                </div><br />
            <br />
            <br />
            
                <div className='left-contact'>
                    <EmailJS />
                </div>
            </div>
        </header>
    </div>
)

Section05.defaultProps = {
    email: 'solarpark7346@gmail.com',
    address: '서울특별시 마포구 상암동 1596 상암디엠씨 푸르지오시티 s-city 16층 1637호',
    name: '영상 제작자 박보성 / 010-6606-1698',
    instar: 'instagram @Park_Bo_Seong 박보성'
}

export default Section05;