import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ArrowBack, GitHub } from "@material-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import breakpoints from "./styles/breakpoints";
import useMediaQuery from "../hooks/useMediaQuery";
import CloudinaryImage from "./elements/CloudinaryImage";
import { SectionTitle, SubsectionTitle, TextContainer } from "./styles/styledComponents";

const PageWrapper = styled.main`
    position: relative;
`;

const SectionContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    ${(props) => props.styling};
`;

const Outline = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const BackArrowWrapper = styled.span`
    position: fixed;
    top: 8vh;
    left: 8vw;
    z-index: 2;

    @media (min-width: ${breakpoints.md}) {
        top: 16vh;
        left: 8vw;
    }

    & a {
        color: #fff;
    }

    & svg {
        filter: drop-shadow(2px 4px 3px rgba(0, 0, 0, 0.4));
        stroke: var(--color-blue-light);
        stroke-width: 0.75;
        stroke-dasharray: 69px;
        stroke-dashoffset: 69px;
        transform: scale(1.5);
    }

    &:hover svg,
    &:focus svg {
        filter: drop-shadow(2px 4px 3px rgba(var(--color-blue-light-raw), 0.5));
        animation: ${Outline} 0.3s ease-out forwards;
    }
`;

const BackgroundImageContainer = styled.div`
    position: relative;
    overflow: hidden;

    &.carouselBackground {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
    }
`;

const ProjectLinksRow = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const ProjectLink = styled.a`
    align-items: center;
    border: none;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: "Orbitron", sans-serif;
    justify-content: center;
    min-height: 60px;
    min-width: 128px;
    padding: 1rem;
    text-decoration: none !important;
    text-transform: uppercase;
    transition: all 0.1s ease-in;

    &:hover {
        filter: brightness(115%);
    }

    &:focus,
    &:active {
        filter: brightness(85%);
    }

    background: ${(props) => props.$disabled && "linear-gradient(45deg, #7B7B7B, #BEBEBE) !important"};
    border: ${(props) => props.$disabled && "1px solid #808080 !important"};
    pointer-events: ${(props) => props.$disabled && "none"};

    span.private {
        font-size: 0.7em;
        margin-left: 5px;
    }
`;
const SourceButton = styled(ProjectLink)`
    background: linear-gradient(300deg, var(--color-blue-light) -9.08%, var(--color-blue-mid) 83.6%);
    border: 2px solid var(--color-blue-light);
`;

const DemoButton = styled(ProjectLink)`
    background: linear-gradient(300deg, var(--color-pink) -9.08%, var(--color-purple) 83.6%);
    border: 2px solid var(--color-pink);
`;

const TextBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    margin: 30px;

    @media (min-width: ${breakpoints.sm}) {
        margin: 80px;
        margin-bottom: 30px;
    }
`;

const SlideContainer = styled.div`
    @media (max-width: ${breakpoints.sm}) {
        margin: 0 auto;
        width: 80%;
    }
`;

const ProjectPageTemplate = ({
    carouselBackgroundImage,
    carouselBackgroundImageSmallScreenAlt,
    autoPlayCarousel = true,
    pageTitle,
    projectSourceLink = "",
    projectDemoLink = "",
    projectLiveLink = "",
    carouselImages = [],
    backgroundInfo,
    backgroundAltTitle = "",
    featuresAltTitle = "",
    featuresBackgroundImage,
    featuresBackgroundImageSmallScreenAlt,
    featuresInfo,
    developmentAltTitle = "",
    developmentBackgroundImage,
    developmentBackgroundImageSmallScreenAlt,
    developmentInfo,
}) => {
    const smallScreen = useMediaQuery(`(max-width: ${breakpoints.sm})`);

    return (
        <PageWrapper>
            <BackArrowWrapper>
                <Link to='/'>
                    <ArrowBack fontSize='large' />
                </Link>
            </BackArrowWrapper>
            <BackgroundImageContainer className='carouselBackground'>
                <CloudinaryImage
                    fileName={
                        carouselBackgroundImageSmallScreenAlt && smallScreen
                            ? carouselBackgroundImageSmallScreenAlt
                            : carouselBackgroundImage
                    }
                    backgroundImage
                />
                <SectionContainer>
                    <TextContainer>
                        <SectionTitle
                            element='h1'
                            styling={{ padding: "60px", textShadow: "2px 2px var(--color-pink)" }}
                        >
                            {pageTitle}
                        </SectionTitle>
                    </TextContainer>
                </SectionContainer>
                <ProjectLinksRow>
                    {projectDemoLink && (
                        <DemoButton
                            $disabled={!projectDemoLink}
                            href={projectDemoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Demo
                        </DemoButton>
                    )}
                    {projectSourceLink && (
                        <SourceButton
                            $disabled={!projectSourceLink || projectSourceLink === "private"}
                            href={projectSourceLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GitHub style={{ marginRight: "5px" }} />
                            Source{projectSourceLink === "private" && <span className='private'> (Private)</span>}
                        </SourceButton>
                    )}
                </ProjectLinksRow>
                <TextContainer>
                    <Carousel
                        autoPlay={autoPlayCarousel}
                        interval={5000}
                        transitionTime={500}
                        infiniteLoop
                        preventMovementUntilSwipeScrollTolerance
                        swipeScrollTolerance={50}
                        showStatus={false}
                        showThumbs={false}
                    >
                        {carouselImages.map((imageObj, index) =>
                            imageObj.slideComponent ? (
                                <imageObj.slideComponent />
                            ) : (
                                <SlideContainer key={`carousel-image-${index}`}>
                                    <CloudinaryImage
                                        fileName={
                                            smallScreen && imageObj.smallScreenAltSrc
                                                ? imageObj.smallScreenAltSrc
                                                : imageObj.imageSrc
                                        }
                                    />
                                    <p className='legend'>{imageObj.description}</p>
                                </SlideContainer>
                            )
                        )}
                    </Carousel>
                </TextContainer>
            </BackgroundImageContainer>
            <SectionContainer styling={{ backgroundColor: "#FAFAFA" }}>
                <SubsectionTitle styling={{ color: "#000" }}>
                    {backgroundAltTitle !== "" ? backgroundAltTitle : "Background"}
                </SubsectionTitle>
                <TextContainer>{backgroundInfo}</TextContainer>
            </SectionContainer>
            <BackgroundImageContainer>
                <CloudinaryImage
                    fileName={
                        featuresBackgroundImageSmallScreenAlt && smallScreen
                            ? featuresBackgroundImageSmallScreenAlt
                            : featuresBackgroundImage
                    }
                    backgroundImage
                />
                <SectionContainer>
                    <TextBackground>
                        <SubsectionTitle>{featuresAltTitle !== "" ? featuresAltTitle : "Features"}</SubsectionTitle>
                        <TextContainer>{featuresInfo}</TextContainer>
                    </TextBackground>
                </SectionContainer>
            </BackgroundImageContainer>
            <BackgroundImageContainer>
                <CloudinaryImage
                    fileName={
                        developmentBackgroundImageSmallScreenAlt && smallScreen
                            ? developmentBackgroundImageSmallScreenAlt
                            : developmentBackgroundImage
                    }
                    backgroundImage
                />
                <SectionContainer>
                    <TextBackground>
                        <SubsectionTitle>
                            {developmentAltTitle !== "" ? developmentAltTitle : "Development"}
                        </SubsectionTitle>
                        <TextContainer>{developmentInfo}</TextContainer>
                    </TextBackground>
                </SectionContainer>
            </BackgroundImageContainer>
        </PageWrapper>
    );
};

export default ProjectPageTemplate;
