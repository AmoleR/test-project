import React, { Component } from 'react';
import './App.css';
import CatanGame from './catanGame.js';
import HowToPlay from './howToPlay.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/play" component={CatanGame} />
        <Route exact path="/" component={HowToPlay}  />
      </Router>
    );
  }
}

export default App;
