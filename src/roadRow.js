import Road from './road.js';
import React, {Component} from 'react';

class RoadRow extends Component {
  constructor () {
    super();
  }

  render() {
    if (this.props.roadStyle === 0) {
      if (this.props.roadNumber === 4) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '-45px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.5%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        );
      }
      else if (this.props.roadNumber === 5) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '-45px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.5%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[4]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[4]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
      else if (this.props.roadNumber === 6) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '-45px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.5%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[4]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[4]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[5]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[5]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
    }
    if (this.props.roadStyle === 1) {
      if (this.props.roadNumber === 2) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.4%', marginTop: '-7.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        );
      }
      if (this.props.roadNumber === 3) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        );
      }
      else if (this.props.roadNumber === 4) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
      else if (this.props.roadNumber === 5) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[4]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[4]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
    }
    if (this.props.roadStyle === 2) {
      if (this.props.roadNumber === 2) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.4%', marginTop: '-7.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        );
      }
      if (this.props.roadNumber === 3) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        );
      }
      else if (this.props.roadNumber === 4) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
      else if (this.props.roadNumber === 5) {
        return (
          <div style={{marginLeft: this.props.margin, marginTop: '7px', display: 'flex', flexFlow: 'row-nowrap', position: 'absolute', left: '50.375%', marginTop: '2.3%'}}>
            <Road roadVisibility={this.props.roadVisibility[0]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[0]} color={this.props.color} roadValue={'0px'} roadStyle={this.props.roadStyle}  />
            <Road roadVisibility={this.props.roadVisibility[1]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[1]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[2]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[2]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[3]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[3]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
            <Road roadVisibility={this.props.roadVisibility[4]} placeRoad={this.props.placeRoad} handler={this.props.handler} fillColor={this.props.fillColors} id={this.props.id[4]} color={this.props.color} roadStyle={this.props.roadStyle} roadValue={'168px'} />
          </div>
        )
      }
    }
  }
}

export default RoadRow;
