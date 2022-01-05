import React from 'react';
import './section01.css';

import PBS from '../../../../assets/img/PBS_img.png'

const Section01 = (props) => (
    <div className="section01-div">
        <div>
            <img className='PBS_img' alt="PBS" src={PBS} />
        </div>
        
        <div className="profile-about">
            <pr className='font-lighter'>ARCHIVE</pr>
            <div>
                <pr className='l-font'><strong>영상 제작자</strong> 박 보 성</pr><br/>
                <pr>두려움이 없는 PD</pr>
            </div>

            <br/><hr/><br/>
            <div className="s-font">안녕하세요. 저는 대구에서 활동중인 비디오 아티스트입니다.</div><br/>
            <div>
                뜨거운 차 본네트 위 계란 후라이가 되는 것처럼<br/>
                앞으로 취직할 기업에 자연스럽게 스며들겠습니다.<br/>
                <br/>
                모든 일에 최선을 다하겠습니다.<br/>
                감사합니다.
            </div>    
        </div>
    </div>
)

export default Section01;
