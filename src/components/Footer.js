import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    paddingBottom: '20px',
  },
  container: {
    margin: '0 auto',
    display: 'flex',
  },
  gitHubLink: {
    color: 'black',
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.container} maxWidth='lg'>
        <a
          href='https://github.com/fireblastdaniel/game-of-life'
          className={classes.gitHubLink}
        >
          <GitHubIcon fontSize='large' color='black' />
        </a>
      </Container>
    </div>
  );
};

export default Footer;
