import React from 'react';
import './section01.css';

import PBS from '../../../assets/img/PBS_imgg.jpeg'

import InstagramEmbed from 'react-instagram-embed';
import { IGEmbed } from 'react-ig-embed';

const Section01 = (props) => (
    <div className="section01-div">
        <div className='insta'>
                <IGEmbed url="https://www.instagram.com/p/CccK804vHFz/" />
            </div>
        
        <div className="profile-about">
            <div>
                <img className='PBS_img' alt="PBS" src={PBS} />
            </div>
            <div>
                <h2>ARCHIVE</h2>
                
                <pr className='l-font'>
                    박 보 성</pr><br/><br/>
                <pr>[두려움이 없는 편집자]</pr>
            </div>

            <br/><hr/><br/>
            <div className='profile-text'>
                #편집 #포토샵 #어도비 #프리미어<br/>#에펙 #일러스트 #편집자.
            </div>
        </div>
    </div>
)

export default Section01;
