import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Game from './pages/game';

import ReactGA from 'react-ga';

import './App.css';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-178647961-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/game'>
        <Game />
      </Route>
    </>
  );
}

export default App;