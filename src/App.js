import React, { Component } from 'react';
import './App.css';
import HexagonRow from './hexagonrow.js';
import SettlementRow from './settlementrow.js';
import RoadRow from './roadRow.js';
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";

// Shuffling

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}


class App extends Component {
  constructor () {
    super();
    this.state = {
      checked : false,
      settlementplace: false,
      color: 4,
      roadColor: 4,
      placeRoad: false,
      settlementColor: 4,
      settlementCurrentFill: {},
      roadCurrentFill: {},
      roadVisibility: [],
      settlementVisibility: [],
      colorOrder: [0, 1, 2, 3, 3, 2, 1, 0, -1],
      colorPosition: 0,
      showButton: true,
      settlementList: {
        0: [3, 4],
        1: [4, 5],
        2: [5, 6],
        3: [0, 7],
        4: [0, 1, 8],
        5: [1, 2, 9],
        6: [2, 10],
        7: [3, 11, 12],
        8: [4, 12, 13],
        9: [5, 13, 14],
        10: [6, 14, 15],
        11: [7, 16],
        12: [7, 8, 17],
        13: [8, 9, 18],
        14: [9, 10, 19],
        15: [10, 20],
        16: [11, 21, 22],
        17: [12, 22, 23],
        18: [13, 23, 24],
        19: [14, 24, 25],
        20: [15, 25, 26],
        21: [16, 27],
        22: [16, 17, 28],
        23: [17, 18, 29],
        24: [18, 19, 30],
        25: [19, 20, 31],
        26: [20, 32],
        27: [21, 33],
        28: [22, 33, 34],
        29: [23, 34, 35],
        30: [24, 35, 36],
        31: [25, 36, 37],
        32: [26, 37],
        33: [27, 28, 37],
        34: [28, 29, 39],
        35: [29, 30, 40],
        36: [30, 31, 41],
        37: [31, 32, 42],
        38: [33, 43],
        39: [34, 43, 44],
        40: [35, 44, 45],
        41: [36, 45, 46],
        42: [37, 46],
        43: [38, 39, 50],
        44: [39, 40, 51],
        45: [40, 41, 52],
        46: [41, 42, 53],
        47: [50, 51],
        48: [51, 52],
        49: [52, 53],
        50: [43, 47],
        51: [44, 47, 48],
        52: [45, 48, 49],
        53: [46, 49]
      },
      roadListFromSettlements: {
        0: [8, 15],
        1: [6, 16],
        2: [10, 17],
        3: [0, 15],
        4: [1, 8, 16],
        5: [2, 9, 17],
        6: [3, 10],
        7: [0, 4, 11],
        8: [1, 5, 12],
        9: [2, 6, 13],
        10: [3, 7, 14],
        11: [11, 18],
        12: [4, 12, 19],
        13: [5, 13, 20],
        14: [6, 14, 21],
        15: [7, 22],
        16: [18, 23, 28],
        17: [19, 24, 29],
        18: [20, 25, 30],
        19: [21, 26, 31],
        20: [22, 27, 32],
        21: [28, 33],
        22: [23, 29, 34],
        23: [24, 30, 35],
        24: [25, 31, 36],
        25: [26, 32, 37],
        26: [27, 38],
        27: [33, 39],
        28: [34, 40, 44],
        29: [35, 41, 45],
        30: [36, 42, 46],
        31: [37, 43, 47],
        32: [38, 48],
        33: [39, 44, 49],
        34: [40, 45, 50],
        35: [41, 46, 51],
        36: [42, 47, 52],
        37: [43, 48, 53],
        38: [49, 54],
        39: [50, 55, 58],
        40: [51, 56, 59],
        41: [52, 57, 60],
        42: [53, 61],
        43: [54, 58, 62],
        44: [55, 59, 63],
        45: [56, 60, 64],
        46: [57, 61, 65],
        47: [66, 69],
        48: [67, 70],
        49: [68, 71],
        50: [62, 66],
        51: [63, 67, 69],
        52: [64, 68, 70],
        53: [65, 71]
      },
      roadList: {
        0: [4, 11, 15],
        1: [5, 8, 12, 16],
        2: [6, 9, 13, 17],
        3: [7, 10, 14],
        4: [0, 11, 12, 19],
        5: [1, 12, 13, 20],
        6: [2, 13, 14, 21],
        7: [3, 14, 22],
        8: [1, 15, 16],
        9: [2, 16, 17],
        10: [3, 17],
        11: [0, 4, 18],
        12: [1, 4, 5, 19],
        13: [2, 5, 6, 20],
        14: [3, 6, 7, 21],
        15: [0, 8],
        16: [1, 8, 9],
        17: [2, 9, 10],
        18: [11, 23, 28],
        19: [4, 12, 24, 29],
        20: [5, 13, 25, 30],
        21: [6, 14, 26, 31],
        22: [7, 27, 32],
        23: [18, 28, 29, 34],
        24: [19, 29, 30, 35],
        25: [20, 30, 31, 36],
        26: [21, 31, 32, 37],
        27: [22, 32, 38],
        28: [18, 23, 33],
        29: [19, 23, 24, 34],
        30: [20, 24, 25, 35],
        31: [21, 25, 26, 36],
        32: [22, 26, 27, 37],
        33: [28, 39],
        34: [23, 29, 40, 44],
        35: [24, 30, 41, 45],
        36: [25, 31, 42, 46],
        37: [26, 32, 43, 47],
        38: [27, 48],
        39: [33, 44, 49],
        40: [34, 44, 45, 50],
        41: [35, 45, 46, 51],
        42: [36, 46, 47, 52],
        43: [37, 47, 48, 53],
        44: [34, 39, 40, 49],
        45: [35, 40, 41, 50],
        46: [36, 41, 42, 51],
        47: [37, 42, 43, 52],
        48: [38, 43, 53],
        49: [39, 44, 54],
        50: [40, 45, 55, 58],
        51: [41, 46, 56, 59],
        52: [42, 47, 57, 60],
        53: [43, 48, 61],
        54: [49, 58, 62],
        55: [50, 58, 59, 63],
        56: [51, 59, 60, 64],
        57: [52, 60, 61, 65],
        58: [50, 54, 55, 62],
        59: [51, 55, 56, 63],
        60: [52, 56, 57, 64],
        61: [53, 57, 65],
        62: [54, 58, 66],
        63: [55, 59, 67, 69],
        64: [56, 60, 68, 70],
        65: [57, 61, 71],
        66: [62, 69],
        67: [63, 69, 70],
        68: [64, 70, 71],
        69: [63, 66, 67],
        70: [64, 67, 68],
        71: [65, 68]
      },
      resourceList: {
        0: [0, 3, 4, 7, 8, 12],
        1: [1, 4, 5, 8, 9, 13],
        2: [2, 5, 6, 9, 10, 14],
        3: [7, 11, 12, 16, 17, 22],
        4: [8, 12, 13, 17, 18, 23],
        5: [9, 13, 14, 18, 19, 24],
        6: [10, 14, 15, 19, 20, 25],
        7: [16, 21, 22, 27, 28, 33],
        8: [17, 22, 23, 28, 29, 34],
        9: [18, 23, 24, 29, 30, 35],
        10: [19, 24, 25, 30, 31, 36],
        11: [20, 25, 26, 31, 32, 37],
        12: [28, 33, 34, 38, 39, 43],
        13: [29, 34, 35, 39, 40, 44],
        14: [30, 35, 36, 40, 41, 45],
        15: [31, 36, 37, 41, 42, 46],
        16: [39, 43, 44, 47, 50, 51],
        17: [40, 44, 45, 48, 51, 52],
        18: [41, 45, 46, 49, 52, 53]
      },
      settlementListFromResources: {
        0: [0],
        1: [1],
        2: [2],
        3: [0],
        4: [0, 1],
        5: [1, 2],
        6: [2],
        7: [0, 3],
        8: [0, 1, 4],
        9: [1, 2, 5],
        10: [2, 6],
        11: [3],
        12: [0, 3, 4],
        13: [1, 4, 5],
        14: [2, 5, 6],
        15: [6],
        16: [3, 7],
        17: [3, 4, 8],
        18: [4, 5, 9],
        19: [5, 6, 10],
        20: [6, 11],
        21: [7],
        22: [3, 7, 8],
        23: [4, 8, 9],
        24: [5, 9, 10],
        25: [6, 10, 11],
        26: [11],
        27: [7],
        28: [7, 8, 12],
        29: [8, 9, 13],
        30: [9, 10, 14],
        31: [10, 11, 15],
        32: [11],
        33: [7, 12],
        34: [8, 12, 13],
        35: [9, 13, 14],
        36: [10, 14, 15],
        37: [11, 15],
        38: [12],
        39: [12, 13, 16],
        40: [13, 14, 17],
        41: [14, 15, 18],
        42: [15],
        43: [12, 16],
        44: [13, 16, 17],
        45: [14, 17, 18],
        46: [15, 18],
        47: [16],
        48: [17],
        49: [18],
        50: [16],
        51: [16, 17],
        52: [17, 18],
        53: [18]
      },
      cardHand: {
        0: [0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0]
      },
      commodityList: ['2', '3', '1', '4', '0', '4', '3', '5',
      '2', '1', '2', '1', '4', '0', '3', '0', '0', '1', '2'],
      victoryPoints: [2, 2, 2, 2],
      numberList: ['I', 'H', 'G', 'J', 'P', 'O', 'F', ' ', 'Q',
      'R', 'N', 'E', 'K', 'L', 'M', 'D', 'A', 'B', 'C'],
      dice: false,
      numberOfDice: null,
      rolls: [],
      rollSum: null,
      currentPlayer: 0
    };
    this.shuffleBoard = this.shuffleBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    //this.placeSettlements = this.placeSettlements.bind(this);
    //this.finishSettlements = this.finishSettlements.bind(this);
    this.setColorPurple = this.setColorPurple.bind(this);
    this.setColorOrange = this.setColorOrange.bind(this);
    this.setColorBlue = this.setColorBlue.bind(this);
    this.setColorRed = this.setColorRed.bind(this);
    this.changeColorRed = this.changeColorRed.bind(this);
    this.changeColorBlue = this.changeColorBlue.bind(this);
    this.changeColorOrange = this.changeColorOrange.bind(this);
    this.changeColorPurple = this.changeColorPurple.bind(this);
    //this.placeRoads = this.placeRoads.bind(this);
    //this.finishRoads = this.finishRoads.bind(this);
    this.updateSettlementFilled = this.updateSettlementFilled.bind(this);
    this.updateRoadFilled = this.updateRoadFilled.bind(this);
    this.startGame = this.startGame.bind(this);
    this.passAllCards = this.passAllCards.bind(this);
    this.continueGame = this.continueGame.bind(this);
    this.interpretRoll = this.interpretRoll.bind(this);
    this.diceRoll = this.diceRoll.bind(this);
    this.playTurn = this.playTurn.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.updateValidSettlementsBeforeGame = this.updateValidSettlementsBeforeGame.bind(this);
    this.updateValidRoadsBeforeGame = this.updateValidRoadsBeforeGame.bind(this);

    let settlementCurrentFill = this.state.settlementCurrentFill;

    for (let i = 0; i < 54; i ++) {
      settlementCurrentFill[i] = 4;
    }

    this.setState({settlementCurrentFill: settlementCurrentFill});

    let roadCurrentFill = this.state.roadCurrentFill;

    for (let i = 0; i < 72; i ++) {
      roadCurrentFill[i] = 4;
    }

    this.setState({roadCurrentFill: roadCurrentFill});

    let roadVisibility = this.state.roadVisibility;

    for (let i = 0; i < 72; i ++) {
      roadVisibility[i] = false;
    }

    this.setState({ roadVisibility: roadVisibility });

    let settlementVisibility = this.state.settlementVisibility;

    for (let i = 0; i < 72; i ++) {
      settlementVisibility[i] = false;
    }

    this.setState({ settlementVisibility: settlementVisibility });
  }

  shuffleBoard (event) {
    this.setState({checked: true});
    event.preventDefault();
  }

  resetBoard (event) {
    this.setState({checked: false});
    event.preventDefault();
  }

  /*
  placeSettlements (event) {
    this.setState({settlementplace: true});
    event.preventDefault();
  }
  finishSettlements(event) {
    this.setState({settlementplace: false, color: 4});
    event.preventDefault();
  }*/

  setColorPurple(event) {
    this.setState({color: 0, settlementplace: false, placeRoad: true, roadColor: 0});
    event.preventDefault();
  }

  setColorOrange(event) {
    this.setState({color: 1});
    event.preventDefault();
  }

  setColorBlue(event) {
    this.setState({color: 2});
    event.preventDefault();
  }

  setColorRed(event) {
    this.setState({color: 3});
    event.preventDefault();
  }

  /*
  placeRoads (event) {
    this.setState({placeRoad: true});
    event.preventDefault();
  }
  finishRoads(event) {
    this.setState({placeRoad: false});
    event.preventDefault();
  }*/

  changeColorPurple(event) {
    this.setState({roadColor: 0});
    event.preventDefault();
  }

  changeColorOrange(event) {
    this.setState({roadColor: 1});
    event.preventDefault();
  }

  changeColorBlue(event) {
    this.setState({roadColor: 2});
    event.preventDefault();
  }

  changeColorRed(event) {
    this.setState({roadColor: 3});
    event.preventDefault();
  }

  startGame(event) {
    this.setState({settlementplace: true, color: 0});
    event.preventDefault();
  }

  updateValidSettlementsBeforeGame() {
    let settlementCurrentFill = this.state.settlementCurrentFill;
    for (let i = 0; i < 54; i ++) {
      if (settlementCurrentFill[i] !== 4 && settlementCurrentFill[i] !== 5) {
        let adjacentSettlements = this.state.settlementList[i];
        for (let j = 0; j < adjacentSettlements.length; j ++) {
          settlementCurrentFill[adjacentSettlements[j]] = 5;
        }
      }
    }
    this.setState({settlementCurrentFill: settlementCurrentFill});
  }

  updateValidRoadsBeforeGame(settlementJustPlaced) {
    let roadCurrentFill = this.state.roadCurrentFill;
    for (let i = 0; i < 71; i ++) {
      if (roadCurrentFill[i] === 4 || roadCurrentFill[i] === 5) {
        if (!this.state.roadListFromSettlements[settlementJustPlaced].includes(i)) {
          roadCurrentFill[i] = 5;
        }
        else {
          roadCurrentFill[i] = 4;
        }
      }
    }
    this.setState({roadCurrentFill: roadCurrentFill});
  }

  passAllCards() {
    let cardHand = this.state.cardHand;
    for (let i = 0; i < 54; i ++) {
      if (this.state.settlementCurrentFill[i] !== 4 && this.state.settlementCurrentFill[i] !== 5) {
        //this.state.settlementCurrentFill => Player Color
        //settlementListFromResources => Given settlement, see surrounding resource hexes
        for (let j = 0; j < this.state.settlementListFromResources[i].length; j ++) {
          //Our current value of hex is this.state.settlementListFromResources[i][j]
          //Our current value of resource (as a string) is this.state.commodityList[this.state.settlementListFromResources[i][j]]
          //Our current value of resource (as a integer) is parseInt(this.state.commodityList[this.state.settlementListFromResources[i][j]])
          let resource = parseInt(this.state.commodityList[this.state.settlementListFromResources[i][j]]);

          //Our current player is this.state.settlementCurrentFill[i]
          //Our current hand is cardHand[this.state.settlementCurrentFill[i]]

          //Logic:
          //If the resource is 5, break
          if(resource === 5) {
            break;
          }
          //Else, add 1 to the value of our cardHand's resource
          cardHand[this.state.settlementCurrentFill[i]][resource] ++;
        }
      }
    }
    this.setState({cardHand: cardHand});
  }

  rollDice(currentPlayer) {
    let toRoll = document.getElementsByClassName('rollDice');
    for (let i = 0; i < toRoll.length; i++) {
      toRoll[i].style.display = 'flex';
    }
    let toRollButton = document.getElementById('rollDiceButton');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    toRollButton.style.border = '4px solid ' + playerColors[currentPlayer];
    let toRollDiv = document.getElementById('rollDiceDiv');
    toRollDiv.style.display = 'flex';
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'none';
    }
  }

  playTurn() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'flex';
    }
    let toFinish = document.getElementById('finishTurn');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    toFinish.style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    let toRoll = document.getElementById('rollDiceDiv');
    toRoll.style.display = 'none';
  }

  diceRoll (numberOfDice) {
    this.playTurn();
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice: numberOfDice,
      rolls: rolls,
      rollSum: rollSum
    });
    //If robber then return
    if (rollSum === 7) {
      return;
    }
    //The letters on which the roll was for
    let letterArray = this.interpretRoll(rollSum);
    let cardHand = this.state.cardHand;
    for (let i = 0; i < letterArray.length; i ++) {
      //letterArray[i] is the current letter
      //The current hex number is this.state.numberList.indexOf(letterArray[i])
      //The current commodity is this.state.commodityList[this.state.numberList.indexOf(letterArray[i])]
      //The current card hand is cardHand
      //The settlements in question are this.state.resourceList[this.state.numberList.indexOf(letterArray[i])]
      for (let j = 0; j < this.state.resourceList[this.state.numberList.indexOf(letterArray[i])].length; j ++ ) {
        //Our settlement is this.state.resourceList[this.state.numberList.indexOf(letterArray[i])][j]
        let settlement = this.state.resourceList[this.state.numberList.indexOf(letterArray[i])][j];
        //The owner is this.state.settlementCurrentFill[settlement]
        if (this.state.settlementCurrentFill[settlement] !== 4 && this.state.settlementCurrentFill[settlement] !== 5) {
          //His hand is cardhand[this.state.settlementCurrentFill[settlement]]
          //The commodity we increment is cardHand[this.state.settlementCurrentFill[settlement]][this.state.commodityList(this.state.numberList.indexOf(letterArray[i]))]
          cardHand[this.state.settlementCurrentFill[settlement]][this.state.commodityList[this.state.numberList.indexOf(letterArray[i])]] ++;
        }
      }
    }
    console.log(cardHand);
    this.setState({cardHand: cardHand});
  }

  nextPlayer() {
    let currentPlayer = this.state.currentPlayer;
    currentPlayer ++;
    currentPlayer = currentPlayer % 4;
    this.rollDice(currentPlayer);
    this.setState({currentPlayer: currentPlayer});
  }

  interpretRoll(roll) {
    if (roll === 2) {
      return ['B'];
    }
    if (roll === 3) {
      return ['D', 'Q'];
    }
    if (roll === 4) {
      return ['N', 'J'];
    }
    if (roll === 5) {
      return ['A', 'O'];
    }
    if (roll === 6) {
      return ['P', 'C'];
    }
    if (roll === 8) {
      return ['E', 'K'];
    }
    if (roll === 9) {
      return ['G', 'M'];
    }
    if (roll === 10) {
      return ['F', 'L'];
    }
    if (roll === 11) {
      return ['I', 'R'];
    }
    if (roll === 12) {
      return ['H'];
    }
  }

  passCardsAfterRoll(roll) {
    //If it is a robber return
    if (roll === 7) {
      return;
    }
    //Interpret the roll as some affected Hexes
    let affectedLetters = this.interpretRoll(roll);
    //Looping through affectedLetters
    for (let i = 0; i < affectedLetters.length; i ++) {
      //affectedLetters[i] is the letter of the hex
      //this.state.numberList.indexOf(affectedLetters[i]) is the hex number
      //The list of settlements around the hex is this.state.resourceList[this.state.numberList.indexOf(affectedLetters[i])]
      let listOfSettlements = this.state.resourceList[this.state.numberList.indexOf(affectedLetters[i])];
      //Looping through each settlement
      let cardHand = this.state.cardHand;
      for (let j = 0; j < listOfSettlements.length; j ++) {
        //Check if someone owns the settlement
        if (this.state.settlementCurrentFill[listOfSettlements[j]] !== 4 && this.state.settlementCurrentFill[listOfSettlements[j]] !== 5) {
          //The player who owns the settlement is settlementCurrentFill[listOfSettlements[j]]
          //His hand is cardHand[this.state.settlementCurrentFill[listOfSettlements[j]]]
          //The current commodity in question is this.state.commodityList[this.state.numberList.indexOf(affectedLetters[i])]
          cardHand[this.state.settlementCurrentFill[listOfSettlements[j]]][this.state.commodityList[this.state.numberList.indexOf(affectedLetters[i])]] ++;
        }
      }
      this.setState({cardHand: cardHand});
    }
  }

  continueGame() {
    this.passAllCards();
    this.rollDice(0);
  }

  updateSettlementFilled(id, color) {

    let settlementCurrentFill = this.state.settlementCurrentFill;
    let settlementVisibility = this.state.settlementVisibility;

    if (this.state.colorOrder[this.state.colorPosition] === -1) {
      this.setState({color: color, settlementplace: false, placeRoad: false, roadColor: color, showButton: false});
      return;
    }

    if (color === 4) {
      return;
    }

    if(settlementCurrentFill[id] === color) {
      settlementCurrentFill[id] = 4;
      settlementVisibility[id] = false;
    }

    else if (settlementCurrentFill[id] !== 4) {
      return;
    }

    else {
      settlementCurrentFill[id] = color;
      settlementVisibility[id] = true;
      this.setState({color: color, settlementplace: false, placeRoad: true, roadColor: color});
    }

    this.updateValidSettlementsBeforeGame();
    this.updateValidRoadsBeforeGame(id);
    this.setState({settlementCurrentFill: settlementCurrentFill, settlementVisibility: settlementVisibility});
  }

  updateRoadFilled(id, color) {

    let roadCurrentFill = this.state.roadCurrentFill;
    let roadVisibility = this.state.roadVisibility;

    if (color === 4) {
      return;
    }

    if(roadCurrentFill[id] === color) {
      roadCurrentFill[id] = 4;
      roadVisibility[id] = false;
    }

    else if (roadCurrentFill[id] !== 4) {
      return;
    }

    else {
      roadCurrentFill[id] = color;
      roadVisibility[id] = true;

    }

    if (this.state.colorOrder[this.state.colorPosition + 1] === -1) {
      this.setState({roadCurrentFill: roadCurrentFill, roadVisibility: roadVisibility, settlementplace: false,
        placeRoad: false, color: this.state.colorOrder[this.state.colorPosition + 1],
        colorPosition: this.state.colorPosition + 1, showButton: false});
      this.continueGame();
      console.log(this.state.cardHand);
    }

    else {
      this.setState({roadCurrentFill: roadCurrentFill, roadVisibility: roadVisibility, settlementplace: true,
        placeRoad: false, color: this.state.colorOrder[this.state.colorPosition + 1],
        colorPosition: this.state.colorPosition + 1});
    }
  }

  render() {

    let commodityList = ['2', '3', '1', '4', '0', '4', '3', '5', '2', '1',
    '2', '1', '4', '0', '3', '0', '0', '1', '2'];

    let numberList = ['I', 'H', 'G', 'J', 'P', 'O', 'F', ' ', 'Q', 'R', 'N', 'E', 'K', 'L', 'M', 'D', 'A', 'B', 'C'];

    let robberPosition1 = commodityList.indexOf('5');
    let robberPosition2 = numberList.indexOf(' ');

    numberList[robberPosition2] = numberList[robberPosition1];
    numberList[robberPosition1] = ' '

    if(this.state.checked && !this.state.settlementplace){

      commodityList = shuffleArray(commodityList);
      numberList = shuffleArray(numberList);

      let robberPosition1 = commodityList.indexOf('5');
      let robberPosition2 = numberList.indexOf(' ');

      numberList[robberPosition2] = numberList[robberPosition1];
      numberList[robberPosition1] = ' ';
    }


    if (this.state.placeRoad) {

      let changeColor = document.getElementsByClassName('changeColor');
      let placeRoads = document.getElementsByClassName('placeRoads');

      for (let i = 0; i < changeColor.length; i ++) {
        changeColor[i].style.display = 'inline-block';
      }

      for (let i = 0; i < placeRoads.length; i ++) {
        placeRoads[i].style.display = 'none';
      }
    }

    if (!this.state.settlementplace) {

      let changeSettlement = document.getElementsByClassName('changeSettlement');

      for (let i = 0; i < changeSettlement.length; i ++) {
        changeSettlement[i].style.display = 'none';
      }
    }

    if (!this.state.placeRoad) {

      let changeColor = document.getElementsByClassName('changeColor');
      let placeRoads = document.getElementsByClassName('placeRoads');

      for (let i = 0; i < changeColor.length; i ++) {
        changeColor[i].style.display = 'none';
      }

      for (let i = 0; i < placeRoads.length; i ++) {
        placeRoads[i].style.display = 'inline-block';
      }
    }

    if (this.state.settlementplace) {

      let changeSettlement = document.getElementsByClassName('changeSettlement');
      let placeRoads = document.getElementsByClassName('placeRoads');
      let changeColor = document.getElementsByClassName('changeColor');

      for (let i = 0; i < changeSettlement.length; i ++) {
        changeSettlement[i].style.display = 'inline-block';
      }

      for (let i = 0; i < placeRoads.length; i ++) {
        placeRoads[i].style.display = 'none';
      }

      for (let i = 0; i < changeColor.length; i ++) {
        changeColor[i].style.display = 'none';
      }
    }

    if (!this.state.showButton) {

      let changeSettlement = document.getElementsByClassName('changeSettlement');
      let placeRoads = document.getElementsByClassName('placeRoads');
      let changeColor = document.getElementsByClassName('changeColor');

      for (let i = 0; i < changeSettlement.length; i ++) {
        changeSettlement[i].style.display = 'none';
      }

      for (let i = 0; i < placeRoads.length; i ++) {
        placeRoads[i].style.display = 'none';
      }

      for (let i = 0; i < changeColor.length; i ++) {
        changeColor[i].style.display = 'none';
      }
    }

    let roadID = [];

    for (let i = 0; i < 72; i ++) {
      roadID.push(i);
    }

    const DiceImage = ({ roll }) => {
      if (roll === 1) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={one} alt="1" />;
      } else if (roll === 2) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={two} alt="2" />;
      } else if (roll === 3) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={three} alt="3" />;
      } else if (roll === 4) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={four} alt="4" />;
      } else if (roll === 5) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={five} alt="5" />;
      } else if (roll === 6) {
        return <img style={{margin: '10px', display: 'inline-block'}} className="dice-image" src={six} alt="6" />;
      }
    };

    return(

      <div style={{textAlign:' center'}}>

        {/*<div>
          <img style = {{width: '700px'}} src = 'http://snowconmaine.com/main/wp-content/uploads/2018/01/catan2018.png'/>
        </div>*/}

        <div className="bigHexagon" style={{marginRight: '2px', cursor: 'pointer'}}>

          <div className="bigHexagonTop" style={{borderRight: '300px solid #2ba9db'}} />
          <div className="bigHexagonMiddle" style={{verticalAlign: 'baseline', textAlign: 'center',
            backgroundColor: '#2ba9db'}} />
          <div className="bigHexagonBottom" style={{borderLeft: '300px solid #2ba9db'}} />

        </div>

        <div style = {{display: 'inline-block', marginTop: '120px'}}>

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(0, 3)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[0, 1, 2]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['250px', '140px', '140px']} verticalMargins = '-40px' />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(3, 7)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[3, 4, 5, 6]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['161px', '140px', '140px', '140px']} verticalMargins = '0px' />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(0, 4)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(0, 4)} margin={'-280px'} roadStyle={0} roadNumber={4} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(4, 8)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(4, 8)}  margin={'-233px'} roadStyle={1} roadNumber={4} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(8, 11)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(8, 11)} margin={'-145px'} roadStyle={1} roadNumber={2} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(11, 15)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(11, 15)} margin={'-324px'} roadStyle={2} roadNumber={4} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(15, 18)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(15, 18)} margin={'-235px'} roadStyle={2} roadNumber={2} />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(7, 11)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[7, 8, 9, 10]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['161px', '140px', '140px', '140px']} verticalMargins = '110px' />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(11, 16)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[11, 12, 13, 14, 15]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['75px', '140px', '140px', '140px', '140px']}/>

          <HexagonRow commodityArray = {commodityList.slice(0, 3)} letterArray = {numberList.slice(0, 3)}/>

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(18, 23)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(18, 23)} margin={'-367px'} roadStyle={0} roadNumber={5} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(23, 28)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(23, 28)} margin={'-320px'} roadStyle={1} roadNumber={5} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(28, 33)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad}
            roadVisibility={this.state.roadVisibility.slice(28, 33)} margin={'-412px'} roadStyle={2} roadNumber={5} />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(16, 21)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[16, 17, 18, 19, 20]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '-45px' />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(21, 27)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled}
            id={[21, 22, 23, 24, 25, 26]} fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['-13px', '140px', '140px', '140px', '140px', '140px']}/>

          <HexagonRow commodityArray = {commodityList.slice(3, 7)} letterArray = {numberList.slice(3, 7)}/>

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(33, 39)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-455px'}
            roadVisibility={this.state.roadVisibility.slice(33, 39)} roadStyle={0} roadNumber={6} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(39, 44)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-412px'}
            roadVisibility={this.state.roadVisibility.slice(39, 44)} roadStyle={1} roadNumber={5} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(44, 49)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-320px'}
            roadVisibility={this.state.roadVisibility.slice(44, 49)} roadStyle={2} roadNumber={5} />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(27, 33)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled}
            id={[27, 28, 29, 30, 31, 32]}  fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['-13px', '140px', '140px', '140px', '140px', '140px']} verticalMargins = '-40px'/>

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(33, 38)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[33, 34, 35, 36, 37]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '0px' />

          <HexagonRow commodityArray = {commodityList.slice(7, 12)} letterArray = {numberList.slice(7, 12)}/>

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(49, 54)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-367px'}
            roadVisibility={this.state.roadVisibility.slice(49, 54)} roadStyle={0} roadNumber={5} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(54, 58)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-324px'}
            roadVisibility={this.state.roadVisibility.slice(54, 58)} roadStyle={1} roadNumber={4} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(58, 62)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-233px'}
            roadVisibility={this.state.roadVisibility.slice(58, 62)} roadStyle={2} roadNumber={4} />

          <HexagonRow commodityArray = {commodityList.slice(12, 16)} letterArray = {numberList.slice(12, 16)}/>

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(38, 43)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[38, 39, 40, 41, 42]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '-200px'/>

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(43, 47)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[43, 44, 45, 46]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['162px', '140px', '140px', '140px']} verticalMargins = '620px'/>

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(62, 66)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-280px'}
            roadVisibility={this.state.roadVisibility.slice(62, 66)} roadStyle={0} roadNumber={4} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(66, 69)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-235px'}
            roadVisibility={this.state.roadVisibility.slice(66, 69)} roadStyle={1} roadNumber={3} />

          <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(69, 72)}
            color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-145px'}
            roadVisibility={this.state.roadVisibility.slice(69, 72)} roadStyle={2} roadNumber={3} />

          <HexagonRow commodityArray = {commodityList.slice(16, 19)} letterArray = {numberList.slice(16, 19)}/>

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(47, 50)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[47, 48, 49]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['250px', '140px', '140px']} verticalMargins = '0px' />

          <SettlementRow settlementVisibility={this.state.settlementVisibility.slice(50, 54)}
            placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[50, 51, 52, 53]}
            fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
            leftMargins = {['161px', '140px', '140px', '140px']} verticalMargins = '720px' />

        </div>

        <br />
        <br />
        <br />

        <button className='placeRoads' onClick={this.shuffleBoard}>Shuffle Board</button>

        <button className='placeRoads' onClick={this.resetBoard}>Reset Board</button>

        <button className='placeRoads' onClick={this.startGame}>Start Game</button>

        <div id='rollDiceDiv' className='rollDice' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '0%', marginTop: '-200px'}}>
          <div style={{textAlign: 'center'}}>
            <button id='rollDiceButton' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
            margin: '4px', backgroundColor: 'white'}} onClick = {() => this.diceRoll(2)}>
              Roll Dice
            </button>
          </div>
        </div>

        <div className='playerTurn' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '0%', marginTop: '-200px'}}>
          <div style={{textAlign: 'center'}}>
            <button id='finishTurn' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
            margin: '4px', backgroundColor: 'white'}} onClick = {() => this.nextPlayer()}>
              Done
            </button>
          </div>
        </div>

        <div className='rollDice' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '75%', marginTop: '-200px'}}>
          <div style = {{textAlign: 'center', display: 'float'}}>
            {this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)}
          </div>
        </div>

       {/* <div style={{display: 'flex', flexFlow: 'nowrap', marginLeft: '80%', marginTop: '-100px'}}>
          <button class='changeColor' style = {{height: '100px', width: '100px', borderRadius: '50%', marginLeft: '50%'}} onClick={this.finishRoads}>Finish Roads</button>
        </div>
        <div style={{display: 'flex', flexFlow: 'nowrap', marginTop: '-40px'}}>
          <button class='changeColor' style = {{height: '100px', width: '100px', borderRadius: '50%', border: '2px solid purple', margin: '2px'}}
          onClick={this.changeColorPurple}>Purple</button>
          <button class='changeColor' style = {{height: '100px', width: '100px', borderRadius: '50%', border: '2px solid orange', margin: '2px'}}
          onClick={this.changeColorOrange}>Orange</button>
          <button class='changeColor' style = {{height: '100px', width: '100px', borderRadius: '50%', border: '2px solid blue', margin: '2px'}}
          onClick={this.changeColorBlue}>Blue</button>
          <button class='changeColor' style = {{height: '100px', width: '100px', borderRadius: '50%', border: '2px solid red', margin: '2px'}}
          onClick={this.changeColorRed}>Red</button>
        </div>
        <div style={{display: 'flex', flexFlow: 'nowrap', marginTop: '-40px'}}>
          <button class='changeSettlement' style = {{display: 'none', height: '100px', width: '100px', borderRadius: '50%', border: '2px solid purple', margin: '2px'}}
          onClick={this.setColorPurple}>Next</button>
          <button class='changeSettlement' style = {{display: 'none', height: '100px', width: '100px', borderRadius: '50%', border: '2px solid orange', margin: '2px'}}
          onClick={this.setColorOrange}>Orange</button>
          <button class='changeSettlement' style = {{display: 'none', height: '100px', width: '100px', borderRadius: '50%', border: '2px solid blue', margin: '2px'}}
          onClick={this.setColorBlue}>Blue</button>
          <button class='changeSettlement' style = {{display: 'none', height: '100px', width: '100px', borderRadius: '50%', border: '2px solid red', margin: '2px'}}
          onClick={this.setColorRed}>Red</button>
      </div>
        <div style={{display: 'flex', flexFlow: 'nowrap', marginLeft: '80%', marginTop: '-100px'}}>
          <button class='changeSettlement' style = {{display: 'none', height: '100px', width: '100px', borderRadius: '50%', marginLeft: '50%'}}
          onClick={this.finishSettlements}>Finish Settlements</button>
      </div>*/}
      </div>
    );
  }
}

export default App;