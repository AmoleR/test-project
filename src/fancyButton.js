import React from 'react';
import './fancyButton.css';
import { Redirect } from 'react-router-dom'

class FancyButton extends React.Component {

  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    document.getElementById('myBar').style.display = 'inline-block';
    document.getElementById('playCatanButton').disabled = true;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
    setTimeout(() => this.setState({redirect: true}), 2200);
}

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/play" />
      );
    }
    else {
      return (
        <div id="mainDiv">
          <div class="button" id="playCatanButton" onClick={this.onClick}>Play Catan</div>
          <br />
          <div style={{display: 'none'}} id="myBar"></div>
        </div>
      );
    }
  }
}

export default FancyButton;
