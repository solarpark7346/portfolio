import React from 'react';
import './Fourth.css';

const Fourth = (props) => (
    <div className="Fourth">
        <h1>
            박보성은<br/>
            <strong>어떤 능력을</strong><br />
            가지고 있을까?
        </h1><br />
        <hr/><br />
        <div className='Fourth-content'>
            <h2>촬영<br/>
                <strong>
                    sony 제품을 좋아하며, 현재 a7m3를 보유하고 사용하고 있습니다.<br/>
                    
                </strong>
            </h2>

            <h2>편집<br/>
                <strong>
                    최대한 깔끔한 영상미를 추구하며 편집을 하고 있습니다.

                </strong>
            </h2>

            <h2>보정<br/>
                <strong>
                    포토샵으로 사진을 좀 더 <br/>생동감있게 편집하고 있으며,<br/>
                    영상은 시네마틱으로 보정하는 것을 좋아합니다.
                </strong>
            </h2>
        </div>
    </div>
)

export default Fourth;
