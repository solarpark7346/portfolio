import React from 'react';
import './home.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Banner from './banner/First';
import banner_coding_img from '../../../assets/img/lens-1209823.jpg'

// import Animation from '../../Transitions/animation';

//Sections
import Section01 from './section01/section01';
import Section02 from './section02/Fourth';
import Section03 from './section03/Section03';
import Section04 from './section04/Third';
import ImgSection from './ImgSection';

//hooks
import useWindowSize from '../../hooks/useWindowSize';

const Home = (props) => { 
    const windowSize = useWindowSize();

    const section01    = React.useRef(null);
    const section02   = React.useRef(null);
    const section03      = React.useRef(null);
    
    React.useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };

        gsap.registerPlugin(ScrollTrigger)
        
        gsap.to(section01.current, {
            scrollTrigger: {
                trigger: ".section01",
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: '0%', 
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
            duration: 4, 
            opacity: 1, 
            scale: 1.01
        });
    },[])

    return(
        <div className="App">
            <div className="home-banner-box">
                <img alt="banner" src={banner_coding_img} />
                <div className="home-banner-text">
                    <Banner />
                </div>
            </div>

            <div className="Home">
                <div className='section-content'>

                    {/* <Animation  /> */}

                    <section className="section01" ref={section01}>
                        <Section01 />
                    </section>

                    <section className='section02' ref={section02}>
                        <Section02 />
                    </section>
                        
                    <section className='section03' ref={section03}>
                        <Section03 />
                    </section>

                    <section className='section04'>
                        <Section04 />
                    </section>
                    
                    <h1>Gallery</h1>
                    <section className="img-section">
                        <ImgSection />
                    </section>
                </div>
            </div>
        </div>
    )
        }

export default Home;
