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
import GlowingIcon from "./elements/GlowingIcon.js";
import { IconRow, IconBox, SubSubsectionTitle } from "./styles/styledComponents";
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
                <SubSubsectionTitle element='h4'>Languages</SubSubsectionTitle>
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
                <SubSubsectionTitle element='h4'>Frameworks</SubSubsectionTitle>
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
                <SubSubsectionTitle element='h4'>Libraries</SubSubsectionTitle>
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
