import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Grid from '../components/Grid';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core';

import {
  blank,
  blinkers,
  toads,
  beacons,
  penta,
  pulsar,
  space,
} from '../prefabs/index';

import step from '../utils/step';
import randomize from '../utils/randomize';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  gameBody: {
    maxWidth: 'lg',
    margin: '4% auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  gameControls: {
    // marginLeft: '5%',
  },
  gameSetting: {
    margin: '5% 5%',
  },
}));

//keep track of extra boxes outside of display
const additional = 2;
const makeArray = (size) => {
  return Array(size + additional * 2)
    .fill()
    .map(() => {
      return Array(size + additional * 2).fill(false);
    });
};

const Game = (props) => {
  const classes = useStyles();

  //set initial specs for the grid
  const gridSize = 25;
  const [active, setActive] = useState(makeArray(gridSize));
  const [prefab, setPrefab] = useState('');
  const [speed, setSpeed] = useState(1);
  const [playStatus, setPlayStatus] = useState('Start');
  const [generation, setGeneration] = useState(0);

  //update function for grid component
  const update = (x, y) => {
    const newArray = [...active].map((row, index) => {
      if (index === y) {
        row.splice(x, 1, !active[y][x]);
      }
      return row;
    });
    setActive(newArray);
  };

  //handle dropdown prefab change
  const updateToPrefab = (e) => {
    setPrefab(e.target.value);
  };

  useEffect(() => {
    //blank option
    if (prefab === 'blank')
      setActive(
        blank.map((row) => {
          return [...row];
        })
      );
    //blinkers option
    else if (prefab === 'blinkers')
      setActive(
        blinkers.map((row) => {
          return [...row];
        })
      );
    //toads option
    else if (prefab === 'toads')
      setActive(
        toads.map((row) => {
          return [...row];
        })
      );
    //beacons option
    else if (prefab === 'beacons')
      setActive(
        beacons.map((row) => {
          return [...row];
        })
      );
    //penta option
    else if (prefab === 'penta')
      setActive(
        penta.map((row) => {
          return [...row];
        })
      );
    //pulsar option
    else if (prefab === 'pulsar')
      setActive(
        pulsar.map((row) => {
          return [...row];
        })
      );
    //space option
    else if (prefab === 'space')
      setActive(
        space.map((row) => {
          return [...row];
        })
      );
    //random settings
    else if (prefab === 'randomS')
      setActive(randomize(30, gridSize + 2 * additional));
    else if (prefab === 'randomM')
      setActive(randomize(50, gridSize + 2 * additional));
    else if (prefab === 'randomL')
      setActive(randomize(70, gridSize + 2 * additional));
    setGeneration(0);
  }, [prefab]);

  const handlePlayButton = (e) => {
    playStatus === 'Start' ? setPlayStatus('Stop') : setPlayStatus('Start');
  };

  const speedUp = () => {
    if (speed <= 64) setSpeed(speed * 2);
  };

  const speedDown = () => {
    if (speed > 1) setSpeed(speed / 2);
  };

  const getStep = () => {
    setActive(step(active));
    setGeneration(generation + 1);
  };

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

  //make call to the server at each interval
  useInterval(() => {
    if (playStatus === 'Stop') getStep();
  }, 1000 / speed);

  return (
    <div>
      <NavBar />
      <Container className={classes.gameBody} maxWidth='lg'>
        <Grid
          active={active}
          update={update}
          additional={additional}
          clickable={playStatus}
        />
        <div className={classes.gameControls}>
          <FormControl className={classes.formControl}>
            <InputLabel id='prefab-selection'>Choose a Pattern</InputLabel>
            <Select
              labelId='prefab-selection'
              value={prefab}
              onChange={updateToPrefab}
            >
              <MenuItem value='blank'>Blank</MenuItem>
              <MenuItem value='blinkers'>Blinkers</MenuItem>
              <MenuItem value='toads'>Toads</MenuItem>
              <MenuItem value='beacons'>Beacons</MenuItem>
              <MenuItem value='pulsar'>Pulsar</MenuItem>
              <MenuItem value='penta'>Pentadecathlon</MenuItem>
              <MenuItem value='space'>Spaceships</MenuItem>
              <MenuItem value='randomS'>Random - Low Population</MenuItem>
              <MenuItem value='randomM'>Random - Med Population</MenuItem>
              <MenuItem value='randomL'>Random - High Population</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.gameSetting}>
            <p>Generation: {generation}</p>
            <p>Speed: {speed}x</p>
            <AddIcon onClick={speedUp} />
            <RemoveIcon onClick={speedDown} />
          </div>
          <Button
            variant='contained'
            color='primary'
            onClick={handlePlayButton}
            className={classes.gameSetting}
          >
            {playStatus}
          </Button>
          <Button variant='contained' color='primary' onClick={getStep}>
            Step Forward
            <PlayArrowIcon />
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setPrefab('blank')}
            className={classes.gameSetting}
          >
            Clear Grid
          </Button>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Game;
