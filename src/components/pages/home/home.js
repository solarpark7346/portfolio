import React from 'react';
import './home.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './stars.scss'

//Sections
import Banner from '../banner/First';
import Section01 from '../section01/section01';
import Section02 from '../section02/Fourth';
import Section04 from '../section04';
import Section05 from '../section05';
import ImgSection from '../ImgSection';

//hooks
import useWindowSize from '../../hooks/useWindowSize';

const Home = (props) => { 

    const img_section    = React.useRef(null);

    const section01      = React.useRef(null);
    const section02      = React.useRef(null);
    const section03      = React.useRef(null);
    const section04      = React.useRef(null);
    const section05      = React.useRef(null);

    React.useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(img_section.current, {
            scrollTrigger: {
                trigger: ".img-section",
                markers: true,
                start: "top center",
                end: "top center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1,
            scale: 1.01,
        });
        
        gsap.to(section01.current, {
            scrollTrigger: {
                trigger: ".section01",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1,
            scale: 1.01,
        });

        gsap.to(section02.current, {
            scrollTrigger: {
                trigger: ".section02",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1,
            scale: 1.01
        });

        gsap.to(section03.current, {
            scrollTrigger: {
                trigger: ".section03",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1, 
            scale: 1.01
        });

        gsap.to(section04.current, {
            scrollTrigger: {
                trigger: ".section04",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1, 
            scale: 1.01
        });

        gsap.to(section05.current, {
            scrollTrigger: {
                trigger: ".section05",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: 0, 
            y: 50,
            duration: 4, 
            opacity: 1, 
            scale: 1.01
        });
    },[])

    return(
        <div className="App">
            <div className='Home-header'>
                <Banner />
            </div>

            <h2 style={{color:"white", textAlign:'center'}}>🌟 밑으로 스크롤 해주세요! 🌟</h2>

            <div className="Home">
                <div className='section-content'>
                    {/* <Animation  /> */}

                    <div>
                        <section className="section01" ref={section01}>
                            <h1 style={{color: 'white'}}>Profile</h1>
                            <Section01 />
                        </section>
                    </div>

                    <section className='section02' ref={section02}>
                        <Section02 />
                    </section>

                    <section className='section04' ref={section04}>
                        <h1 style={{ color: 'white' }}>Videos</h1>
                        <Section04 />
                    </section>
                    
                    <section>
                        <h1 style={{ color: 'white' }}>Gallery</h1>
                        <div className="img-section" ref={img_section}>
                            <ImgSection />
                        </div>
                    </section>
                    

                    <section className='section05' ref={section05}>
                        <h1 style={{ color: 'white' }}>Contact</h1>
                        <Section05 />
                    </section>
                </div>
            </div>
        </div>
    )
        }

export default Home;
