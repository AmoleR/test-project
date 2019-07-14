import Settlement from './settlement.js';
import React, { Component } from 'react';

class SettlementRow extends Component{
    constructor () {
        super();
    }
    render () {
        if(this.props.verticalMargins === null) {
            this.props.verticalMargins = '0px'
        }
        if(this.props.leftMargins.length === 2) {
            return (
                <div style={{display: 'flex', flexFlow: 'nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%', zIndex: '200'}}>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[0]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[0]} color = {this.props.color} marginLeft = {this.props.leftMargins[0]}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[1]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[1]} color = {this.props.color} marginLeft = {this.props.leftMargins[1]}
                    marginTop = {this.props.verticalMargins}/>
                </div>
            );
        }
        if(this.props.leftMargins.length === 3) {
            return (
                <div style={{display: 'flex', flexFlow: 'nowrap', position: 'absolute', left: '37.675%', marginTop: '-0.2%', zIndex: '200'}}>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[0]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[0]} color = {this.props.color} marginLeft = {'0px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[1]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[1]} color = {this.props.color} marginLeft = {'180px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[2]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[2]} color = {this.props.color} marginLeft = {'360px'}
                    marginTop = {this.props.verticalMargins}/>
                </div>
            );
        }
        if(this.props.leftMargins.length === 4) {
            return (
                <div style={{display: 'flex', flexFlow: 'nowrap', position: 'absolute', left: '31.975%', top: '13%', zIndex: '200'}}>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[0]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[0]} color = {this.props.color} marginLeft = {'0px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[1]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[1]} color = {this.props.color} marginLeft = {'180px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[2]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[2]} color = {this.props.color} marginLeft = {'360px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[3]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[3]} color = {this.props.color} marginLeft = {'540px'}
                    marginTop = {this.props.verticalMargins}/>
                </div>
            );
        }
        if(this.props.leftMargins.length === 5) {
            return (
                <div style={{display: 'flex', flexFlow: 'nowrap', position: 'absolute', left: '26.375%', marginTop: '9.6%', zIndex: '200'}}>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[0]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[0]} color = {this.props.color} marginLeft = {'0px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[1]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[1]} color = {this.props.color} marginLeft = {'180px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[2]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[2]} color = {this.props.color} marginLeft = {'360px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[3]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[3]} color = {this.props.color} marginLeft = {'540px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[4]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[4]} color = {this.props.color} marginLeft = {'720px'}
                    marginTop = {this.props.verticalMargins}/>
                </div>
            );
        }
        if(this.props.leftMargins.length === 6) {
            return (
                <div style={{display: 'flex', flexFlow: 'nowrap', position: 'absolute', left: '20.675%', marginTop: '9.3%', zIndex: '200'}}>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[0]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[0]} color = {this.props.color} marginLeft = {'0px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[1]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[1]} color = {this.props.color} marginLeft = {'180px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[2]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[2]} color = {this.props.color} marginLeft = {'360px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[3]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[3]} color = {this.props.color} marginLeft = {'540px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[4]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[4]} color = {this.props.color} marginLeft = {'720px'}
                    marginTop = {this.props.verticalMargins}/>
                    <Settlement placeSettlement={this.props.placeSettlement} settlementVisibility={this.props.settlementVisibility[5]} fillColor={this.props.fillColors} handler={this.props.handler} id={this.props.id[5]} color = {this.props.color} marginLeft = {'900px'}
                    marginTop = {this.props.verticalMargins}/>
                </div>
            );
        }
        return null;
    }
}

export default SettlementRow;