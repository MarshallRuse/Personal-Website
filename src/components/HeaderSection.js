import React from "react";
import styled from "styled-components";

import HeaderSubtitle from "./elements/HeaderSubtitle";
import NavBar from "./elements/NavBar";
import HeroBackground from "./elements/HeroBackground";
import HeaderTitle from "./elements/HeaderTitle";
import FadeInText from "./elements/FadeInText";

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 600px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const HeaderSubtitleSection = styled.div`
    overflow: hidden;
    @media (max-width: 600px) {
        word-spacing: 100vw;
    }
`;

const HeaderSection = () => (
    <>
        <FadeInText
            animationDelay={"3.5s"}
            animationDuration={"2s"}
            styling={{ position: "fixed", width: "100%", zIndex: 3 }}
        >
            <NavBar />
        </FadeInText>
        <HeroBackground>
            <HeaderContainer>
                <HeaderTitle />
                <HeaderSubtitleSection>
                    <FadeInText animationDelay={"3.5s"} animationDuration={"2s"}>
                        <HeaderSubtitle />
                    </FadeInText>
                </HeaderSubtitleSection>
            </HeaderContainer>
        </HeroBackground>
    </>
);

export default HeaderSection;
