import './hexagon.css'
import React, { Component } from 'react';
import Hexagon from './hexagon.js';

class HexagonRow extends Component{
    constructor() {
        super()
    }
    render () {
        if(this.props.commodityArray.length === 2) {
            return(
                <div style = {{display: 'flex', flexFlow: 'nowrap', marginLeft: '176px', marginTop: '-50px'}}>
                    <Hexagon commodityType = {this.props.commodityArray[0]} letter = {this.props.letterArray[0]}/>
                    <Hexagon commodityType = {this.props.commodityArray[1]} letter = {this.props.letterArray[1]}/>
                </div>
            );
        }
        if(this.props.commodityArray.length === 3) {
            return(
                <div style = {{display: 'flex', flexFlow: 'nowrap', marginLeft: '176px', marginTop: '-50px'}}>
                    <Hexagon commodityType = {this.props.commodityArray[0]} letter = {this.props.letterArray[0]}/>
                    <Hexagon commodityType = {this.props.commodityArray[1]} letter = {this.props.letterArray[1]}/>
                    <Hexagon commodityType = {this.props.commodityArray[2]} letter = {this.props.letterArray[2]}/>
                </div>
            );
        }
        if(this.props.commodityArray.length === 4) {
            return(
                <div style = {{display: 'flex', flexFlow: 'nowrap', marginLeft: '88px', marginTop: '-50px'}}>
                    <Hexagon commodityType = {this.props.commodityArray[0]} letter = {this.props.letterArray[0]}/>
                    <Hexagon commodityType = {this.props.commodityArray[1]} letter = {this.props.letterArray[1]}/>
                    <Hexagon commodityType = {this.props.commodityArray[2]} letter = {this.props.letterArray[2]}/>
                    <Hexagon commodityType = {this.props.commodityArray[3]} letter = {this.props.letterArray[3]}/>
                </div>
            );
        }
        if(this.props.commodityArray.length === 5) {
            return(
                <div style = {{display: 'flex', flexFlow: 'nowrap', marginLeft: '0px', marginTop: '-50px'}}>
                    <Hexagon commodityType = {this.props.commodityArray[0]} letter = {this.props.letterArray[0]}/>
                    <Hexagon commodityType = {this.props.commodityArray[1]} letter = {this.props.letterArray[1]}/>
                    <Hexagon commodityType = {this.props.commodityArray[2]} letter = {this.props.letterArray[2]}/>
                    <Hexagon commodityType = {this.props.commodityArray[3]} letter = {this.props.letterArray[3]}/>
                    <Hexagon commodityType = {this.props.commodityArray[4]} letter = {this.props.letterArray[4]}/>
                </div>
            );
        }
        return null;
    }
}

export default HexagonRow;
