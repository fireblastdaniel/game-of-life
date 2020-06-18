// idk yet but I think I'm starting App.js wrong

import React from 'react';
import { Link } from 'react-router-dom';
// // import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <AppBar position='static'>
//           <p2>John Conway's</p2>
//           <p1>Game of Life</p1>
//         </AppBar>
//         <div className='buttons'>
//           <Button></Button>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

const useStyles = makeStyles({
  // homePage: {
  //   height: '100vh',
  // },
  container: {
    margin: '0 auto',
    maxWidth: '1024px',
    height: '60vh',
  },
  title1: {
    fontSize: '36px',
    display: 'block',
    paddingTop: '20%',
  },
  title2: {
    fontSize: '128px',
  },
  homeButton: {
    fontSize: '48px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '4% 20%',
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <AppBar position='static'>
        <div className={classes.container}>
          <p2 className={classes.title1}>John Conway's</p2>
          <p1 className={classes.title2}>Game of Life</p1>
        </div>
      </AppBar>
      <div className={classes.buttonContainer}>
        <Button
          variant='contained'
          color='primary'
          className={classes.homeButton}
        >
          Start
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.homeButton}
        >
          About
        </Button>
      </div>
    </div>
  );
};

export default Home;
