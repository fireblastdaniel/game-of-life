import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Grid from '../components/Grid';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core';

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

const makeArray = (size) => {
  return Array(size)
    .fill()
    .map(() => {
      return Array(size).fill(false);
    });
};

const Game = (props) => {
  const classes = useStyles();

  //set initial specs for the grid
  const gridSize = 25;
  const [active, setActive] = useState(makeArray(gridSize));
  const [prefab, setPrefab] = useState('');
  const [speed, setSpeed] = useState('1');
  const [playStatus, setPlayStatus] = useState('Start');

  //update function for grid component
  const update = (x, y) => {
    const newArray = [...active].map((row, index) => {
      if (index === y) {
        row.splice(x, 1, true);
      }
      return row;
    });
    setActive(newArray);
  };

  //handle dropdown prefab change
  const updateToPrefab = (e) => {
    setPrefab(e.target.value);
  };

  const handlePlayButton = (e) => {
    playStatus === 'Start' ? setPlayStatus('Stop') : setPlayStatus('Start');
  };

  const speedUp = () => {
    if (parseInt(speed) <= 64) setSpeed((parseInt(speed) * 2).toString());
  };

  const speedDown = () => {
    if (parseInt(speed) > 1) setSpeed((parseInt(speed) / 2).toString());
  };

  return (
    <div>
      <NavBar />
      <Container className={classes.gameBody} maxWidth='lg'>
        <Grid active={active} update={update} />
        <div className={classes.gameControls}>
          <FormControl className={classes.formControl}>
            <InputLabel id='prefab-selection'>Choose a Pattern</InputLabel>
            <Select
              labelId='prefab-selection'
              value={prefab}
              onChange={updateToPrefab}
            >
              <MenuItem value='blank'>Blank</MenuItem>
              <MenuItem value='other'>Other -- Testing</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.gameSetting}>
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
        </div>
      </Container>
    </div>
  );
};

export default Game;
