import './road.css';
import React, {Component} from 'react';

let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];

class Road extends Component {
  constructor () {
    super();
    this.state = {roadFilled: false, roadFlipped: false};
    this.fillRoad = this.fillRoad.bind(this);
  }

  fillRoad (event) {
    if (!this.props.placeRoad) {
      return;
    }
    this.setState({roadFilled: true});
    this.props.handler(this.props.id, this.props.color);
    event.preventDefault();
  }

  mouseOver() {
    this.setState({roadFlipped: true});
  }

  mouseOut() {
    this.setState({roadFlipped: false});
  }

  render() {
    if (this.props.placeRoad || this.props.roadVisibility) {
      if (this.props.roadStyle === 0) {
        if (this.props.fillColor[this.props.id] === 4) {
          return (
            <div id={"road" + this.props.id} class="road" style={{ backgroundColor: '#ffffff', marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
        else {
          return (
            <div id={"road" + this.props.id} class="road" style={{ backgroundColor: playerColors[this.props.fillColor[this.props.id]], marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
      }
      if (this.props.roadStyle === 1) {
        if (this.props.fillColor[this.props.id] === 4) {
          return (
            <div id={"road" + this.props.id} class="road" style={{ transform: 'rotate(120deg)', backgroundColor: '#ffffff', marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
        else {
          return (
            <div id={"road" + this.props.id} class="road" style={{ transform: 'rotate(120deg)', backgroundColor: playerColors[this.props.fillColor[this.props.id]], marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
      }
      if (this.props.roadStyle === 2) {
        if (this.props.fillColor[this.props.id] === 4) {
          return (
            <div id={"road" + this.props.id} class="road" style={{ transform: 'rotate(240deg)', backgroundColor: '#ffffff', marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
        else {
          return (
            <div id={"road" + this.props.id} class="road" style={{ transform: 'rotate(240deg)', backgroundColor: playerColors[this.props.fillColor[this.props.id]], marginRight: '2px', marginLeft: this.props.roadValue, cursor: 'crosshair'}} onClick={this.fillRoad}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} ></div>
          );
        }
      }
    }
    else {
      return (
        <div style={{marginRight: '2px', width: '8px', marginLeft: this.props.roadValue}} ></div>
      );
    }
  }
}

export default Road;
