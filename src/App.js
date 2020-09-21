import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Home from './pages/home';
import About from './pages/about';
import Game from './pages/game';

import './App.css';

ReactGA.initialize('UA-178647961-1');
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  useEffect(() => {
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
