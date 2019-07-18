import React, { Component } from 'react';
import './App.css';
import CatanGame from './catanGame.js';
import HowToPlay from './howToPlay.js';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <HashRouter basename='/'>
          <Route path='/play' component={CatanGame} />
          <Route exact path='/' component={HowToPlay}  />
        </HashRouter>
    );
  }
}

export default App;
