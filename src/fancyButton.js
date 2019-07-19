import React from 'react';
import './fancyButton.css';

class FancyButton extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    document.getElementById('myBar').style.display = 'inline-block'
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
  }

  render() {
    return (
      <div id="mainDiv">
        <div class="button" onClick={this.onClick}>Play Catan</div>
        <br />
        <div style={{display: 'none'}} id="myBar"></div>
      </div>
    );
  }
}

export default FancyButton;
