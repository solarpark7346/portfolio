import React from "react";

const Animation = (useRef, tarigger) => {
    let useRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(useRef.current, {
            scrollTrigger: {
                trigger: tarigger,
                markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            x: '0%', 
            duration: 4, 
            opacity: 1,
            scale: 1.1,
        });
    })    

    return Animation
}

export default Animation;