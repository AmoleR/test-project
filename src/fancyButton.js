import React from 'react';
import './fancyButton.css';

class FancyButton extends React.Component {

  render() {
    return (
      <div id="mainDiv">
        <div id="wrapper">
        <a href="/play" class="my-super-cool-btn">
          <div class="dots-container">
            <div class="dot1"></div>
            <div class="dot1"></div>
            <div class="dot1"></div>
            <div class="dot1"></div>
          </div>
          <span>Play Catan!</span>
        </a>
        </div>
      </div>
    );
  }
}

export default FancyButton;
