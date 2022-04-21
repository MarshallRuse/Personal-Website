import React from "react";
import styled from "styled-components";
import breakpoints from "./styles/breakpoints.js";
// Logos
import {
    ExpressLogo,
    FirebaseLogo,
    JavaLogo,
    MaterialUILogo,
    MatplotlibLogo,
    MongoDBLogo,
    MySQLLogo,
    NodejsLogo,
    NumpyLogo,
    PythonLogo,
    ReactLogo,
    ReduxLogo,
    StyledComponentsLogo,
} from "../assets/logos/logoIcons.js";

import { SectionTitle } from "./styles/styledComponents";
import MatrixBG from "./elements/MatrixBG";
import ProjectCard from "./elements/ProjectCard";

const StyledSection = styled.section`
    min-height: 100vh;
    position: relative;
`;

const ProjectsContainer = styled.div`
    box-sizing: border-box;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 64px;
    padding-top: 360px;
    width: 100%;

    @media (min-width: ${breakpoints.sm}) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const GridContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin: -16px;
    width: calc(100% + 32px);
`;

const GridItem = styled.div`
    box-sizing: border-box;
    flex-basis: 100%;
    flex-grow: 0;
    margin: 0;
    max-width: 100%;

    @media (min-width: ${breakpoints.md}) {
        flex-basis: 50%;
        max-width: 50%;
    }

    @media (min-width: ${breakpoints.lg}) {
        flex-basis: 33.333333%;
        max-width: 33.333333%;
    }
`;

const ProjectBox = styled(GridItem)`
    display: flex;
    justify-content: center;
`;

const ProjectsSection = () => (
    <StyledSection id='projects-section'>
        <MatrixBG fps={30} />
        <ProjectsContainer>
            <SectionTitle element='h3'>Projects</SectionTitle>
            <GridContainer>
                <ProjectBox>
                    <ProjectCard
                        cardImage='SnazzyStock/snazzyStockCardImage'
                        cardTitle='Snazzy Stock'
                        cardSubtitle='SnazzyStones inventory management system'
                        projectPageLink='projects/SnazzyStock'
                        sourceLink=''
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "materialui", icon: MaterialUILogo },
                            { class: "express", icon: ExpressLogo },
                            { class: "nodejs", icon: NodejsLogo },
                            { class: "mysql", icon: MySQLLogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='RotationCoordinatorReportFormatter/teamOfDoctors'
                        cardTitle='Rotation Coordinator Report Formatter'
                        cardTitleStyling={{ fontSize: "28px" }}
                        cardSubtitle='Group and filter rotation residents'
                        cardSubtitleStyling={{ fontSize: "22px" }}
                        projectPageLink='projects/RotationCoordinatorReportFormatter'
                        demoLink='https://rotation-coordinator-report-formatter.netlify.app'
                        sourceLink='https://github.com/MarshallRuse/rotation-coordinator-data-formatter'
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "materialui", icon: MaterialUILogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='Home/girl-barbell-curls'
                        cardTitle='Workout Logger'
                        cardSubtitle='Record reps, sets, and weights'
                        projectPageLink='projects/WorkoutLogger'
                        demoLink='https://marshalls-workout-logger.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/workout-logger'
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "nodejs", icon: NodejsLogo },
                            { class: "express", icon: ExpressLogo },
                            { class: "firebase", icon: FirebaseLogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='Home/cityscape-girl-night'
                        cardTitle='Trip Tracker'
                        cardSubtitle='Track expenses in 30 currencies'
                        projectPageLink='projects/TripTracker'
                        demoLink='https://marshall-trip-tracker-app.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/TripExpensesTracker'
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "materialui", icon: MaterialUILogo },
                            { class: "express", icon: ExpressLogo },
                            { class: "nodejs", icon: NodejsLogo },
                            { class: "mongodb", icon: MongoDBLogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='Home/bingo'
                        cardTitle='Bingo Party'
                        cardSubtitle='Bingo in a browser'
                        projectPageLink='/projects/BingoParty'
                        demoLink='https://marshall-bingo-party-app.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/Bingo-App-React'
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "redux", icon: ReduxLogo },
                            { class: "express", icon: ExpressLogo },
                            { class: "nodejs", icon: NodejsLogo },
                            { class: "mongodb", icon: MongoDBLogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='Home/curiosity-rover-mars'
                        cardTitle='Rover Follower'
                        cardSubtitle='Automated convoy of simulated Mars rovers'
                        projectPageLink='/projects/RoverFollower'
                        demoLink='https://youtu.be/mospnG-yyUk'
                        sourceLink='https://github.com/MarshallRuse/Rover-Follower-Challenge'
                        stackIcons={[
                            { class: "python", icon: PythonLogo },
                            { class: "numpy", icon: NumpyLogo },
                            { class: "matplotlib", icon: MatplotlibLogo },
                            { class: "java", icon: JavaLogo },
                        ]}
                    />
                </ProjectBox>
                <ProjectBox>
                    <ProjectCard
                        cardImage='Home/PersonalWebsitePortrait'
                        cardTitle='marshallruse.com'
                        cardTitleStyling={{ fontSize: "32px" }}
                        cardSubtitle='This website!'
                        sourceLink='https://github.com/MarshallRuse/Personal-Website'
                        stackIcons={[
                            { class: "react", icon: ReactLogo },
                            { class: "materialui", icon: MaterialUILogo },
                            { class: "styledcomponents", icon: StyledComponentsLogo },
                        ]}
                    />
                </ProjectBox>
            </GridContainer>
        </ProjectsContainer>
    </StyledSection>
);

export default ProjectsSection;
