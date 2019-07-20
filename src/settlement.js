import './settlement.css'
import React, { Component } from 'react';

let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
let playerRGB = ['rgba(86, 13, 139, 1)', 'rgba(255, 165, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)', 'rgba(128, 128, 128, 1)'];
let hoverRGB = ['rgba(156, 83, 209, 1)', 'rgba(255, 215, 50, 1)', 'rgba(70, 70, 255, 1)', 'rgba(255, 100, 100, 1)', 'rgba(128, 128, 128, 1)'];

class Settlement extends Component{
    constructor () {
        super();
        this.state = {
            settlementFilled: false
        }
        this.fillSettlement = this.fillSettlement.bind(this);
        this.hovering = this.hovering.bind(this);
        this.notHovering = this.notHovering.bind(this);
    }
    fillSettlement (event) {
        if (!this.props.placeSettlement) {
            return;
        }
        this.setState({settlementFilled: true});
        this.props.handler(this.props.id, this.props.color);
        event.preventDefault();
    }
    hovering(event) {
        document.getElementById('settlement' + this.props.id).style.backgroundColor = hoverRGB[this.props.color];
        event.preventDefault();
    }
    notHovering(event) {
        document.getElementById('settlement' + this.props.id).style.backgroundColor = '#ffffff';
        event.preventDefault();
    }
    render () {
        let seeSettlement = '';
        if (this.props.placeSettlement || this.props.settlementVisibility) {
            seeSettlement = 'inline-block';
        }
        else  {
            seeSettlement = 'none';
        }
        if(this.props.settlementType[this.props.id] === 1) {
          if (this.props.fillColor[this.props.id] === 5) {
            return (
              <div id={'settlement' + this.props.id} className = 'settlement'></div>
            )
          }
          if (this.props.fillColor[this.props.id] === 4) {
              if (this.props.color === 4) {
                  return (
                      <div id={'settlement' + this.props.id} className = 'settlement' style = {{display: seeSettlement, backgroundColor: '#ffffff',
                      border: '3px solid ' + playerColors[this.props.color],
                      boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.color], marginLeft: this.props.marginLeft,
                      marginTop: this.props.marginTop}} onClick={this.fillSettlement} >  </div>
                  );
              }
              else {
                  return (
                      <div id={'settlement' + this.props.id} className = 'settlement' style = {{display: seeSettlement, backgroundColor: '#ffffff',
                      border: '3px solid ' + playerColors[this.props.color],
                      boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.color], marginLeft: this.props.marginLeft,
                      marginTop: this.props.marginTop}} onClick={this.fillSettlement} onMouseOver={this.hovering} onMouseOut={this.notHovering} ></div>
                  );
              }
          }
          else {
              return (
                  <div id={'settlement' + this.props.id} className = 'settlement' style = {{display: seeSettlement, backgroundColor: playerColors[this.props.fillColor[this.props.id]],
                  border: '3px solid ' + playerColors[this.props.fillColor[this.props.id]],
                  boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.fillColor[this.props.id]], marginLeft: this.props.marginLeft,
                  marginTop: this.props.marginTop}} onClick={this.fillSettlement}></div>
              );
          }
        }
        else {
          if (this.props.fillColor[this.props.id] === 5) {
            return (
              <div style={{borderRadius: '0%'}} id={'settlement' + this.props.id} className = 'city'></div>
            )
          }
          if (this.props.fillColor[this.props.id] === 4) {
              if (this.props.color === 4) {
                  return (
                      <div id={'settlement' + this.props.id} className = 'city' style = {{display: seeSettlement, backgroundColor: '#ffffff',
                      border: '3px solid ' + playerColors[this.props.color],
                      boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.color], marginLeft: this.props.marginLeft,
                      marginTop: this.props.marginTop, borderRadius: '0%'}} onClick={this.fillSettlement} ></div>
                  );
              }
              else {
                  return (
                      <div id={'settlement' + this.props.id} className = 'city' style = {{display: seeSettlement, backgroundColor: '#ffffff',
                      border: '3px solid ' + playerColors[this.props.color],
                      boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.color], marginLeft: this.props.marginLeft,
                      marginTop: this.props.marginTop, borderRadius: '0%'}} onClick={this.fillSettlement} onMouseOver={this.hovering} onMouseOut={this.notHovering} ></div>
                  );
              }
          }
          else {
              return (
                  <div id={'settlement' + this.props.id} className = 'city' style = {{display: seeSettlement, backgroundColor: playerColors[this.props.fillColor[this.props.id]],
                  border: '3px solid ' + playerColors[this.props.fillColor[this.props.id]],
                  boxShadow: '2px 2px 5px 0px '  + playerRGB[this.props.fillColor[this.props.id]], marginLeft: this.props.marginLeft,
                  marginTop: this.props.marginTop, borderRadius: '0%'}} onClick={this.fillSettlement}></div>
              );
          }
        }
    }
}

export default Settlement;
