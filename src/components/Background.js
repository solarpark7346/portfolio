import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "./styles/theme";
import useWindowSize from "./hooks/useWindowSize";

const Background = () => {
    const [bgColor, setBgColor] = useState(theme.color.black);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (useWindowSize * 2.5 < useWindowSize) setBgColor(theme.color.white);
            else setBgColor(theme.color.black);
            });
    }, []);

    return (
        <Container bgColor={bgColor}>
        {bgColor === theme.color.black && (
            <>
                <div className="stars" />
                <div className="stars2" />
                <div className="stars3" />
            </>
        )}
        </Container>
    );
};

const Container = styled.div`
    background-color: ${({ bgColor }) => bgColor};
    transition: 0.2s;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
`;

export default Background;
