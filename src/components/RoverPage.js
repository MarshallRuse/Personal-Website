import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ProjectPageTemplate from "./ProjectPageTemplate";
import { IconRow, IconBox, SubSubsectionTitle } from "./styles/styledComponents";
import GlowingIcon from "./elements/GlowingIcon";
import { ReactComponent as PythonLogo } from "../assets/logos/colorless/python.svg";
import CloudinaryImage from "./elements/CloudinaryImage";

import finalReport from "../assets/pdf/RoverFollower/499FinalReport-MarshallRuse.pdf";

const PlayerWrapper = styled.div`
    aspect-ratio: 16 / 9;
    position: relative;
`;

const PlayerAndThumbnailWrapper = styled.div`
    position: relative;
`;

const carouselImages = [
    {
        slideComponent: () => (
            <PlayerAndThumbnailWrapper>
                <PlayerWrapper>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/mospnG-yyUk'
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        playing
                        loop
                        width={"100%"}
                        height={"100%"}
                        volume={0}
                        light
                    />
                </PlayerWrapper>
                <CloudinaryImage
                    fileName='RoverFollower/RoverFollowerVideoThumbnail'
                    styling={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
                />
            </PlayerAndThumbnailWrapper>
        ),
    },
    {
        imageSrc: "RoverFollower/RoverFollowerOneFollower",
        description: "A scenario with one Follower Rover",
    },
    {
        imageSrc: "RoverFollower/RoverFollowerPerformanceAnalysis",
        description: "The performance analysis of the Follower, post-run",
    },
    {
        imageSrc: "RoverFollower/RoverFollowerMultipleFollowers",
        description: "A convoy of daisy-chained Leader-Followers",
    },
];

const BackgroundInfo = () => (
    <p>
        My final undergraduate project was to build an autonomous following program, which would direct a
        leader-follower pair of rovers in a simulated environment. The leader's velocity was randomly changed at various
        intervals of time, and the follower had to maintain a precise distance with relatively small room for error. The
        extension to this project was to accomplish the same following behaviour with multiple rovers.
    </p>
);

const FeaturesInfo = () => <CloudinaryImage fileName='RoverFollower/RoverFollowerPoster' styling={{ width: "100%" }} />;

const DevelopmentInfo = () => (
    <>
        <IconRow>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Python' glowColor={"var(--color-python)"}>
                    <PythonLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            The full
            <a
                href={finalReport}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: "cornflowerblue", textDecoration: "none" }}
            >
                Undergraduate Thesis Report
            </a>
            can be found here.
        </p>
        <p>
            The TL;DR is that the autonomous following function is run by a class-based Python program, in which each
            Rover is assigned a data-collection <em> Rover </em>class, and each pair of these classes reports to a{" "}
            <em>Supervisor</em> class, which coordinates the response based on their relative positions and velocities.
            It sends instructions back to the Follower, directing it to stay at a precise distance from its leader.
            Sensory input and communication is achieved through a <strong>TCP Socket communication</strong> protocol.
            This structure can be daisy-chained to an arbitrary number of leader-follower pairs, resulting in autonomous
            convoy behaviour. Tracking and post-run analysis classes were also made to monitor the performance of the
            pairs, the data from which was processed via the <strong>NumPy</strong> library, with{" "}
            <strong>Matplotlib</strong> visualiztions.
        </p>
    </>
);

const RoverPage = () => {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='RoverFollower/marsBackground'
            autoPlayCarousel={false}
            pageTitle='Rover Follower'
            projectSourceLink='https://github.com/MarshallRuse/Rover-Follower-Challenge'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='RoverFollower/marsStriationsBackground'
            featuresBackgroundSmallScreenAlt='RoverFollower/marsCliffBackground'
            featuresInfo={<FeaturesInfo />}
            featuresAltTitle='Poster'
            developmentBackgroundImage='WorkoutLogger/workoutBackground'
            developmentBackgroundImageSmallScreenAlt='WorkoutLogger/curlBackground'
            developmentInfo={<DevelopmentInfo />}
            developmentAltTitle='Report'
        />
    );
};

export default RoverPage;
