import React, { Component } from 'react';
import './catanGame.css';
import HexagonRow from './hexagonrow.js';
import SettlementRow from './settlementrow';
import RoadRow from './roadRow.js';
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";
import brick from './assets/brick.png';
import sheep from './assets/sheep.png';
import wood from './assets/wood.png';
import wheat from './assets/wheat.png';
import ore from './assets/ore.png';

//Function to shuffle arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

class CatanGame extends Component {
  constructor () {
    super();
    /*
      * this.state is a JSON Object
      * Each element is in the form key: value
    */
    this.state = {
      /*
        * this.state.checked is a boolean
        * It is true if the player chooses to shuffle the board
        * It is false otherwise
      */
      checked : false,
      /*
        * this.state.settlementplace is a boolean
        * It is true if a player chooses to place a settlement
        * It is false otherwise
      */
      settlementplace: false,
      /*
        * this.state.color is an integer
        * It is the color of the settlement that is currently being placed
      */
      color: 4,
      /*
        * this.state.roadColor is an integer
        * It is the color of the road that is currently being placed
      */
      roadColor: 4,
      /*
        * this.state.placeRoad is a boolean
        * It is true if a player chooses to place a road
        * It is false otherwise
      */
      placeRoad: false,
      /*
        * this.state.settlementCurrentFill is a JSON Object
        * Each element is in the form key: value
        * Key is the settlement id
        * Value is the owner of the settlement (0 - 3), the unfilled settlement (4), or an invalid settlement (5)
      */
      settlementCurrentFill: {},
      /*
        * this.state.roadCurrentFill is a JSON Object
        * Each element is in the form key: value
        * Key is the road id
        * Value is the owner of the road (0 - 3), the unfilled road (4), or an invalid road (5)
      */
      roadCurrentFill: {},
      /*
        * this.state.roadVisibility is an array
        * Each element is a boolean
        * Index is the road number
        * Value is true if the road can currently be seen
        * Value is false otherwise
      */
      roadVisibility: [],
      /*
        * this.state.settlementVisibility is an array
        * Each element is a boolean
        * Index is the settlement number
        * Value is true if the settlement can currently be seen
        * Value is false otherwise
      */
      settlementVisibility: [],
      /*
        * this.state.colorOrder is an array
        * Each element is a integer
        * Index is the turn number while placing the initial settlements
        * Value is the player to place thier settlement
      */
      colorOrder: [0, 1, 2, 3, 3, 2, 1, 0, -1],
      /*
        * this.state.colorPosition is an integer
        * It is a counter for the array colorOrder
      */
      colorPosition: 0,
      /*
        * this.state.showButton is a boolean
        * It is true if we want to show the buttons for each color when building a settlement or road
        * It is false otherwise
        * Note this boolean is depricated so it is always false
      */
      showButton: true,
      /*
        * this.state.settlementList is a JSON Object
        * Each element is in the form key: value
        * Key is the settlement id
        * Value is an array
        * Each element of value is a settlement id adjacent to the settlement with id key
      */
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
        33: [27, 28, 38],
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
      /*
        * this.state.roadListFromSettlements is a JSON Object
        * Each element is in the form key: value
        * Key is the settlement id
        * Value is an array
        * Each element of value is a road id adjacent to the settlement with id key
      */
      roadListFromSettlements: {
        0: [8, 15],
        1: [9, 16],
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
      /*
        * this.state.roadList is a JSON Object
        * Each element is in the form key: value
        * Key is the road id
        * Value is an array
        * Each element of value is a road id adjacent to the road with id key
      */
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
      /*
        * this.state.resourceList is a JSON Object
        * Each element is in the form key: value
        * Key is the resource hexagon id
        * Value is an array
        * Each element of value is a settlement id adjacent to the resource hexagon with id key
      */
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
      /*
        * this.state.settlementListFromResources is a JSON Object
        * Each element is in the form key: value
        * Key is the settlement id
        * Value is an array
        * Each element of value is a resource hexagon id adjacent to the settlement with id key
      */
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
      /*
        * this.state.settlementList is a JSON Object
        * Each element is in the form key: value
        * Key is the player id
        * Value is an array
        * Each element of value is the number of cards of a certain commodity
          * 0 is Ore
          * 1 is Wheat
          * 2 is Wood
          * 3 is Sheep
          * 4 is Brick
      */
      cardHand: {
        0: [0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0]
      },
      /*
        * this.state.commodityList is an array
        * Index is the resource hexagon id
        * Value is a string with the commodity of the resource hexagon on it
          * 0 is Ore
          * 1 is Wheat
          * 2 is Wood
          * 3 is Sheep
          * 4 is Brick
      */
      commodityList: ['2', '3', '1', '4', '0', '4', '3', '5',
      '2', '1', '2', '1', '4', '0', '3', '0', '0', '1', '2'],
      /*
        * this.state.victoryPoints is an array
        * Index is the player id
        * Value is the amount of victory points the player with id key has
      */
      victoryPoints: [2, 2, 2, 2],
      /*
        * this.state.numberList is an array
        * Index is the resource hexagon id
        * Value is a string with the number of the resource hexagon on it
      */
      numberList: ['I', 'H', 'G', 'J', 'P', 'O', 'F', ' ', 'Q',
      'R', 'N', 'E', 'K', 'L', 'M', 'D', 'A', 'B', 'C'],
      /*
        * this.state.numberOfDice is an integer
        * It is the number of dice we roll on each turn
        * Note this integer is depricated so it is always 2
      */
      numberOfDice: null,
      /*
        * this.state.rolls is an array
        * Index is the dice number
        * Value is the roll of the dice
      */
      rolls: [],
      /*
        * this.state.finalRoll is an array
        * Index is the dice number
        * Value is the final roll of the dice
      */
      finalRoll: [],
      /*
        * this.state.rollSum is an integer
        * It is the sum of dice we roll on each turn
      */
      rollSum: null,
      /*
        * this.state.currentPlayer is an integer
        * It is the id of the player who is currently on his turn
      */
      currentPlayer: 0,
      /*
        * this.state.settlementType is an array
        * Index is the settlement id
        * Value is an integer 1 (if it is a settlement) and 2 (if it is a city)
      */
      settlementType: [],
      /*
        * this.state.choosingCities is a boolean
        * It is true if we are placing cities
        * It is false otherwise
      */
      choosingCities: false,
      /*
        * this.state.turnStarted is a boolean
        * It is true if a turn is in progress
        * It is false otherwise
      */
      turnStarted: false,
      robberHex: 7,
      toMoveRobber: false,
      discardCards: false,
      playersToDiscard: 0,
      currentDiscarder: 4,
      cardsLeft: 0
    };

    //These are the binds of all of our functions
    this.shuffleBoard = this.shuffleBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.setColorPurple = this.setColorPurple.bind(this);
    this.setColorOrange = this.setColorOrange.bind(this);
    this.setColorBlue = this.setColorBlue.bind(this);
    this.setColorRed = this.setColorRed.bind(this);
    this.changeColorRed = this.changeColorRed.bind(this);
    this.changeColorBlue = this.changeColorBlue.bind(this);
    this.changeColorOrange = this.changeColorOrange.bind(this);
    this.changeColorPurple = this.changeColorPurple.bind(this);
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
    this.openTradeMenu = this.openTradeMenu.bind(this);
    this.exitTradeMenu = this.exitTradeMenu.bind(this);
    this.tradeCommodityAway = this.tradeCommodityAway.bind(this);
    this.openBuildMenu = this.openBuildMenu.bind(this);
    this.buildRoad = this.buildRoad.bind(this);
    this.exitBuildMenu = this.exitBuildMenu.bind(this);
    this.updateValidRoadsAfterGame = this.updateValidRoadsAfterGame.bind(this);
    this.buildSettlement = this.buildSettlement.bind(this);
    this.buildCity = this.buildCity.bind(this);
    this.stopDiceRoll = this.stopDiceRoll.bind(this);
    this.finishPlayerTurn = this.finishPlayerTurn.bind(this);
    this.sum = this.sum.bind(this);
    this.createButtons = this.createButtons.bind(this);
    this.discardCards = this.discardCards.bind(this);
    this.moveRobber = this.moveRobber.bind(this);
    this.robberMoved = this.robberMoved.bind(this);
    this.stealCards = this.stealCards.bind(this);
    this.takeACard = this.takeACard.bind(this);
    this.setDiscarder = this.setDiscarder.bind(this);
    this.discardCommodity = this.discardCommodity.bind(this);

    /*
      * We are setting each settlement as unfilled
    */
    let settlementCurrentFill = this.state.settlementCurrentFill;

    for (let i = 0; i < 54; i ++) {
      settlementCurrentFill[i] = 4;
    }

    this.setState({settlementCurrentFill: settlementCurrentFill});

    /*
      * We are setting each road as unfilled
    */

    let roadCurrentFill = this.state.roadCurrentFill;

    for (let i = 0; i < 72; i ++) {
      roadCurrentFill[i] = 4;
    }

    this.setState({roadCurrentFill: roadCurrentFill});

    /*
      * We are setting each road as invisible
    */

    let roadVisibility = this.state.roadVisibility;

    for (let i = 0; i < 72; i ++) {
      roadVisibility[i] = false;
    }

    this.setState({ roadVisibility: roadVisibility });

    /*
      * We are setting each settlement as invisible
    */

    let settlementVisibility = this.state.settlementVisibility;

    for (let i = 0; i < 72; i ++) {
      settlementVisibility[i] = false;
    }

    this.setState({ settlementVisibility: settlementVisibility });

    /*
      * We are setting each settlement as a regular settlement
    */

    let settlementType = this.state.settlementType;

    for (let i = 0; i < 54; i ++) {
      settlementType[i] = 1;
    }

    this.setState({ settlementType: settlementType });
  }

  shuffleBoard (event) {
    this.setState({checked: true});
    event.preventDefault();
  }

  resetBoard (event) {
    this.setState({checked: false});
    event.preventDefault();
  }

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
      if (settlementCurrentFill[i] === 4 || settlementCurrentFill[i] === 5) {
        settlementCurrentFill[i] = 4;
      }
    }
    for (let i = 0; i < 54; i ++) {
      if (settlementCurrentFill[i] !== 4 && settlementCurrentFill[i] !== 5) {
        let adjacentSettlements = this.state.settlementList[i];
        for (let j = 0; j < adjacentSettlements.length; j ++) {
          settlementCurrentFill[adjacentSettlements[j]] = 5;
        }
      }
    }
    this.setState({settlementCurrentFill: settlementCurrentFill});
    return settlementCurrentFill;
  }

  updateValidSettlementsAfterGame() {
    let settlementCurrentFill = this.updateValidSettlementsBeforeGame();
    let validSettlements = 0;
    for (let i = 0; i < 54; i ++) {
      if (settlementCurrentFill[i] === 4) {
        for (let j = 0; j < this.state.roadListFromSettlements[i].length; j ++) {
          if (this.state.roadCurrentFill[this.state.roadListFromSettlements[i][j]] === this.state.currentPlayer) {
            settlementCurrentFill[i] = 4;
            validSettlements ++;
            break;
          }
          else if (j === this.state.roadListFromSettlements[i].length - 1) {
            settlementCurrentFill[i] = 5;
          }
        }
      }
    }
    this.setState({settlementCurrentFill: settlementCurrentFill});
    return validSettlements;
  }

  updateValidRoadsBeforeGame(settlementJustPlaced) {
    let roadCurrentFill = this.state.roadCurrentFill;
    for (let i = 0; i < 72; i ++) {
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

  updateValidRoadsAfterGame() {
    let roadCurrentFill = this.state.roadCurrentFill;
    let validRoads = 0;
    for (let i = 0; i < 72; i ++) {
      if (roadCurrentFill[i] === 4 || roadCurrentFill[i] === 5) {
        roadCurrentFill[i] = 5;
        for (let j = 0; j < this.state.roadList[i].length; j ++) {
          if (roadCurrentFill[this.state.roadList[i][j]] === this.state.currentPlayer) {
            roadCurrentFill[i] = 4;
            validRoads ++;
            break;
          }
        }
      }
    }
    this.setState({roadCurrentFill: roadCurrentFill});
    return validRoads;
  }

  updateValidCities() {
    let validCities = 0;
    for (let i = 0; i < 54; i ++) {
      if (this.state.settlementCurrentFill[i] === this.state.currentPlayer) {
        if (this.state.settlementType[i] === 1) {
          validCities ++;
        }
      }
    }
    return validCities;
  }

  passAllCards() {
    let cardHand = {0: [0, 0, 0, 0, 0], 1: [0, 0, 0, 0, 0], 2: [0, 0, 0, 0, 0], 3: [0, 0, 0, 0, 0] };
    for (let i = 0; i < 54; i ++) {
      if (this.state.settlementCurrentFill[i] !== 4 && this.state.settlementCurrentFill[i] !== 5) {
        for (let j = 0; j < this.state.settlementListFromResources[i].length; j ++) {
          let resource = parseInt(this.state.commodityList[this.state.settlementListFromResources[i][j]]);
          if(resource === 5) {
            continue;
          }
          cardHand[this.state.settlementCurrentFill[i]][resource] ++;
        }
      }
    }
    this.setState({cardHand: cardHand});
  }

  rollDice(currentPlayer) {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'none';
    }
    if (this.state.victoryPoints[0] >= 10 || this.state.victoryPoints[1] >= 10 || this.state.victoryPoints[2] >= 10 || this.state.victoryPoints[3] >= 10) {
      return;
    }
    let toRollButton = document.getElementById('rollDiceButton');
    let toStopButton = document.getElementById('stopDiceButton');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    toRollButton.style.border = '4px solid ' + playerColors[currentPlayer];
    toStopButton.style.border = '4px solid ' + playerColors[currentPlayer];
    let toRollDiv = document.getElementById('rollDiceDiv');
    toRollDiv.style.display = 'flex';
  }

  playTurn() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'flex';
    }
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    document.getElementById('finishTurn').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('trade').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('build').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('rollDiceDiv').style.display = 'none';
  }

  tradeCommodityAway(resource) {
    let cardHand = this.state.cardHand;
    cardHand[this.state.currentPlayer][resource] -= 4;
    this.setState({cardHand: cardHand});
    let toTrade = document.getElementsByClassName('toTradePart1');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    for (let i = 0; i < toTrade.length; i ++) {
      toTrade[i].style.display = 'none';
    }
    let toNowTrade = document.getElementsByClassName('toTradePart2');
    for (let i = 0; i < toNowTrade.length; i ++) {
      toNowTrade[i].style.display = 'flex';
    }
    for (let i = 0; i < 5; i ++) {
      if (i === resource) {
        document.getElementById('get' + i).style.display = 'none';
      }
      else {
        document.getElementById('get' + i).style.display = 'flex';
        document.getElementById('get' + i).style.border = '4px solid ' + playerColors[this.state.currentPlayer];
      }
    }
  }

  getCommodity(resource) {
    let cardHand = this.state.cardHand;
    cardHand[this.state.currentPlayer][resource] ++;
    this.setState({cardHand: cardHand});
    let toTrade = document.getElementsByClassName('toTradePart2');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    for (let i = 0; i < toTrade.length; i ++) {
      toTrade[i].style.display = 'none';
    }
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'flex';
    }
  }

  openTradeMenu() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'none';
    }
    let toTrade = document.getElementsByClassName('toTradePart1');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    for (let i = 0; i < toTrade.length; i ++) {
      toTrade[i].style.display = 'flex';
    }
    for (let i = 0; i < 5; i ++)  {
      document.getElementById('trade' + i).style.border = '4px solid ' + playerColors[this.state.currentPlayer];
      if (this.state.cardHand[this.state.currentPlayer][i] < 4) {
        document.getElementById('trade' + i).disabled = true;
      }
      else {
        document.getElementById('trade' + i).disabled = false;
      }
    }
    document.getElementById('exitTrade').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
  }

  exitTradeMenu() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'flex';
    }
    let toTrade = document.getElementsByClassName('toTradePart1');
    for (let i = 0; i < toTrade.length; i ++) {
      toTrade[i].style.display = 'none';
    }
  }

  openBuildMenu() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'none';
    }
    let toBuild = document.getElementsByClassName('toBuild');
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    for (let i = 0; i < toBuild.length; i ++) {
      toBuild[i].style.display = 'flex';
    }
    document.getElementById('buildRoad').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('buildSettlement').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('buildCity').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    document.getElementById('exitBuild').style.border = '4px solid ' + playerColors[this.state.currentPlayer];
    let validRoads = this.updateValidRoadsAfterGame();
    if(this.state.cardHand[this.state.currentPlayer][2] < 1 || this.state.cardHand[this.state.currentPlayer][4] < 1 || validRoads <= 0) {
      document.getElementById('buildRoad').disabled = true;
    }
    else {
      document.getElementById('buildRoad').disabled = false;
    }
    let validSettlements = this.updateValidSettlementsAfterGame();
    if(this.state.cardHand[this.state.currentPlayer][1] < 1 || this.state.cardHand[this.state.currentPlayer][2] < 1 || this.state.cardHand[this.state.currentPlayer][3] < 1 || this.state.cardHand[this.state.currentPlayer][4] < 1 || validSettlements <= 0) {
      document.getElementById('buildSettlement').disabled = true;
    }
    else {
      document.getElementById('buildSettlement').disabled = false;
    }
    let validCities = this.updateValidCities();
    if(this.state.cardHand[this.state.currentPlayer][0] < 3 || this.state.cardHand[this.state.currentPlayer][1] < 2 || validCities <= 0) {
      document.getElementById('buildCity').disabled = true;
    }
    else {
      document.getElementById('buildCity').disabled = false;
    }
  }

  exitBuildMenu() {
    let toPlay = document.getElementsByClassName('playerTurn');
    for (let i = 0; i < toPlay.length; i++) {
      toPlay[i].style.display = 'flex';
    }
    let toBuild = document.getElementsByClassName('toBuild');
    for (let i = 0; i < toBuild.length; i ++) {
      toBuild[i].style.display = 'none';
    }
  }

  buildRoad() {
    let cardHand = this.state.cardHand;
    cardHand[this.state.currentPlayer][2] -= 1;
    cardHand[this.state.currentPlayer][4] -= 1;
    let toBuild = document.getElementsByClassName('toBuild');
    for (let i = 0; i < toBuild.length; i ++) {
      toBuild[i].style.display = 'none';
    }
    this.setState({roadColor: this.state.currentPlayer, placeRoad: true, cardHand: cardHand});
  }

  buildSettlement() {
    let cardHand = this.state.cardHand;
    cardHand[this.state.currentPlayer][1] -= 1;
    cardHand[this.state.currentPlayer][2] -= 1;
    cardHand[this.state.currentPlayer][3] -= 1;
    cardHand[this.state.currentPlayer][4] -= 1;
    let toBuild = document.getElementsByClassName('toBuild');
    for (let i = 0; i < toBuild.length; i ++) {
      toBuild[i].style.display = 'none';
    }
    let victoryPoints = this.state.victoryPoints;
    victoryPoints[this.state.currentPlayer] ++;
    this.setState({color: this.state.currentPlayer, settlementplace: true, cardHand: cardHand, victoryPoints: victoryPoints});
  }

  buildCity() {
    let cardHand = this.state.cardHand;
    cardHand[this.state.currentPlayer][0] -= 3;
    cardHand[this.state.currentPlayer][1] -= 2;
    let toBuild = document.getElementsByClassName('toBuild');
    for (let i = 0; i < toBuild.length; i ++) {
      toBuild[i].style.display = 'none';
    }
    let victoryPoints = this.state.victoryPoints;
    victoryPoints[this.state.currentPlayer] ++;
    this.setState({color: this.state.currentPlayer, settlementplace: true, cardHand: cardHand, victoryPoints: victoryPoints, choosingCities: true});
  }

  stopDiceRoll() {
    document.getElementById('changingDice').style.display = 'none';
    document.getElementById('fixedDice').style.display = 'flex';
    document.getElementById('rollDiceButton').style.display = 'inline-block';
    document.getElementById('stopDiceButton').style.display = 'none';
    if (!this.state.turnStarted) {
      this.finishPlayerTurn();
    }
  }

  discardCards() {
    let sum = 0;
    document.getElementById('toDiscard').style.display = 'flex';
    let counter = 0;
    for (let i = 0; i < 4; i ++) {
      sum = this.sum(this.state.cardHand[i]);
      if(sum > 7) {
        document.getElementById('discard' + i).style.display = 'flex';
        counter ++;
      }
      else {
        document.getElementById('discard' + i).style.display = 'none';
      }
    }
    this.setState({discardCards: true, playersToDiscard: counter});
    if (counter === 0) {
      this.moveRobber();
    }
  }

  setDiscarder(id) {
    document.getElementById('toDiscard').style.display = 'none';
    document.getElementById('discardResource').style.display = 'flex';
    let cardsLeft = Math.floor(this.sum(this.state.cardHand[id])/2);
    this.setState({currentDiscarder: id, cardsLeft: cardsLeft});
    let playerColors = ['purple', 'orange', 'blue', 'red', 'grey'];
    for (let i = 0; i < 5; i ++) {
      document.getElementById('discardResource' + i).style.border = '4px solid ' + playerColors[this.state.currentDiscarder];
    }
    for (let i = 0; i < 5; i ++) {
      if (this.state.cardHand[id][i] < 1) {
        document.getElementById('discardResource' + i).disabled = true;
      }
      else {
        document.getElementById('discardResource' + i).disabled = false;
      }
    }
  }

  discardCommodity(commodity) {
    let cardHand = this.state.cardHand;
    if (cardHand[this.state.currentDiscarder][commodity] < 1) {
      return;
    }
    cardHand[this.state.currentDiscarder][commodity] --;
    console.log(cardHand);
    this.setState({cardHand: cardHand});
    let playersToDiscard = this.state.playersToDiscard;
    if (this.sum(cardHand[this.state.currentDiscarder]) <= this.state.cardsLeft) {
        document.getElementById('toDiscard').style.display = 'flex';
        document.getElementById('discardResource').style.display = 'none';
        document.getElementById('discard' + this.state.currentDiscarder).style.display = 'none';
        playersToDiscard --;
        this.setState({playersToDiscard: playersToDiscard});
    }
    if (playersToDiscard === 0) {
      this.moveRobber();
    }
    for (let i = 0; i < 5; i ++) {
      if (cardHand[this.state.currentDiscarder][i] < 1) {
        document.getElementById('discardResource' + i).disabled = true;
      }
    }
  }

  moveRobber() {
    document.getElementById('rollDiceDiv').style.display = 'none';
    this.setState({toMoveRobber: true});
  }

  stealCards(id) {
    for (let i = 0; i < 4; i ++) {
      document.getElementById('steal' + i).style.display = 'none';
    }
    let counter = 0;
    for (let i = 0; i < this.state.resourceList[id].length; i ++) {
      if (this.state.settlementCurrentFill[this.state.resourceList[id][i]] === 4 || this.state.settlementCurrentFill[this.state.resourceList[id][i]] === 5 || this.state.settlementCurrentFill[this.state.resourceList[id][i]] === this.state.currentPlayer) {
        continue;
      }
      document.getElementById('toSteal').style.display = 'flex';
      document.getElementById('steal' + this.state.settlementCurrentFill[this.state.resourceList[id][i]]).style.display = 'flex';
      counter ++;
    }
    if (counter === 0) {
      this.setState({toMoveRobber: false});
      this.playTurn();
    }
  }

  takeACard(player) {
    let cardHand = this.state.cardHand;
    let totalCards = this.sum(cardHand[player]);
    let randomNumber = Math.floor(Math.random() * totalCards);
    let sum = 0;
    for (let i = 0; i < 5; i ++) {
      sum += cardHand[player][i];
      if (randomNumber < sum) {
        cardHand[player][i] --;
        cardHand[this.state.currentPlayer][i] ++;
        break;
      }
    }
    document.getElementById('toSteal').style.display = 'none';
    this.setState({toMoveRobber: false, cardHand: cardHand});
    this.playTurn();
  }

  robberMoved(id) {
    if (!this.state.toMoveRobber) {
      return;
    }
    this.setState({toMoveRobber: false, robberHex: id});
    this.stealCards(id);
  }

  finishPlayerTurn() {
    this.setState({turnStarted: true});
    if (this.state.rollSum !== 7) {
      let letterArray = this.interpretRoll(this.state.rollSum);
      let cardHand = this.state.cardHand;
      for (let i = 0; i < letterArray.length; i ++) {
        if(this.state.robberHex === this.state.numberList.indexOf(letterArray[i])) {
          continue;
        }
        for (let j = 0; j < this.state.resourceList[this.state.numberList.indexOf(letterArray[i])].length; j ++ ) {
          let settlement = this.state.resourceList[this.state.numberList.indexOf(letterArray[i])][j];
          if (this.state.settlementCurrentFill[settlement] !== 4 && this.state.settlementCurrentFill[settlement] !== 5) {
            if (this.state.settlementType[settlement] === 1) {
              cardHand[this.state.settlementCurrentFill[settlement]][this.state.commodityList[this.state.numberList.indexOf(letterArray[i])]] ++;
            }
            else {
              cardHand[this.state.settlementCurrentFill[settlement]][this.state.commodityList[this.state.numberList.indexOf(letterArray[i])]] += 2;
            }
          }
        }
      }
      console.log(cardHand);
      this.setState({cardHand: cardHand});
      this.playTurn();
    }
    if (this.state.rollSum === 7) {
      this.discardCards();
      this.moveRobber();
    }
  }

  diceRoll (numberOfDice) {
    let number_of_rolls  = 20;
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
      rollSum += rolls[i];
    }
    this.setState({
      numberOfDice: numberOfDice,
      finalRoll: rolls,
      rollSum: rollSum
    });
    document.getElementById('changingDice').style.display = 'inline-block';
    document.getElementById('fixedDice').style.display = 'none';
    document.getElementById('rollDiceButton').style.display = 'none';
    document.getElementById('stopDiceButton').style.display = 'inline-block';
    for (let i = 0; i < number_of_rolls; i++) {
      setTimeout(() => {
        let rolls = [];
        for (let i = 0; i < numberOfDice; i++) {
          rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        this.setState({
          numberOfDice: numberOfDice,
          rolls: rolls
        })
      },  200 * i);
    }
    setTimeout(() => {
      this.stopDiceRoll();
    }, 200 * number_of_rolls + 200);
  }

  nextPlayer() {
    let currentPlayer = this.state.currentPlayer;
    currentPlayer ++;
    currentPlayer = currentPlayer % 4;
    this.rollDice(currentPlayer);
    this.setState({turnStarted: false, currentPlayer: currentPlayer});
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

  continueGame() {
    this.passAllCards();
    this.rollDice(0);
    document.getElementById('diceValue').style.display = 'flex';
  }

  updateSettlementFilled(id, color) {

    let settlementCurrentFill = this.state.settlementCurrentFill;
    let settlementVisibility = this.state.settlementVisibility;

    if (this.state.colorOrder[this.state.colorPosition] === -1) {
      let settlementType = this.state.settlementType;
      if (settlementCurrentFill[id] !== 4) {
        if (!this.state.choosingCities) {
            return;
        }
        settlementType[id] = 2;
        this.setState({color: color, settlementplace: false, choosingCities: false});
      }

      else {
        settlementCurrentFill[id] = color;
        settlementVisibility[id] = true;
        this.setState({color: color, settlementplace: false});
      }

      this.updateValidSettlementsAfterGame();
      this.setState({settlementCurrentFill: settlementCurrentFill, settlementVisibility: settlementVisibility});
      this.exitBuildMenu();
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

    if (this.state.colorOrder[this.state.colorPosition] === -1) {
      this.setState({roadCurrentFill: roadCurrentFill, roadVisibility: roadVisibility, settlementplace: false,
        placeRoad: false, showButton: false});
      this.exitBuildMenu();
    }

    else if (this.state.colorOrder[this.state.colorPosition + 1] === -1) {
      this.setState({roadCurrentFill: roadCurrentFill, roadVisibility: roadVisibility, settlementplace: false,
        placeRoad: false, color: this.state.colorOrder[this.state.colorPosition + 1],
        colorPosition: this.state.colorPosition + 1, showButton: false});
      this.continueGame();
    }

    else {
      this.setState({roadCurrentFill: roadCurrentFill, roadVisibility: roadVisibility, settlementplace: true,
        placeRoad: false, color: this.state.colorOrder[this.state.colorPosition + 1],
        colorPosition: this.state.colorPosition + 1});
    }
  }

  sum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum
  }

  createButtons (cards) {
    let cards_display = [];
    for (let i = 0; i < cards[0]; i++) {
      cards_display.push(
        <img style = {{width: 150, resize: 'contain'}} src={ore} alt="my image"/>
      );
    }
    for (let i = 0; i < cards[1]; i++) {
      cards_display.push(
        <img style = {{width: 150, resize: 'contain'}} src={wheat} alt="my image"/>
      );
    }
    for (let i = 0; i < cards[2]; i++) {
      cards_display.push(
        <img style = {{width: 150, resize: 'contain'}} src={wood} alt="my image"/>
      )
    }
    for (let i = 0; i < cards[3]; i++) {
      cards_display.push(
        <img style = {{width: 150, resize: 'contain'}} src={sheep} alt="my image"/>
      );
    }
    for (let i = 0; i < cards[4]; i++) {
      cards_display.push(
        <img style = {{width: 150, resize: 'contain'}} src={brick} alt="my image"/>
      );
    }
    return cards_display;
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

    let displayCards = (<div />);

    if(this.sum(this.state.cardHand[this.state.currentPlayer]) >= 10) {
      displayCards = (
          <div>
          <div style = {{display: 'flex', flexFlow: 'row nowrap'}}>
            <div>
                <img style = {{width: 150, resize: 'contain'}} src={ore} alt="my image"/>
              <div>
                {this.state.cardHand[this.state.currentPlayer][0]}
              </div>
            </div>
            <div>
                <img style = {{width: 150, resize: 'contain'}} src={wheat} alt="my image"/>
              <div>
                {this.state.cardHand[this.state.currentPlayer][1]}
              </div>
            </div>
            <div>
                <img style = {{width: 150, resize: 'contain'}} src={wood} alt="my image"/>
              <div>
                {this.state.cardHand[this.state.currentPlayer][2]}
              </div>
            </div>
            <div>
                <img style = {{width: 150, resize: 'contain'}} src={sheep} alt="my image"/>
              <div>
                {this.state.cardHand[this.state.currentPlayer][3]}
              </div>
            </div>
            <div>
                <img style = {{width: 150, resize: 'contain'}} src={brick} alt="my image"/>
              <div>
                {this.state.cardHand[this.state.currentPlayer][4]}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      displayCards = (
        <div>
        <div>
          </div>
          <div style = {{display: 'flex', flexFlow: 'row nowrap'}}>
            {this.createButtons(this.state.cardHand[this.state.currentPlayer])}
          </div>
        </div>
      );
    }

    return(
      <div>
        <div style={{textAlign: 'center'}}>

          <div className="bigHexagon" style={{marginRight: '2px', cursor: 'pointer'}}>

            <div className="bigHexagonTop" style={{borderRight: '300px solid #2ba9db'}} />
            <div className="bigHexagonMiddle" style={{verticalAlign: 'baseline', textAlign: 'center',
              backgroundColor: '#2ba9db'}} />
            <div className="bigHexagonBottom" style={{borderLeft: '300px solid #2ba9db'}} />

          </div>

          <div style = {{display: 'inline-block', marginTop: '120px'}}>

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(0, 3)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[0, 1, 2]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['250px', '140px', '140px']} verticalMargins = '-40px' />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(3, 7)}
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

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(7, 11)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[7, 8, 9, 10]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['161px', '140px', '140px', '140px']} verticalMargins = '110px' />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(11, 16)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[11, 12, 13, 14, 15]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['75px', '140px', '140px', '140px', '140px']}/>

            <HexagonRow handler={this.robberMoved} id = {[0, 1, 2]} robberHex = {this.state.robberHex} commodityArray = {commodityList.slice(0, 3)} letterArray = {numberList.slice(0, 3)}/>

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(18, 23)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad}
              roadVisibility={this.state.roadVisibility.slice(18, 23)} margin={'-367px'} roadStyle={0} roadNumber={5} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(23, 28)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad}
              roadVisibility={this.state.roadVisibility.slice(23, 28)} margin={'-320px'} roadStyle={1} roadNumber={5} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(28, 33)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad}
              roadVisibility={this.state.roadVisibility.slice(28, 33)} margin={'-412px'} roadStyle={2} roadNumber={5} />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(16, 21)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[16, 17, 18, 19, 20]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '-45px' />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(21, 27)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled}
              id={[21, 22, 23, 24, 25, 26]} fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['-13px', '140px', '140px', '140px', '140px', '140px']}/>

            <HexagonRow handler={this.robberMoved} id = {[3, 4, 5, 6]} robberHex = {this.state.robberHex} commodityArray = {commodityList.slice(3, 7)} letterArray = {numberList.slice(3, 7)}/>

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(33, 39)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-455px'}
              roadVisibility={this.state.roadVisibility.slice(33, 39)} roadStyle={0} roadNumber={6} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(39, 44)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-412px'}
              roadVisibility={this.state.roadVisibility.slice(39, 44)} roadStyle={1} roadNumber={5} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(44, 49)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-320px'}
              roadVisibility={this.state.roadVisibility.slice(44, 49)} roadStyle={2} roadNumber={5} />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(27, 33)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled}
              id={[27, 28, 29, 30, 31, 32]}  fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['-13px', '140px', '140px', '140px', '140px', '140px']} verticalMargins = '-40px'/>

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(33, 38)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[33, 34, 35, 36, 37]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '0px' />

            <HexagonRow handler={this.robberMoved} id = {[7, 8, 9, 10, 11]} robberHex = {this.state.robberHex} commodityArray = {commodityList.slice(7, 12)} letterArray = {numberList.slice(7, 12)}/>

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(49, 54)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-367px'}
              roadVisibility={this.state.roadVisibility.slice(49, 54)} roadStyle={0} roadNumber={5} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(54, 58)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-324px'}
              roadVisibility={this.state.roadVisibility.slice(54, 58)} roadStyle={1} roadNumber={4} />

            <RoadRow handler={this.updateRoadFilled} fillColors = {this.state.roadCurrentFill} id={roadID.slice(58, 62)}
              color={this.state.roadColor} placeRoad={this.state.placeRoad} margin={'-233px'}
              roadVisibility={this.state.roadVisibility.slice(58, 62)} roadStyle={2} roadNumber={4} />

            <HexagonRow handler={this.robberMoved} id = {[12, 13, 14, 15]} robberHex = {this.state.robberHex} commodityArray = {commodityList.slice(12, 16)} letterArray = {numberList.slice(12, 16)}/>

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(38, 43)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[38, 39, 40, 41, 42]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['75px', '140px', '140px', '140px', '140px']} verticalMargins = '-200px'/>

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(43, 47)}
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

            <HexagonRow handler={this.robberMoved} id = {[17, 18, 19]} robberHex = {this.state.robberHex} commodityArray = {commodityList.slice(16, 19)} letterArray = {numberList.slice(16, 19)}/>

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(47, 50)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[47, 48, 49]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['250px', '140px', '140px']} verticalMargins = '0px' />

            <SettlementRow settlementType={this.state.settlementType} settlementVisibility={this.state.settlementVisibility.slice(50, 54)}
              placeSettlement={this.state.settlementplace}  handler={this.updateSettlementFilled} id={[50, 51, 52, 53]}
              fillColors = {this.state.settlementCurrentFill} color = {this.state.color}
              leftMargins = {['161px', '140px', '140px', '140px']} verticalMargins = '720px' />

          </div>

          <br />
          <br />
          <br />

          {/*<button className='placeRoads' onClick={this.shuffleBoard}>Shuffle Board</button>

          <button className='placeRoads' onClick={this.resetBoard}>Reset Board</button>*/}

          <button className='placeRoads' onClick={this.startGame}>Start Game</button>

          <div id='rollDiceDiv' className='rollDice' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='rollDiceButton' style = {{fontSize: '14pt', textAlign: 'center', display: 'inline-block', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px'}} onClick = {() => this.diceRoll(2)}>
                Click to Roll Dice
              </button>
            </div>
            <div style={{textAlign: 'center'}}>
              <button id='stopDiceButton' style = {{fontSize: '14pt', textAlign: 'center', display: 'none', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px'}} onClick = {() => this.stopDiceRoll()}>
                Click to Stop Dice
              </button>
            </div>
          </div>

          <div className='playerTurn' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='finishTurn' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.nextPlayer()}>
                Done
              </button>
              <button id='trade' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.openTradeMenu()}>
                Trade
              </button>
              <button id='build' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.openBuildMenu()}>
                Build
              </button>
            </div>
          </div>

          <div className='toTradePart1' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='trade0' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.tradeCommodityAway(0)}>
                Trade Ore
              </button>
              <button id='trade1' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.tradeCommodityAway(1)}>
                Trade Wheat
              </button>
              <button id='trade2' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.tradeCommodityAway(2)}>
                Trade Wood
              </button>
              <br />
              <button id='trade3' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.tradeCommodityAway(3)}>
                Trade Sheep
              </button>
              <button id='trade4' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.tradeCommodityAway(4)}>
                Trade Brick
              </button>
              <button id='exitTrade' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.exitTradeMenu()}>
                Exit Trade
              </button>
            </div>
          </div>

          <div className='toTradePart2' style={{display: 'none', flexFlow: 'row nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='get0' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.getCommodity(0)}>
                Get 1 Ore
              </button>
              <button id='get1' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.getCommodity(1)}>
                Get 1 Wheat
              </button>
              <button id='get2' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.getCommodity(2)}>
                Get 1 Wood
              </button>
              <br />
              <button id='get3' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.getCommodity(3)}>
                Get 1 Sheep
              </button>
              <button id='get4' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.getCommodity(4)}>
                Get 1 Brick
              </button>
            </div>
          </div>

          <div className='toBuild' style={{display: 'none', flexFlow: 'row nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='buildRoad' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.buildRoad()}>
                Build Road
              </button>
              <button id='buildSettlement' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.buildSettlement()}>
                Build Settlement
              </button>
              <br />
              <button id='buildCity' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.buildCity()}>
                Build City
              </button>
              <button id='exitBuild' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.exitBuildMenu()}>
                Exit Build
              </button>
            </div>
          </div>

          <div id="toSteal" className='toSteal' style={{display: 'none', flexFlow: 'row nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='steal0' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.takeACard(0)} >
                Steal Purple
              </button>
              <button id='steal1' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.takeACard(1)} >
                Steal Orange
              </button>
              <br />
              <button id='steal2' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.takeACard(2)} >
                Steal Blue
              </button>
              <button id='steal3' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.takeACard(3)} >
                Steal Red
              </button>
            </div>
          </div>

          <div id="toDiscard" className='toDiscard' style={{display: 'none', flexFlow: 'row nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='discard0' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.setDiscarder(0)} >
                Discard Purple
              </button>
              <button id='discard1' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.setDiscarder(1)} >
                Discard Orange
              </button>
              <br />
              <button id='discard2' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.setDiscarder(2)} >
                Discard Blue
              </button>
              <button id='discard3' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.setDiscarder(3)} >
                Discard Red
              </button>
            </div>
          </div>

          <div id="discardResource" className='discardResource' style={{display: 'none', flexFlow: 'row nowrap', marginLeft: '0%', marginTop: '-200px'}}>
            <div style={{textAlign: 'center'}}>
              <button id='discardResource0' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.discardCommodity(0)} >
                Discard Ore
              </button>
              <button id='discardResource1' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.discardCommodity(1)} >
                Discard Wheat
              </button>
              <button id='discardResource2' style = {{fontSize: '14pt', float: 'left', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.discardCommodity(2)} >
                Discard Wood
              </button>
              <br />
              <button id='discardResource3' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.discardCommodity(3)} >
                Discard Sheep
              </button>
              <button id='discardResource4' style = {{fontSize: '14pt', textAlign: 'center', display: 'float', height: '100px', width: '100px', borderRadius: '50%', border: '4px solid blue',
              margin: '4px', backgroundColor: 'white'}} onClick = {() => this.discardCommodity(4)} >
                Discard Brick
              </button>
            </div>
          </div>

          <div id='diceValue' className='rollDice' style={{display: 'none', flexFlow: 'nowrap', marginLeft: '75%', marginTop: '-200px'}}>
            <div id='changingDice' style = {{textAlign: 'center'}}>
              {this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)}
            </div>
            <div id='fixedDice' style = {{textAlign: 'center', display: 'none'}}>
              {this.state.finalRoll.map((roll, index) => <DiceImage roll={roll} key={index} />)}
            </div>
          </div>

        <div style={{textAlign: 'center', position: 'absolute', top: '110%', left: 0, right: 0, margin: 'auto'}}>
          <div style={{display: 'inline-block', position: 'relative'}}>
            {displayCards}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default CatanGame;
