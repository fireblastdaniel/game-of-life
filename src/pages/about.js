import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import { Container, makeStyles } from '@material-ui/core';
import { loaf, toad, glider } from '../prefabs/examples';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-178647961-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const useStyles = makeStyles((theme) => ({
  examples: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const About = (props) => {
  const [toadActive, setToadActive] = useState(0);
  const [gliderActive, setGliderActive] = useState(0);

  const classes = useStyles();

  //timer to step examples forward
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    toadActive < toad.length - 1
      ? setToadActive(toadActive + 1)
      : setToadActive(0);
    gliderActive < glider.length - 1
      ? setGliderActive(gliderActive + 1)
      : setGliderActive(0);
  }, 500);

  return (
    <div>
      <NavBar />
      <Container>
        <h1>About</h1>
        <p>
          The Game of Life is a simulation game by John Conway in which a grid
          of cells become alive or dead based on the number of alive and dead
          neighbors. Devised in 1970, the purpose of the game is to simulate the
          movement and reproduction of populations, and is a common
          demonstration of how complex patterns evolve.
        </p>
        <h1>Rules</h1>
        <ol>
          <li>
            Any live cell with fewer than two live neighbors dies as if by
            underpopulation
          </li>
          <li>
            Any live cell with two or three live neighbors lives on to the next
            generation
          </li>
          <li>
            Any live cell with more than three neighbors dies, as if by
            overpopulation
          </li>
          <li>
            Any live cell with exactly three live neighbors becomes a live cell,
            as if by reproduction
          </li>
        </ol>
        <h1>Examples</h1>
        <div className={classes.examples}>
          <div>
            <Grid
              active={loaf}
              update={null}
              additional={0}
              clickable={'Never'}
            />
            <p>Static</p>
          </div>
          <div>
            <Grid
              active={toad[toadActive]}
              update={null}
              additional={0}
              clickable={'Never'}
            />
            <p>Flicker</p>
          </div>
          <div>
            <Grid
              active={glider[gliderActive]}
              update={null}
              additional={0}
              clickable={'Never'}
            />
            <p>Glider</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
