import React from 'react';
import './Fourth.css';

import pr from '../../../assets/icons/pr.png'
import ae from '../../../assets/icons/ae.png'
import ps from '../../../assets/icons/ps.png'
import ai from '../../../assets/icons/ai.png'

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
            </div>
        </div>
        <hr style={{margin:"5%",}}/>
        <div className='Fourth-content'>
            <h2>촬영<br/>
                <strong>
                    기본의 충실한 작업을 추구하며 느낌있는 영상을<br/>
                    표현하고자 하는 메세지를 담아 의미를 전달합니다.<br/>
                </strong>
            </h2>

            <h2>편집<br/>
                <strong>
                    어도비 게열 프로그램을 주로 사용합니다.<br/>
                    (Premiere Pro, After Effects, Photoshop, Illustrator, XD)
                </strong>
            </h2>

            <h2>보정<br/>
                <strong>
                    포토샵으로 사진을 좀 더 생동감있게 보정하고,<br/>
                    영상은 영화와 같은 시네마틱 적으로 표현합니다.
                </strong>
            </h2>
        </div>
    </div>
)

export default Fourth;
