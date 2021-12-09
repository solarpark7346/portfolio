import React from 'react';
import { Link } from "react-router-dom";
import './contact.css';

const contact = (props) => (
    <div className="contact">
        <header className="contact-header">
            <div className="contact-content">
                <div className="left-contact">
                    <h5 className="main-font">LOCATION</h5>
                    
                    <div className="">{props.address}</div><br/>
                    <div className="s-font"><Link to="solarpark7346@gmail.com">{props.email}</Link></div><br/>
                    <div className="s-font">{props.name}</div><br/>
                </div>
            
                <div className="left-div">
                    <h1>{props.wellcome}</h1>
                </div>
            </div>
            
            <br />
            <br />
            <br />

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.7051469008347!2d128.5009374517921!3d35.856232880056474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e54128bfa645%3A0xacc110478b2ffa33!2z64yA6rWs6rSR7Jet7IucIOuLrOyEnOq1rCDqs4TrjIDrj5nrrLjroZwgOTk!5e0!3m2!1sko!2skr!4v1638898245855!5m2!1sko!2skr" 
                width="100%" height="450rem" 
                allowfullscreen="" 
                loading="lazy">    
            </iframe>
        </header>
        
    </div>
)

contact.defaultProps = {
    email: 'solarpark7346@gmail.com',
    address: '대한민국 대구광역시 달서구 계대동문로 99',
    name: '영상 제작자 박보성 / 010-6606-1698',

    wellcome: '안녕하세요!'
}

export default contact;
