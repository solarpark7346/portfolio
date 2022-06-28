import React, {useState} from 'react';
import './home.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ShowMore from 'react-show-more-button';

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
                trigger: ".img_section",
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
        
        gsap.to(section01.current, {
            scrollTrigger: {
                trigger: ".section01",
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
                <h2 style={{color:"white", textAlign:'center'}}>🌟 밑으로 스크롤 해주세요! 🌟</h2>
            </div>

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
                        <ShowMore 
                            maxHeight={'50vh'}
                            styleButton={{
                                backgroundColor: 'black',
                                border: 'none',
                                borderRadius:'0.5rem',
                                hover:'black',
                                fontFamily: 'GmarketSansBold'
                                }
                            }>
                            <Section04 />
                        </ShowMore>
                    </section>
                
                    <section className='img_section' ref={img_section}>
                        <h1 style={{ color: 'white' }}>Gallery</h1>
                        <ShowMore 
                            maxHeight={'50vh'}
                            styleButton={{
                                backgroundColor: 'black',
                                border: 'none',
                                hover:'black',
                                fontFamily: 'GmarketSansBold'
                                }
                            }
                            styleButtonDiv={{
                                border: 'none'
                            }}>
                            <div className="img-section" >
                                    <ImgSection />
                            </div>
                        </ShowMore>
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
