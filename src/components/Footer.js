import React from 'react';
import {
    Link, 
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const Footer = () => {

    const classes = useStyles();

    const Copyright = () => {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a 
                href='https://www.linkedin.com/in/marshall-ruse/' 
                target='_blank'
                rel="noopener noreferrer"
                className={classes.link}
            >
              Marshall Ruse &nbsp;
            </a>
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    );
}

export default Footer;