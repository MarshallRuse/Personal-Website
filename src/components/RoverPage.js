import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogContent,
    Grid, 
    Paper,
    Tooltip,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, Close, GitHub } from '@material-ui/icons';
import Img from 'react-image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import Lightbox from 'react-image-lightbox';

// Images
import RoverFollowerVideoThumbnail from '../assets/images/RoverFollower/RoverFollowerVideoThumbnail.png';
import RoverFollowerOneFollower from '../assets/images/RoverFollower/RoverFollowerOneFollower.png'
import RoverFollowerPerformanceAnalysis from '../assets/images/RoverFollower/RoverFollowerPerformanceAnalysis.png'
import RoverFollowerMultipleFollowers from '../assets/images/RoverFollower/RoverFollowerMultipleFollowers.png'

import RoverFollowerPoster from '../assets/images/RoverFollower/RoverFollowerPoster.jpg';

import marsCliffBackground from '../assets/images/RoverFollower/marsCliffBackground.jpg';
import marsBackground from '../assets/images/RoverFollower/marsBackground.png';
import marsStriationsBackground from '../assets/images/RoverFollower/marsStriationsBackground.jpg';
import curiosityBackground from '../assets/images/RoverFollower/curiosityBackground.jpg';

import finalReport from '../assets/pdf/RoverFollower/499FinalReport-MarshallRuse.pdf';

// Logos
import PythonLogo from '../assets/logos/python.svg';


const useStyles = makeStyles(theme => ({
    closeDialogButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: '10px', 
        width: '100%'
    },
    developmentSectionBackground: {
        backgroundImage: `url(${ curiosityBackground })`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center'
    },
    featuresBackground: {
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${ marsCliffBackground })`,
        },
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${ marsStriationsBackground })`
        },
        backgroundSize: 'cover'
    },
    hiddenImg: {
        display: ['none', '!important'] 
    },
    img: {
        height: '50%',
        width: 'auto'
    },
    link: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        textDecoration: 'none',
        width: '100%'
    },
    linkRow: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        textDecoration: 'none',
    },
    linkRow__singleLink: {
        justifyContent: 'center',
    },
    listText: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    logoImg: {
        height: 'auto',
        width: '50%'
    },
    logoRow: {
        backgroundColor: '#fff',
        paddingBottom: '20px',
        paddingTop: '20px'
    },
    outsidePaperText: {
        padding: '50px'
    },
    pageText: {
        padding: '20px'
    },
    paper: {
        backgroundColor: `rgba(0,0,0,0.7)`,
        color: '#fff',
        padding: '10px',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '30px'
        },
        [theme.breakpoints.up('sm')]: {
            margin: '80px'
        }
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    slideShowBackground: {
        backgroundImage: ['linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))', `url(${ marsBackground })`],
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            backgroundPositionX: 'center'
        }
    },
    titleRow: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
    }
}));

const images = {
    RoverFollowerVideoThumbnail,
    RoverFollowerOneFollower,
    RoverFollowerPerformanceAnalysis,
    RoverFollowerMultipleFollowers,
    RoverFollowerPoster
}

const RoverPage = () => {
    const classes = useStyles();

    const [clickedImage, setClickedImage] = useState('');
    const [clickedImageAlt, setClickedImageAlt] = useState('');
    const [imageDialogOpen, setImageDialogOpen] = useState(false);

    const handleCarouselImageClicked = (index, element) => {
        const imageName = element.props.children[0].props.image;
        const imageAlt = element.props.children[0].props.alt;
        setClickedImage(images[imageName]);
        setClickedImageAlt(imageAlt);
        setImageDialogOpen(true);
    }

    const handleImageClicked = (imageName, imageAlt) => {
        setClickedImage(images[imageName]);
        setClickedImageAlt(imageAlt);
        setImageDialogOpen(true);
    }

    const handleCloseImageDialog = () => {
        setClickedImage('');
        setClickedImageAlt('');
        setImageDialogOpen(false);
    }


    useEffect(() => {
        const thumbs = document.getElementsByClassName('thumb');
        console.log('thumbs,', thumbs);
        if (thumbs.length > 0){
            thumbs[0].style.border = 'none';
        }
    }, [])
    
    
    return (
        <>
            <div className={classes.slideShowBackground}>
                <Grid container justify='center'>
                    <Grid item xs={3} className={classes.titleRow}>
                        <Link to='/' className={classes.link} >
                            <ArrowBack />
                        </Link>
                    </Grid>
                    <Grid item xs={6} className={classes.titleRow}>
                        <Typography variant='h4' align='center'>
                            Rover Follower
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} className={classes.linkRow}>
                        <a 
                            href='https://github.com/MarshallRuse/Rover-Follower-Challenge'
                            target='_blank'
                            rel='noopener noreferrer' 
                            className={[classes.link, classes.linkRow__singleLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}} >
                                <GitHub style={{marginRight: '5px'}} />
                                Source
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={10} md={9}>
                        <Carousel 
                            interval={5000} 
                            transitionTime={500} 
                            showStatus={false}
                            onClickItem={handleCarouselImageClicked}
                        >
                            <div>
                                <div className={classes.playerWrapper}>
                                    <ReactPlayer 
                                        url='https://www.youtube.com/embed/mospnG-yyUk'
                                        className={classes.reactPlayer}
                                        playing
                                        loop
                                        width={'100%'}
                                        height={'100%'}
                                        volume={0}
                                    />
                                </div>
                                <img 
                                    src={RoverFollowerVideoThumbnail} 
                                    image='RoverFollowerVideoThumbnail'
                                    alt=''
                                    className={[classes.img, classes.hiddenImg].join(' ')}
                                />
                            </div>
                            <div>
                                <img 
                                    src={RoverFollowerOneFollower} 
                                    image='RoverFollowerOneFollower'
                                    alt='Rover with one Follower' 
                                    className={classes.img}    
                                />
                                <p className="legend">A scenario with one Follower Rover</p>
                            </div>
                            <div>
                                <img 
                                    src={RoverFollowerPerformanceAnalysis} 
                                    image='RoverFollowerPerformanceAnalysis'
                                    alt='Rover performance analysis' 
                                    className={classes.img}    
                                />
                                <p className="legend">The performance analysis of the Follower, post-run</p>
                            </div>
                            <div>
                                <img 
                                    src={RoverFollowerMultipleFollowers} 
                                    image='RoverFollowerMultipleFollowers'
                                    alt='Rovers with multiple Followers' 
                                    className={classes.img}    
                                />
                                <p className="legend">A convoy of daisy-chained Leader-Followers</p>
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant='body1'className={classes.outsidePaperText}>
                        My final undergraduate project was to build an autonomous following program, which would
                        direct a leader-follower pair of rovers in a simulated environment.  The leader's velocity was 
                        randomly changed at various intervals of time, and the follower had to maintain
                        a precise distance with relatively small room for error. The extension to this project
                        was to accomplish the same following behaviour with multiple rovers.  
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.featuresBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant='h5' align='center' className={classes.pageText}>
                            Poster
                        </Typography>
                        <Img 
                            src={RoverFollowerPoster} 
                            alt='Rover Poster'
                            style={{width: '100%'}}
                            onClick={() => handleImageClicked('RoverPoster', 'Rover Poster')}
                        />
                                      
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.developmentSectionBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' align='center' className={classes.pageText}>
                                Report
                            </Typography>
                            <Grid container justify='center' alignItems='center' className={classes.logoRow}>
                                <Tooltip title='Python' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={PythonLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                            </Grid>
                            <Typography variant='body1' className={classes.pageText}>
                                The full &nbsp;
                                <a 
                                    href={finalReport} 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    style={{color: 'cornflowerblue', textDecoration: 'none'}}
                                >
                                    Undergraduate Thesis Report
                                </a>
                                &nbsp; can be found here.  
                                <br />The TL;DR is that the autonomous following function is run by a class-based Python
                                program, in which each Rover is assigned a data-collection <em>Rover</em>class, and each pair of these 
                                classes reports to a <em>Supervisor</em> class, which coordinates the response based on their relative positions.
                                It sends instructions back to the Follower, directing it to stay at a precise distance from its leader.  Sensory 
                                input and communication is achieved through a TCP Socket communication protocol. 
                                This structure can be daisy-chained to an arbitrary number of leader-follower pairs, resulting in autonomous 
                                convoy behaviour.  Tracking and post-run analysis classes were also made to monitor the performance of the pairs, the data from 
                                which was processed via the <em>Numpy</em> library, with <em>Matplotlib</em> visualiztions.  
                            </Typography>
                        </Paper>
                        <div className={classes.toolbar} />
                    </Grid>
                </Grid>
            </div>

            {imageDialogOpen && (
                <Lightbox 
                    mainSrc={clickedImage}
                    onCloseRequest={handleCloseImageDialog}
                />
            )}
        </>
    
    )
}

export default RoverPage;