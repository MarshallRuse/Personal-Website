import React from 'react';
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import SouthernOntario from '../assets/images/SouthernOntario.png';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundImage: ['linear-gradient(to bottom, black, 60%, transparent)', `url(${ SouthernOntario })`],
      backgroundSize: 'cover',
      color: '#fff',
      height: '100vh',
      padding: theme.spacing(8, 0, 10),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    navLink: {
      textDecoration: 'none',
      color: '#a0a0a0',
      transition: 'color 0.4s',
      '&:hover': {
        color: '#fff'
      }
    },
    navList: {
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingBottom: '40px'
    }
  }));

const HomePage = () => {

    const classes = useStyles();

    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <div className={classes.navList}>
              <a href='#skills-section' className={classes.navLink}>Skills</a>
              <a href='#projects-section' className={classes.navLink}>Projects</a>
              <a href='#about-me-section' className={classes.navLink}>About Me</a>
              <a href='#contact-section' className={classes.navLink}>Contact</a>
            </div>
            <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
              Marshall Ruse
            </Typography>
            <Typography variant="body1" align="left" color="inherit" paragraph>
              Hello, I’m Marshall. 
              I'm an aspiring web and mobile developer in the Greater Toronto Area.  
              <br />I studied Life Sciences and Computing at Queen’s University, and got a bachelor for each.  
              In addition to relevant courses taken on web development and relational databases, 
              I’m a self-taught Node.js and React JS developer (details below).  
              I learned React to gain transferable skills and flexibility to interoperate between web 
              and mobile app development, and will soon be venturing into React Native development.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <ButtonBase>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Trip Tracker
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions} >
                      <Button size="small" color="primary">
                        Demo
                      </Button>
                      <Button size="small" color="primary">
                        Source
                      </Button>
                    </CardActions>
                  </Card>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ButtonBase>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Bingo Party
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        Demo
                      </Button>
                      <Button size="small" color="primary">
                        Source
                      </Button>
                    </CardActions>
                  </Card>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ButtonBase>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rover Follower
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        Source
                      </Button>
                    </CardActions>
                  </Card>
                </ButtonBase>
              </Grid>
          </Grid>
        </Container>
      </main>
    );
} 

export default HomePage;