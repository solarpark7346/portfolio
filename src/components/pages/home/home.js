import React, {Link} from 'react';
import Img from "../../img";
import './home.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Banner from './banner/First';
import banner_coding_img from '../../../assets/img/lens-1209823.jpg'

//Sections
import Section01 from './section01/section01';
import Section02 from './section02/Fourth';
import Section03 from './section03/Second';
import Section04 from './section04/Third';

//hooks
import useWindowSize from '../../hooks/useWindowSize';

const Home = (props) => { 
    const windowSize = useWindowSize();

    const leftTransition    = React.useRef(null);
    const rightTransition   = React.useRef(null);
    const upTransition      = React.useRef(null);

    React.useEffect(() => {
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };

        gsap.registerPlugin(ScrollTrigger)
        
        gsap.to(leftTransition.current, {
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
        });

        gsap.to(rightTransition.current, {
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
        });

        gsap.to(upTransition.current, {
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

                    <section className="section01" ref={leftTransition}>
                        <Section01 />
                    </section>

                    <section className='section02' ref={rightTransition}>
                        <Section02 />
                    </section>
                        
                    <section className='section03' ref={upTransition}>
                        <Section03 />
                    </section>

                    <section className='section04'>
                        <Section04 />
                    </section>
                
                        
                    
                    <h1>Gallery</h1>
                    <section className="img-section">
                        <Img />
                    </section>
                </div>
            </div>
        </div>
    )
        }

export default Home;
