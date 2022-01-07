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
                <pr className='l-font'><strong>영상 제작자</strong> 박 보 성</pr><br/><br/>
                <pr>[두려움이 없는 PD]</pr>
            </div>

            <br/><hr/><br/>
            <div>
                안녕하세요. 저는 대구에서 활동중인 비디오 아티스트입니다.<br/><br/>

                영상을 촬영 할 시 보여주고자 하는 메시지를<br/>
                샷들에 부여하여 의미를 표현하고자 합니다.<br/><br/>

                혼자가 아닌 협업 중심으로의 팀 역할도 돈독히 하고 있으며,<br/>
                맡은 임무에서 최선을 다해 프로젝트를 마무리 합니다.
            </div>
        </div>
    </div>
)

export default Section01;
