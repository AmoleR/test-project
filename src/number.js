import React, { Component } from 'react';
import './number.css';

function abs(number) {
    if(number > 0) {
        return number;
    }
    return (-1 * number);
}

function dots(number) {
    let value = (6 - abs(number - 7))
    let array = [];
    for(let i = 0; i < value; i++) {
        array.push(0);
    }
    return (
        array.map(
            i =>  {
                return <div className='dot' />
            }
        )
    );
}

function value(letter) {
    if(letter === 'B') {
        return 2;
    }
    if(letter === 'D' || letter === 'Q') {
        return 3;
    }
    if(letter === 'N' || letter === 'J') {
        return 4;
    }
    if(letter === 'A' || letter === 'O') {
        return 5;
    }
    if(letter === 'P' || letter === 'C') {
        return 6;
    }
    if(letter === 'E' || letter === 'K') {
        return 8;
    }
    if(letter === 'G' || letter === 'M') {
        return 9;
    }
    if(letter === 'F' || letter === 'L') {
        return 10;
    }
    if(letter === 'I' || letter === 'R') {
        return 11;
    }
    if(letter === 'H') {
        return 12;
    }
    return null;
}

class Number extends Component{
    render () {
        if(this.props.robberHex === this.props.id) {
          return (
            <div className = 'robber' style={{display: 'inline-block'}}/>
          );
        }
        else if (this.props.letter === ' ') {
          return (
            <div />
          );
        }
        else {
            return (
                <div className = 'number' style={{display:'inline-block', fontFamily: 'Times New Roman'}}>
                    <div style={{verticalAlign: 'textTop', fontSize: '10px'}}>
                        {this.props.letter}
                    </div>
                    <div style={{textAlign: 'center', fontSize: '20px'}}>
                        {value(this.props.letter)}
                    </div>
                    <div style={{verticalAlign: 'textBottom'}}>
                        {dots(value(this.props.letter))}
                    </div>
                </div>
            );
        }
    }
}

export default Number;
