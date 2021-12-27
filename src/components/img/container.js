import React from "react";

const useIntersectionObserver = ({
    target,
    onIntersect,
    threshold = 0.1,
    rootMargin = "0px"
    }) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
        rootMargin,
        threshold
        });

    const current = target.current;

    observer.observe(current);
    
    return () => {
            observer.unobserve(current);
        };
    });
};

const ImageContainer = props => {
    const ref = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    });

    const aspectRatio = (props.height / props.width) * 100;

    return (
        <div
            ref={ref}
            className="image-container"
            style={{ paddingBottom: `${aspectRatio}%` }}
            >

            {isVisible && (
                <img className="Image" loading='lazy' src={props.src} alt={props.alt} />
            )}
        </div>
    );
};

export default ImageContainer;