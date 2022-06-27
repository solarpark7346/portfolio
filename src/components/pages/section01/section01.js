import React from 'react';
import './section01.css';

import PBS from '../../../assets/img/PBS_img.png'

const Section01 = (props) => (
    <div className="section01-div">
        <div>
            <img className='PBS_img' alt="PBS" src={PBS} />
        </div>
        
        <div className="profile-about">
            <div>
                <h2>영상 제작자</h2>
                
                <pr className='l-font'>
                    박 보 성</pr><br/><br/>
                <pr>[두려움이 없는 편집자]</pr>
            </div>

            <br/><hr/><br/>
            <div className='profile-text'>
                안녕하세요. 저는 영상쪽의 닥터스트레인지 입니다.<br/>
                <br/><br/>
            </div>
        </div>
    </div>
)

export default Section01;
