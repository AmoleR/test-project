/** Commodity Type Conversions
 * 0 - Ore
 * 1 - Wheat
 * 2 - Wood
 * 3 - Sheep
 * 4 - Brick
 * 5 - Robber
 */

//Importing

import './hexagon.css'
import React, { Component } from 'react';
import Number from './number.js'


function commodityColor(commodityNumber) {
    let commodityColors = ['#60605f', '#f6f945', '#02821c', '#bbf7c5', '#ed5042', '#fce888'];
    return (
        commodityColors[commodityNumber]
    );
}
class Hexagon extends Component{
    constructor () {
        super();
        this.state = {
            hexagonFlipped: false
        }
        this.onClick = this.onClick.bind(this);
    }
    mouseOver() {
        this.setState({hexagonFlipped: true})
    }
    mouseOut() {
        this.setState({hexagonFlipped: false})
    }
    onClick(event) {
      this.props.handler(this.props.id);
      event.preventDefault();
    }
    render () {
        return (
            <div style={{cursor: 'pointer'}} onMouseOut = {() => this.mouseOut()}
            onMouseOver = {() => this.mouseOver()}>
                <div className = 'hexagonTop' style={{borderBottom: '50px solid' + commodityColor(this.props.commodityType)}} onClick={this.onClick}/>
                <div className = 'hexagonMiddle' style={{verticalAlign: 'textBottom', textAlign: 'center', backgroundColor: commodityColor(this.props.commodityType)}} onClick={this.onClick}>
                    <Number id = {this.props.id} robberHex = {this.props.robberHex} letter = {this.props.letter}/>
                </div>
                <div className = 'hexagonBottom' style={{borderTop: '50px solid' + commodityColor(this.props.commodityType)}} onClick={this.onClick}/>
            </div>
        );
    }
}
/*function HexagonRow(commodityArray) {
    return (
        <div style={{clear: left}}>
            {Hexagon(1)}
            {Hexagon(2)}
            {Hexagon(3)}
        </div>
    );
}*/

export default Hexagon;
