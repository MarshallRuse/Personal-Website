import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Paper, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ArrowBack, GitHub } from "@material-ui/icons";
import Img from "react-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import breakpoints from "./styles/breakpoints";
import useMediaQuery from "../hooks/useMediaQuery";
import CloudinaryImage from "./elements/CloudinaryImage";
import { SectionTitle, SubsectionTitle } from "./styles/styledComponents";

// Logos
import ReactLogo from "../assets/logos/react.svg";
import MaterialUILogo from "../assets/logos/material-ui.svg";
import FirebaseLogo from "../assets/logos/firebase.svg";

const TextContainer = styled.div`
    font-family: "Jura", sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 2;
    margin: 30px auto;
    padding: 0 20px;
    width: clamp(250px, 80ch, 100%);
`;

const useStyles = makeStyles((theme) => ({
    backgroundImageContainer: {
        position: "relative",
        overflow: "hidden",
    },

    closeDialogButton: {
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: "10px",
        width: "100%",
    },
    img: {
        height: "50%",
        width: "auto",
    },
    link: {
        alignItems: "center",
        color: "#fff",
        display: "flex",
        textDecoration: "none",
        width: "100%",
    },
    linkRow: {
        alignItems: "center",
        color: "#fff",
        display: "flex",
        padding: "10px",
        textDecoration: "none",
    },
    linkRow__leftLink: {
        justifyContent: "flex-end",
        paddingRight: "10px",
    },
    linkRow__rightLink: {
        justifyContent: "flex-start",
        paddingLeft: "10px",
    },
    listText: {
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    logoImg: {
        height: "auto",
        width: "80%",
    },
    logoRow: {
        backgroundColor: "#fff",
        paddingBottom: "20px",
        paddingTop: "20px",
    },
    outsidePaperText: {
        padding: "50px",
    },
    textPadding: {
        padding: "20px",
    },
    textBackground: {
        backgroundColor: `rgba(0,0,0,0.7)`,
        color: "#fff",
        padding: "10px",
        marginBottom: "20px",
        [theme.breakpoints.down("xs")]: {
            margin: "30px",
        },
        [theme.breakpoints.up("sm")]: {
            margin: "80px",
        },
    },
    slideContainer: {
        [theme.breakpoints.down("sm")]: {
            margin: "0 auto",
            width: "80%",
        },
    },
    carouselBackground: {
        backgroundImage: ["linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))"],
    },
    titleRow: {
        alignItems: "center",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "30px",
    },
}));

const ProjectPageTemplate = ({
    carouselBackgroundImage,
    carouselBackgroundImageSmallScreenAlt,
    pageTitle,
    projectSourceLink = "",
    projectDemoLink = "",
    projectLiveLink = "",
    carouselImages = [],
    backgroundInfo,
    featuresBackgroundImage,
    featuresBackgroundImageSmallScreenAlt,
    featuresInfo,
    developmentBackgroundImage,
    developmentBackgroundImageSmallScreenAlt,
    developmentIcons,
    developmentInfo,
}) => {
    const classes = useStyles();
    const smallScreen = useMediaQuery(`(max-width: ${breakpoints.sm})`);

    return (
        <>
            <div className={`${classes.backgroundImageContainer} ${classes.carouselBackground}`}>
                <CloudinaryImage
                    fileName={
                        carouselBackgroundImageSmallScreenAlt && smallScreen
                            ? carouselBackgroundImageSmallScreenAlt
                            : carouselBackgroundImage
                    }
                    backgroundImage
                />
                <Grid container justify='center'>
                    <Grid item xs={3} className={classes.titleRow}>
                        <Link to='/' className={classes.link}>
                            <ArrowBack />
                        </Link>
                    </Grid>
                    <Grid item xs={6} className={classes.titleRow}>
                        <SectionTitle element='h1'>{pageTitle}</SectionTitle>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} className={classes.linkRow}>
                        <a
                            href={projectDemoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={[classes.link, classes.linkRow__leftLink].join(" ")}
                        >
                            <Button variant='contained' style={{ minWidth: "123px" }}>
                                Demo
                            </Button>
                        </a>
                        <a
                            href={projectSourceLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={[classes.link, classes.linkRow__rightLink].join(" ")}
                        >
                            <Button variant='contained' style={{ minWidth: "123px" }}>
                                <GitHub style={{ marginRight: "5px" }} />
                                Source
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={10} md={9}>
                        <Carousel
                            //autoPlay
                            interval={5000}
                            transitionTime={500}
                            infiniteLoop
                            preventMovementUntilSwipeScrollTolerance
                            swipeScrollTolerance={50}
                            showStatus={false}
                        >
                            {carouselImages.map((imageObj, index) => (
                                <div key={`carousel-image-${index}`} className={classes.slideContainer}>
                                    <CloudinaryImage
                                        fileName={`${imageObj.imageSrc}${smallScreen ? "" : "Landscape"}`}
                                        className={classes.carouselImages}
                                    />
                                    <p className='legend'>{imageObj.description}</p>
                                </div>
                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <SubsectionTitle styling={{ color: "#000" }}>Background</SubsectionTitle>
                    <TextContainer>{backgroundInfo}</TextContainer>
                </Grid>
            </Grid>
            <div className={classes.backgroundImageContainer}>
                <CloudinaryImage
                    fileName={
                        featuresBackgroundImageSmallScreenAlt && smallScreen
                            ? featuresBackgroundImageSmallScreenAlt
                            : featuresBackgroundImage
                    }
                    backgroundImage
                />
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.textBackground}>
                            <SubsectionTitle>Features</SubsectionTitle>
                            <TextContainer>{featuresInfo}</TextContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.backgroundImageContainer}>
                <CloudinaryImage
                    fileName={
                        developmentBackgroundImageSmallScreenAlt && smallScreen
                            ? developmentBackgroundImageSmallScreenAlt
                            : developmentBackgroundImage
                    }
                    backgroundImage
                />
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.textBackground}>
                            <SubsectionTitle>Development</SubsectionTitle>
                            <TextContainer>{developmentInfo}</TextContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default ProjectPageTemplate;
