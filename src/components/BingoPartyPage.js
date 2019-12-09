import React, { useState } from 'react';
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

// Images
import BingoPartyHomePage from '../assets/images/BingoParty/BingoPartyHomePage.png';
import BingoPartyGameBoard from '../assets/images/BingoParty/BingoPartyGameBoard.png';
import BingoPartyBingoHallGames from '../assets/images/BingoParty/BingoPartyBingoHallGames.png';
import BingoPartyBingoHallUsers from '../assets/images/BingoParty/BingoPartyBingoHallUsers.png';
import BingoPartyProfilePage from '../assets/images/BingoParty/BingoPartyProfilePage.png';

import drinkingBackground from '../assets/images/BingoParty/drinkingBackground.jpg';
import bingoBallBackground from '../assets/images/BingoParty/bingoBallBackground.jpg';
import beerBackground from '../assets/images/BingoParty/beerBackground.jpg';


// Logos
import ReactLogo from '../assets/logos/react.svg';
import ReduxLogo from '../assets/logos/redux.svg';
import ExpressLogo from '../assets/logos/express.svg';
import MongoDBLogo from '../assets/logos/mongodb.svg';
import NodejsLogo from '../assets/logos/nodejs.svg';
import SassLogo from '../assets/logos/sass.svg';


const useStyles = makeStyles(theme => ({
    closeDialogButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: '10px', 
        width: '100%'
    },
    developmentSectionBackground: {
        backgroundImage: `url(${beerBackground})`,
        backgroundSize: 'cover'
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
        padding: '10px',
        textDecoration: 'none',
    },
    linkRow__leftLink: {
        justifyContent: 'flex-end',
        paddingRight: '10px'
    },
    linkRow__rightLink: {
        justifyContent: 'flex-start',
        paddingLeft: '10px'
    },
    listText: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    logoImg: {
        height: 'auto',
        width: '80%'
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
    slideShowBackground: {
        backgroundImage: ['linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))', `url(${drinkingBackground})`],
        backgroundSize: 'cover',
    },
    featuresBackground: {
        backgroundImage: `url(${bingoBallBackground})`,
        backgroundSize: 'cover'
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
    BingoPartyHomePage,
    BingoPartyGameBoard,
    BingoPartyBingoHallGames,
    BingoPartyBingoHallUsers,
    BingoPartyProfilePage
}

const BingoPartyPage = () => {
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

    const handleCloseImageDialog = () => {
        setClickedImage('');
        setClickedImageAlt('');
        setImageDialogOpen(false);
    }


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
                            Bingo Party App
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} className={classes.linkRow}>
                        <a 
                            href='https://marshall-bingo-party-app.herokuapp.com/' 
                            target='_blank'
                            rel='noopener noreferrer'
                            className={[classes.link, classes.linkRow__leftLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}}>
                                Demo
                            </Button>
                        </a>
                        <a 
                            href='https://github.com/MarshallRuse/Bingo-App-React'
                            target='_blank'
                            rel='noopener noreferrer' 
                            className={[classes.link, classes.linkRow__rightLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}} >
                                <GitHub style={{marginRight: '5px'}} />
                                Source
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={10} md={9}>
                        <Carousel 
                            autoPlay 
                            interval={5000} 
                            transitionTime={500} 
                            showStatus={false}
                            onClickItem={handleCarouselImageClicked}
                        >
                            <div >
                                <img 
                                    src={BingoPartyHomePage} 
                                    image='BingoPartyHomePage'
                                    alt='Bingo Party Home Page' 
                                    className={classes.img}    
                                />
                                <p className="legend">The Bingo Party home page</p>
                            </div>
                            <div>
                                <img 
                                    src={BingoPartyGameBoard}
                                    image='BingoPartyGameBoard' 
                                    alt='Bingo Party Game Board' 
                                    className={classes.img}
                                />
                                <p className="legend">Play a game in your browser, and your progress persists</p>
                            </div>
                            <div>
                                <img 
                                    src={BingoPartyBingoHallGames} 
                                    image='BingoPartyBingoHallGames'
                                    alt="The Bingo Hall Games tab" 
                                    className={classes.img}
                                />
                                <p className="legend">Sort by a game's popularity, or search for a game; upvote and downvote games</p>
                            </div>
                            <div>
                                <img 
                                    src={BingoPartyBingoHallUsers}
                                    image='BingoPartyBingoHallUsers' 
                                    alt='The Bingo Hall Users tab' 
                                    className={classes.img}
                                />
                                <p className="legend">Find the users with the most popular games</p>
                            </div>
                            <div>
                                <img 
                                    src={BingoPartyProfilePage} 
                                    image='BingoPartyProfilePage'
                                    alt="The Bingo Hall profile page" 
                                    className={classes.img}
                                />
                                <p className="legend">Follow and be followed by other users</p>
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant='body1'className={classes.outsidePaperText}>
                        <em>Bingo Party</em> was my first venture into building a full-stack MERN app entirely
                        from scratch.  Its written entirely from pure HTML and CSS, without any UI libraries,
                        and, truthfully, is only functional as a desktop app, as I did not have mobile development
                        in mind as I developed it.  Attempts to retrofit it later as a mobile app with an abundance of 
                        media-queries and new components proved too time consuming for what I consider an introductory 
                        project, and I've chalked it up to a learning experience.  All projects from here-on-out are to have 
                        mobile layout in mind, if not developed in a mobile-first context.
                        <br />
                        <br />
                        Nevertheless, as a valuable learning experience there are features of the project
                        that I am proud of.  All UI functionality was arduously created by hand, and so I gained some insight into
                        what may be going on under the hood of the UI Library components (tabs, expanse panels, menus, modals, etc.) 
                        that I now plug in and use in a fraction of the time.  Users have the capability of uploading their own images 
                        for avatars and cover photos, and of editing them before saving to ensure they are of the proper dimensions.
                        Users are able to engage in a a functioning upvote/downvote system for the games, be ranked by their game's collective
                        votes, and follow and be followed by each other, which I thought was pretty neat to implement.

                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.featuresBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant='h5' align='center' className={classes.pageText}>
                            Features
                        </Typography>
                        <Typography variant='body1' className={classes.pageText}>
                            Users can create their own Bingo cards, with sizes of 3x3 up to 6x6.  
                            Users create the game’s template, and they and others can create instances of the game with which to play themselves.  
                            Users can stamp the board right in the browser, and the state of their board will persist.  
                            <br />
                            <br />
                            Users can also follow and be followed by other creators, and can up-vote and down-vote Bingo games.  
                            In the Bingo Hall, users can sort to find the highest rated games available, see the most popular users, 
                            and find games by those they follow and their followers.
                            <br />
                            <br />
                            Users can add a bit of personal flair to their profiles, which can be customized with avatar images and cover photos, 
                            chosen either from a provided list of images, or uploaded by the user.  These uploaded images are provided a 
                            photo-editing service at the time of upload, so that users can crop, rotate, and resize their images to best fit the avatar 
                            and cover-photo dimensions.
                        </Typography>                   
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.developmentSectionBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' align='center' className={classes.pageText}>
                                Development
                            </Typography>
                            <Grid container justify='center' alignItems='center' className={classes.logoRow}>
                                <Tooltip title='React JS' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={ReactLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Redux' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={ReduxLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Express' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={ExpressLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='MongoDB' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={MongoDBLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Node.js' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={NodejsLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Sass' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={SassLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                            </Grid>
                            <Typography variant='body1' className={classes.pageText}>
                                Bingo Party is developed as a <strong>full stack MERN (MongoDB, Express, React, Node.js)</strong> app.  
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Front-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The React front-end uses components written in HTML and CSS (compiled from Sass).   
                                The front-end uses <strong>Redux</strong> (modified for persistence across page-refreshes) for authentication on sign-up and login, as
                                well as to fetch the user's games. Redux-thunk was used to dispatch asynchronous actions from the front-end, such as updating the user's followers and followings. 
                                Bingo Party is a <strong>single-page application</strong>, as it uses <strong>React Router</strong> as its routing solution, only fetching the index HTML page on initial loading.
                                <br />
                                <br />
                                The app uses the <strong>cropper.js</strong> npm package to enable uploading of avatar and cover photos, as well as editing of such photos in the browser prior to
                                saving.
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Back-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The back-end is a <strong>Node.js</strong> server using MongoDB for its NoSQL database and <strong>Express</strong> for routing.  
                                User authentication is handled via the <strong>Passport.js middleware</strong> using <strong>JSON Web Tokens (JWT)</strong> stored as cookies in the browser.
                                The <strong>Mongoose</strong> library is used as the interface to <strong>MongoDB</strong>, as well as for schema construction and validation.  
                                The production build of the app uses <strong>MongoDB Atlas</strong> as its hosted database.  
                                As Bingo Party is a single-page application, the Express routing is used primarily  for API endpoints for the front-end.
                            </Typography>
                        </Paper>
                        <div className={classes.toolbar} />
                    </Grid>
                </Grid>
            </div>
            <Dialog 
                open={imageDialogOpen} 
                onClose={handleCloseImageDialog}
            >
                <DialogContent>
                    <div className={classes.closeDialogButton} >
                        <Close onClick={handleCloseImageDialog} />
                    </div>
                    <img 
                        src={clickedImage} 
                        alt={clickedImageAlt} 
                        style={{ width: '100%' }}
                    />
                </DialogContent>
            </Dialog>
        </>
    
    )
}

export default BingoPartyPage;