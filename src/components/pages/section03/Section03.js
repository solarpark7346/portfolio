import React from 'react';
import './Section03.css';

import pr from '../../../assets/icons/pr.png'
import ae from '../../../assets/icons/ae.png'
import ps from '../../../assets/icons/ps.png'
import ai from '../../../assets/icons/ai.png'

const Section03 = (props) => (
    <div className="Section03">
        <div className='Section03-content'>
            <div className="img-banner-box">
                <img className="img-LOGO" alt="LOGO" src={pr} />
                <h1>Premiere Pro<br/>
                    <strong>영상 컷 편집</strong><br/>
                </h1>
            </div>

            <div className="img-banner-box">
                <img className="img-LOGO" alt="LOGO" src={ae} />
                <h1>After Effects<br/>
                    <strong>모션그래픽 / 2D 애니메이션</strong><br/>
                </h1>
            </div>

            <div className="img-banner-box">
                <img className="img-LOGO" alt="LOGO" src={ps} />
                <h1>Photoshop<br/>
                    <strong>이미지 보정</strong><br/>
                </h1>
            </div>

            <div className="img-banner-box">
                <img className="img-LOGO" alt="LOGO" src={ai} />
                <h1>Illustrator<br/>
                    <strong>로고 제작 및 2D 일러스트</strong><br/>
                </h1>
            </div>
        </div>
        <p style={{ float:'right' }}>* 이미지를 클릭하면 해당 탭으로 이동합니다.</p>
    </div>
)

export default Section03;
