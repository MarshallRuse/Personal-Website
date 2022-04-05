import React from "react";
import styled from "styled-components";
import { ReactComponent as Css3Logo } from "../assets/logos/colorless/css3.svg";
import { ReactComponent as ExpressLogo } from "../assets/logos/colorless/express.svg";
import { ReactComponent as FirebaseLogo } from "../assets/logos/colorless/firebase.svg";
import { ReactComponent as HandlebarsLogo } from "../assets/logos/colorless/handlebars.svg";
import { ReactComponent as Html5Logo } from "../assets/logos/colorless/html5.svg";
import { ReactComponent as JavaLogo } from "../assets/logos/colorless/java.svg";
import { ReactComponent as JavaScriptLogo } from "../assets/logos/colorless/javascript.svg";
import { ReactComponent as MaterialUILogo } from "../assets/logos/colorless/material-ui.svg";
import { ReactComponent as MongoDBLogo } from "../assets/logos/colorless/mongodb.svg";
import { ReactComponent as NodejsLogo } from "../assets/logos/colorless/nodejs.svg";
import { ReactComponent as PythonLogo } from "../assets/logos/colorless/python.svg";
import { ReactComponent as ReactLogo } from "../assets/logos/colorless/react.svg";
import { ReactComponent as ReduxLogo } from "../assets/logos/colorless/redux.svg";
import { ReactComponent as SassLogo } from "../assets/logos/colorless/sass.svg";
import breakpoints from "./styles/breakpoints.js";
import GlowingIcon from "./elements/GlowingIcon.js";
import { GlowingText } from "./styles/Mixins";
import { convertCSSVar } from "./styles/utils";

const Container = styled.section`
    background: linear-gradient(179deg, var(--color-blue-dark) 10%, var(--color-blue-light));
    box-shadow: 0px 130px 60px 60px var(--color-blue-light);
    padding: 120px 24px;
    position: relative;
    z-index: 2;
`;

const SectionHeader = styled.h3`
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.167;
    margin: 0;
    padding-top: 1em;
    padding-bottom: 2em;
    text-align: center;
    ${GlowingText}
`;

const SectionSubheader = styled.h4`
    color: #fff;
    font-family: "Orbitron", sans-serif;
    flex: 1 0 100%;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0;
    padding: 20px 0;
    text-align: center;
`;

const IconRow = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1.5rem;
    margin-bottom: 4rem;
    row-gap: 2rem;
`;

const IconBox = styled.div`
    ${(props) => props.styling};
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
    padding: 1rem;

    @media (min-width: ${breakpoints.sm}) {
        flex-basis: 25%;
        flex-grow: 0;
        max-width: 25%;
    }

    @media (min-width: ${breakpoints.md}) {
        flex-basis: 16.67%;
        flex-grow: 0;
        max-width: 16.67%;
    }
    @media (min-width: ${breakpoints.lg}) {
        flex-basis: 12.5%;
        flex-grow: 0;
        max-width: 12.5%;
    }
`;

// hero background: make linear gradient linear-gradient(to bottom,#2a2552,60%,transparent, var(--color-blue-dark))

// projects section:

// 	increase top padding

const SkillsSection = () => {
    return (
        <Container>
            <SectionHeader id='skills-section' glowColor={convertCSSVar("var(--color-pink)")}>
                Skills
            </SectionHeader>
            <IconRow>
                <SectionSubheader>Languages</SectionSubheader>
                <IconBox>
                    <GlowingIcon title='HTML5' glowColor={"var(--color-html5)"}>
                        <Html5Logo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='CSS3' glowColor={"var(--color-css3)"}>
                        <Css3Logo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='JavaScript' glowColor={"var(--color-javascript)"}>
                        <JavaScriptLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Python' glowColor={"var(--color-python)"}>
                        <PythonLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Java' glowColor={"var(--color-java)"}>
                        <JavaLogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
            <IconRow>
                <SectionSubheader>Frameworks</SectionSubheader>
                <IconBox>
                    <GlowingIcon title='React' glowColor={"var(--color-react)"}>
                        <ReactLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Redux' glowColor={"var(--color-redux)"} strokeWidth={4}>
                        <ReduxLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Express' glowColor={"var(--color-express)"}>
                        <ExpressLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='MongoDB' glowColor={"var(--color-mongodb)"}>
                        <MongoDBLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='NodeJS' glowColor={"var(--color-nodejs)"} strokeWidth={4}>
                        <NodejsLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Firebase' glowColor={"var(--color-firebase)"} strokeWidth={4}>
                        <FirebaseLogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
            <IconRow>
                <SectionSubheader>Libraries</SectionSubheader>
                <IconBox styling={{ alignSelf: "stretch" }}>
                    <GlowingIcon title='Handlebars' glowColor={"var(--color-handlebars)"} strokeWidth={8}>
                        <HandlebarsLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='MUI' glowColor={"var(--color-materialui)"}>
                        <MaterialUILogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Sass' glowColor={"var(--color-sass)"}>
                        <SassLogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
        </Container>
    );
};

export default SkillsSection;
