import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

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

// Images
import SouthernOntarioAnimatedSVG from "../assets/images/HomePage/svg/SouthernOntarioAnimated.svg";

// Sections
import AboutMeSection from "./AboutMeSection.js";
import BlogSection from "./BlogSection";
import SkillsSection from "./SkillsSection";

// Elements
import HeaderSubtitle from "./elements/HeaderSubtitle";
import NavBar from "./elements/NavBar";
import { SectionTitle } from "./styles/styledComponents";
import HeroBackground from "./elements/HeroBackground";
import HeaderTitle from "./elements/HeaderTitle";
import FadeInText from "./elements/FadeInText";
import MatrixBG from "./elements/MatrixBG";
import ProjectCard from "./elements/ProjectCard";

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

const useStyles = makeStyles((theme) => ({
    link: {
        color: "inherit",
        textDecoration: "none",
    },
    projectBox: {
        display: "flex",
        justifyContent: "center",
    },
    projectsSection: {
        minHeight: "100vh",
        position: "relative",
    },
    sectionSpacing: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <main style={{ backgroundColor: "#000" }}>
            <FadeInText
                animationDelay={"3.5s"}
                animationDuration={"2s"}
                styling={{ position: "fixed", width: "100%", zIndex: 3 }}
            >
                <NavBar />
            </FadeInText>
            {/* Hero unit */}
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
            <SkillsSection />
            <div id='projects-section' className={classes.projectsSection}>
                <MatrixBG fps={30} />
                <Container className={classes.sectionSpacing} maxWidth='xl' style={{ paddingTop: "360px" }}>
                    <SectionTitle element='h3'>Projects</SectionTitle>
                    <Grid container spacing={4} justify='space-apart'>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
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
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <BlogSection />
            <AboutMeSection />
        </main>
    );
};

export default HomePage;
