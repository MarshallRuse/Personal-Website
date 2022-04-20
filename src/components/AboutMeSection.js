import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { EmailSharp, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { lighten } from "color2k";
import { useInView } from "react-intersection-observer";
import { convertCSSVar } from "./styles/utils";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink, SectionTitle, SubsectionTitle, TextContainer } from "./styles/styledComponents";
import breakpoints from "./styles/breakpoints";

//const SubsectionTitleMotion = motion(SubsectionTitle, { forwardMotionProps: true });
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const AugmentedGlass = css`
    --aug-border-bg: rgba(255, 255, 255, 0.18);
    --aug-inlay-bg: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
`;

const Background = styled.div`
    background: linear-gradient(130deg, var(--color-blue-mid), var(--color-purple) 50%);
    background-size: cover;

    padding: 4rem 0;
    width: 100%;
`;

const GlassPanelWrapper = styled.div`
    margin: 0 auto;
    position: relative;
    width: clamp(250px, 120ch, 100%);

    @media (max-width: ${breakpoints.sm}) {
        width: clamp(250px, 120ch, 90%);
    }
`;

const GlassPanel = styled.div`
    ${AugmentedGlass}

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 80px;
    width: 100%;

    --aug-tl: 30px;
    --aug-tr: 30px;
    --aug-b-extend1: 25%;
    --aug-b-inset1: 20px;
    --aug-bl: 40px;
    --aug-br: 40px;

    @media (min-width: ${breakpoints.sm}) {
        --aug-tl: 40px;
        --aug-tl-inset2: 37px;
        --aug-tl-inset1: 375px;
        padding-top: 2rem;
    }
`;

const Tabs = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 20px;
    width: 90%;

    @media (min-width: ${breakpoints.sm}) {
        margin-top: 0;
        position: absolute;
        width: auto;
    }
`;

const ActiveTab = css`
    --aug-border-bg: ${lighten(`rgba(${convertCSSVar("var(--color-blue-light-raw)")}, 0.28)`, 0.3)};
    --aug-inlay-bg: ${lighten(`rgba(${convertCSSVar("var(--color-blue-light-raw)")}, 0.45)`, 0.3)};
`;

const RightTab = css`
    --aug-br: 33px;
`;

const GlassPanelTab = styled.div`
    ${AugmentedGlass}
    ${(props) => props.$rightTab && RightTab}
    ${(props) => props.$active && ActiveTab}
    color: #fff;
    cursor: pointer;
    flex: 1 0 50%;
    font-family: "Orbitron", sans-serif;
    min-width: 150px;
    padding: 1.5rem;
    text-align: center;

    @media (min-width: ${breakpoints.sm}) {
        min-width: 200px;
    }

    &::before {
        transition: all 0.2s ease-out;
    }

    &:hover {
        --aug-border-bg: ${(props) => !props.$active && "rgba(255, 255, 255, 0.28)"};
        --aug-inlay-bg: ${(props) => !props.$active && "rgba(255, 255, 255, 0.45)"};
    }
`;

const DatedLine = styled.p`
    display: flex;
    & .date {
        margin-left: auto;
    }
`;

const ContactColumn = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    gap: 20px;
    width: max-content;
`;

const contactLinkStyling = {
    alignItems: "center",
    color: "var(--color-yellow)",
    display: "flex",
    gap: "10px",
};

const FadeDownText = ({ children, key }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <motion.span
            ref={ref}
            key={key}
            variants={variants}
            initial='closed'
            animate={inView ? "open" : "closed"}
            exit={{ opacity: 0, x: -50 }}
            style={{ display: "block" }}
        >
            {children}
        </motion.span>
    );
};

const AboutMeSection = () => {
    const largeScreen = useMediaQuery(`(min-width: ${breakpoints.sm})`);
    const [tabSelected, setTabSelected] = useState(0);

    return (
        <Background id='about-me-section'>
            <GlassPanelWrapper>
                {largeScreen && (
                    <Tabs>
                        <GlassPanelTab
                            data-augmented-ui='both'
                            $active={tabSelected === 0}
                            onClick={() => setTabSelected(0)}
                        >
                            TL;DR
                        </GlassPanelTab>
                        <GlassPanelTab
                            data-augmented-ui='br-clip both'
                            $rightTab
                            $active={tabSelected === 1}
                            onClick={() => setTabSelected(1)}
                        >
                            Self-Indulgent
                        </GlassPanelTab>
                    </Tabs>
                )}

                <GlassPanel
                    data-augmented-ui={`${
                        largeScreen ? "tl-clip-inset" : "tl-2-clip-x"
                    }  tr-2-clip-x b-clip-xy bl-2-clip-y br-2-clip-y both`}
                >
                    <SectionTitle element='h3' styling={{ paddingTop: "5rem", paddingBottom: 0 }}>
                        About Me
                    </SectionTitle>
                    {!largeScreen && (
                        <Tabs>
                            <GlassPanelTab
                                data-augmented-ui='both'
                                $active={tabSelected === 0}
                                onClick={() => setTabSelected(0)}
                            >
                                TL;DR
                            </GlassPanelTab>
                            <GlassPanelTab
                                data-augmented-ui='both'
                                $rightTab
                                $active={tabSelected === 1}
                                onClick={() => setTabSelected(1)}
                            >
                                Self-Indulgent
                            </GlassPanelTab>
                        </Tabs>
                    )}
                    <TextContainer
                        $styling={{
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.5)",
                            maxWidth: "90%",
                        }}
                    >
                        <AnimatePresence>
                            <FadeDownText key='fd-text-1'>
                                <SubsectionTitle styling={{ textAlign: "left" }}>Education</SubsectionTitle>
                            </FadeDownText>
                            {tabSelected === 0 ? (
                                <>
                                    <FadeDownText key='fd-text-2'>
                                        <DatedLine>
                                            Queen's University - Kingston, Ontario{" "}
                                            <span className='date'>09/2012 - 04/2016</span>
                                        </DatedLine>
                                        <NavLink
                                            href='https://www.queensu.ca/artsci/programs-and-degrees/natural-physical-sciences/life-sciences'
                                            target='_blank'
                                            style={{
                                                marginLeft: "2em",
                                                marginBottom: "2em",
                                            }}
                                        >
                                            Bachelor of Sciences, Honours - Life Science
                                        </NavLink>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-3'>
                                        <DatedLine>
                                            Queen's University - Kingston, Ontario
                                            <span className='date'>09/2016 - 04/2019</span>
                                        </DatedLine>
                                        <NavLink
                                            href='https://www.cs.queensu.ca/undergraduate/programs/specializations/biomedical-computing.php'
                                            target='_blank'
                                            style={{
                                                marginLeft: "2em",
                                                marginBottom: "2em",
                                            }}
                                        >
                                            Bachelor of Computing, Honours - Biomedical Computing
                                        </NavLink>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-4'>
                                        <SubsectionTitle styling={{ textAlign: "left", pointerEvents: "all" }}>
                                            <NavLink href='#skills-section' style={{ fontFamily: "inherit" }}>
                                                Skills
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink href='#projects-section' style={{ fontFamily: "inherit" }}>
                                                Projects
                                            </NavLink>
                                        </SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-5'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>What's Next?</SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-6'>
                                        <p>
                                            I'm always looking to learn new things. For the near future, I've got my eye
                                            on:
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-7'>
                                        <ul>
                                            <li>
                                                <NavLink href='https://graphql.org/' target='_blank'>
                                                    GraphQL
                                                </NavLink>{" "}
                                                for more efficient and flexible APIs
                                            </li>
                                            <li>
                                                <NavLink href='https://nextjs.org/' target='_blank'>
                                                    Next.js
                                                </NavLink>{" "}
                                                for Server-Side Rendering (SSR) and Static Site Generation (SSG)
                                            </li>
                                            <li>
                                                <NavLink href='https://svelte.dev/' target='_blank'>
                                                    Svelte
                                                </NavLink>{" "}
                                                - embrace the excitement of{" "}
                                                <NavLink
                                                    href='https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks'
                                                    target='_blank'
                                                >
                                                    this most beloved new framework
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href='https://kit.svelte.dev/' target='_blank'>
                                                    SvelteKit
                                                </NavLink>{" "}
                                                for Svelte SSR and SSG
                                            </li>
                                            <li>
                                                Completion of{" "}
                                                <NavLink href='https://threejs-journey.com/' target='_blank'>
                                                    Bruno Simon's Three.js Journey
                                                </NavLink>{" "}
                                                to bring my love of 3D modelling and art into the browser
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'
                                                    target='_blank'
                                                >
                                                    React Three Fiber
                                                </NavLink>{" "}
                                                for intergrating Three.js into React
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://www.blender.org/download/releases/3-1/'
                                                    target='_blank'
                                                >
                                                    Blender 3
                                                </NavLink>{" "}
                                                for 3D modelling
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://www.unrealengine.com/en-US/unreal-engine-5'
                                                    target='_blank'
                                                >
                                                    Unreal Engine 5
                                                </NavLink>{" "}
                                                for video making
                                            </li>
                                        </ul>
                                    </FadeDownText>
                                </>
                            ) : (
                                <>
                                    <FadeDownText key='fd-text-8'>
                                        <p>I attended Queen's University in Kingston, Ontario from 2012 to 2019.</p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-9'>
                                        <p>
                                            In the first four years I obtained a{" "}
                                            <NavLink
                                                href='https://www.queensu.ca/artsci/programs-and-degrees/natural-physical-sciences/life-sciences'
                                                target='_blank'
                                            >
                                                BScH in Life Sciences
                                            </NavLink>
                                            , with my primary focus being on neurology. In the last year of that degree
                                            I took a couple of introductory computer science courses, and ended up
                                            falling in love with programming. Finding myself completely engrossed, the
                                            time slipping-by unnoticed as I became enthralled by writing and piecing
                                            together functions to build small programs. I had studied neurotransmitters,
                                            but learning about them hadn't quite given me the dopamine-rush that
                                            squashing that last bug and having a working final product did. So, in my
                                            last year of that degree, I decided I needed to change course and pursue a
                                            career in software development.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-10'>
                                        <p>
                                            Queen's offered an Honours degree in Computing with a Biomedical Computing
                                            specialization. I saw this as a great oppurtunity to combine my previous
                                            love with my new passion, and to contextualize and reinforce my new learning
                                            with past domain-knowledge. For the next three years, I took primarily
                                            computer science courses focused on algorithms, data-structures, and
                                            programming paradigms, as well as a few with cool life science inflections
                                            (Bioinformatics and Computer-Integrated Surgery come to mind). In 2019, I
                                            graduated with a{" "}
                                            <NavLink
                                                href='https://www.cs.queensu.ca/undergraduate/programs/specializations/biomedical-computing.php'
                                                target='_blank'
                                            >
                                                BCmpH in Biomedical Computing
                                            </NavLink>
                                            .
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-11'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>
                                            Skills and Projects
                                        </SubsectionTitle>
                                        <p>
                                            <NavLink href='#skills-section'>They're right above this</NavLink>, in case
                                            you somehow missed them. I'm not being snide, they just took some effort to
                                            put together so I'm shamelessly redirecting you there.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-12'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>What's Next?</SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-13'>
                                        <p>
                                            One of the things I love about web development is that there are constant
                                            advancements in the languages and frameworks, and there are always
                                            opportunities to learn new and improved ways of doing things.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-14'>
                                        <p>
                                            Two of the most immediate skills I'll be acquiring are{" "}
                                            <NavLink href='https://graphql.org/' target='_blank'>
                                                GraphQL
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink href='https://nextjs.org/' target='_blank'>
                                                Next.js
                                            </NavLink>{" "}
                                            to modernize my API-querying skills and to reap all of the benefits that
                                            come with Server-Side Rendering / statically generating my React
                                            applications.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-15'>
                                        <p>
                                            I have also heard really good things about{" "}
                                            <NavLink href='https://svelte.dev/' target='_blank'>
                                                Svelte
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink href='https://kit.svelte.dev/' target='_blank'>
                                                SvelteKit
                                            </NavLink>{" "}
                                            from former predominantly-React developers, so want to give that a shot as
                                            the buzz around is that it's the next big framework.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText key='fd-text-16'>
                                        <p>
                                            On the more fun and purely-aesthetic side of things, I am enrolled in{" "}
                                            <NavLink href='https://threejs-journey.com/' target='_blank'>
                                                Bruno Simon's Three.js Journey
                                            </NavLink>{" "}
                                            course to learn to master 3D visuals and animations in JavaScript. I'm sure
                                            following that I'll want to learn how to integrate it into React using{" "}
                                            <NavLink
                                                href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'
                                                target='_blank'
                                            >
                                                React Three Fiber
                                            </NavLink>
                                            . Relatedly (but not directly to web development),{" "}
                                            <NavLink
                                                href='https://www.blender.org/download/releases/3-1/'
                                                target='_blank'
                                            >
                                                Blender 3
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink
                                                href='https://www.unrealengine.com/en-US/unreal-engine-5'
                                                target='_blank'
                                            >
                                                Unreal Engine 5
                                            </NavLink>{" "}
                                            just came out, and I'm super-excited to lose myself for a while learning and
                                            playing around with those to explore my 3D modelling and art hobby.
                                        </p>
                                    </FadeDownText>
                                </>
                            )}
                        </AnimatePresence>
                    </TextContainer>
                    <SectionTitle element='h3' id='contact-section'>
                        Contact
                    </SectionTitle>
                    <ContactColumn>
                        <NavLink href='mailto:ruse.marshall@gmail.com' target='_blank' $styling={contactLinkStyling}>
                            <EmailSharp />
                            ruse.marshall@gmail.com
                        </NavLink>
                        <NavLink href='https://github.com/MarshallRuse' target='_blank' $styling={contactLinkStyling}>
                            <GitHub />
                            MarshallRuse
                        </NavLink>
                        <NavLink
                            href='https://www.linkedin.com/in/marshall-ruse/'
                            target='_blank'
                            $styling={contactLinkStyling}
                        >
                            <LinkedIn />
                            marshall-ruse
                        </NavLink>
                        <NavLink
                            href='https://www.instagram.com/marshy_roses/'
                            target='_blank'
                            $styling={contactLinkStyling}
                        >
                            <Instagram />
                            marshy_roses
                        </NavLink>
                    </ContactColumn>
                </GlassPanel>
            </GlassPanelWrapper>
        </Background>
    );
};

export default AboutMeSection;
