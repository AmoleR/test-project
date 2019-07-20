import React from 'react';
import Hexagon from './hexagon.js';
import HexagonRow from './hexagonrow.js';
import Settlement from './settlement.js';
import Number from './number.js';
import './howToPlay.css';
import FancyButton from './fancyButton.js';

class HowToPlay extends React.Component {

  render() {
    return(
      <div id="background">
        <div>
          <img style = {{width: '95vw'}} src = 'http://snowconmaine.com/main/wp-content/uploads/2018/01/catan2018.png'/>
        </div>
        <h1>How To Play</h1>
        <br />
        This is a catan resource hex:
        <Hexagon id={0} commodityType={0} letter={'A'}/>
        <br />
        There are 5 types of these hexes (ore, wheat, wood, sheep, and brick, in that order):
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
          <Hexagon id={0} commodityType={0} letter={'A'}/>
          <Hexagon id={0} commodityType={1} letter={'A'}/>
          <Hexagon id={0} commodityType={2} letter={'A'}/>
          <Hexagon id={0} commodityType={3} letter={'A'}/>
          <Hexagon id={0} commodityType={4} letter={'A'}/>
        </div>
        <br />
        When you build on one of these 5 resource hexes, you get the resource on the corresponding hex.
        <br style={{lineHeight: '4'}} />
        There is also a desert hex, which does not give you any resources:
        <Hexagon id={0} commodityType={5} letter={' '}/>
        At the beginning of the game, it also holds the robber.
        <br style={{lineHeight: '4'}} />
        At the beginning of the game, you will be asked to place a settlement at an intersection of a few hexagons. You will get 1 resource per resource hex adjacent to the settlement at the start of the game, with the resource the same as the one on the hex.
        <br style={{lineHeight: '4'}} />
        For example, if I settled here:
        <div style={{textAlign: 'center'}}>
          <div style={{marginLeft: '264px'}} >
            <Hexagon id={0} commodityType={0} letter={'A'} />
          </div>
          <HexagonRow id={[0, 0]}  commodityArray = {[1, 2]} letterArray = {['B', 'C']} />
          <div style={{position: 'relative'}}>
            <div style = {{backgroundColor: 'purple', border: '3px solid purple', boxShadow: '2px 2px 5px 0px purple', height: '30px', width: '30px', borderRadius: '50%', display: 'flex', marginTop: '-170px', marginLeft: '335px', zIndex: '300', float: 'left'}}></div>
          </div>
        </div>
        I would get 1 ore, 1 wheat, and 1 wood at the start of the game. Then, you will be asked to build a road. This can be built at any of the upto 3 locations adjacent to your settlement.
        <br style={{lineHeight: '4'}} />
        The order for placing settlements and roads is purple, orange, blue, red, red, blue, orange, and purple. No two settlements can be next to each other (seperated by a road) or on top of each other.
        <br style={{lineHeight: '4'}} />
        After you have all your cards distributed, the turn order is purple, orange, blue, red, and repeat. At the beginning of the turn you can roll a dice.
        <div style={{textAlign: 'center'}}>
          <div style={{marginLeft: '264px'}} >
            <Hexagon id={0} commodityType={0} letter={'A'} />
          </div>
          <HexagonRow id={[0, 0]}  commodityArray = {[1, 2]} letterArray = {['B', 'C']}/>
          <div style={{position: 'relative'}}>
            <div style = {{backgroundColor: 'purple', border: '3px solid purple', boxShadow: '2px 2px 5px 0px purple', height: '30px', width: '30px', borderRadius: '50%', display: 'flex', marginTop: '-170px', marginLeft: '335px', zIndex: '300', float: 'left'}}></div>
          </div>
        </div>
        Suppose I rolled a 5, then in the situation above, I would get 1 ore. However, suppose orange settled here:
        <div style={{textAlign: 'center'}}>
          <div style={{marginLeft: '264px'}} >
            <Hexagon id={0} commodityType={3} letter={'O'} />
          </div>
          <HexagonRow id={[0, 0]}  commodityArray = {[4, 0]} letterArray = {['P', 'Q']}/>
          <div style={{position: 'relative'}}>
            <div style = {{backgroundColor: 'orange', border: '3px solid orange', boxShadow: '2px 2px 5px 0px orange', height: '30px', width: '30px', borderRadius: '50%', display: 'flex', marginTop: '-170px', marginLeft: '335px', zIndex: '300', float: 'left'}}></div>
          </div>
        </div>
        Then he would also get 1 sheep. In this way, you can constantly accumulate cards.
        <br style={{lineHeight: '4'}} />
        If you pay attention to the board, you may notice there is no 7. That is because the 7 activates the robber:<br />
        <div style={{marginTop: '50px'}}>
          <Number letter=' ' />
        </div>
        <b>This is a work in progress.</b>
        <br style={{lineHeight: '4'}} />
        However, that is not all you can do. On my turn, suppose I had 4 ore but wanted one brick. I would locate the trade button, then click on Trade Ore, then click on Get 1 Brick. Note that you can not trade a resource if you have less than 4 of that resource. Trading is always 4:1, that is you give 4 cards and get 1 card back.
        <br style={{lineHeight: '4'}} />
        In addition, you can build the following three items:
        <ul>
          <li>Roads. A road has to be built next to a road. To build a road costs one wood and one brick.</li>
          <div style={{textAlign: 'center'}}>
            <div style={{marginLeft: '264px'}} >
              <Hexagon id={0} commodityType={0} letter={'D'} />
            </div>
            <HexagonRow id={[0, 0]} commodityArray = {[1, 3]} letterArray = {['E', 'F']}/>
            <div style={{position: 'relative'}}>
              <div style={{ width: '8px', height: '90px', marginTop: '-223px', marginLeft: '305px', float: 'left', transform: 'rotate(120deg)', backgroundColor: 'orange', marginRight: '2px', cursor: 'crosshair'}} ></div>
              <div style={{ width: '8px', height: '90px', marginTop: '-223px', marginLeft: '394px', float: 'left', transform: 'rotate(240deg)', backgroundColor: 'orange', marginRight: '2px', cursor: 'crosshair'}} ></div>
            </div>
          </div>
          <li>Settlements. A settlement has to be built next to a road. To build a settlement costs one wheat, one wood, one sheep, and one brick. Note no two settlements can be on top of each other or seperated by a road.</li>
          <div style={{textAlign: 'center'}}>
            <div style={{marginLeft: '264px'}} >
              <Hexagon id={0} handler = {() => {return false}} id={0} commodityType={3} letter={'G'} />
            </div>
            <HexagonRow id={[0, 0]} handler = {() => {return false}} id = {[0, 0]} commodityArray = {[4, 0]} letterArray = {['H', 'I']}/>
            <div style={{position: 'relative'}}>
              <div style={{ width: '8px', height: '90px', marginTop: '-223px', marginLeft: '305px', float: 'left', transform: 'rotate(120deg)', backgroundColor: 'red', marginRight: '2px', cursor: 'crosshair'}} ></div>
              <div style = {{backgroundColor: 'red', border: '3px solid red', boxShadow: '2px 2px 5px 0px red', height: '30px', width: '30px', borderRadius: '50%', display: 'flex', marginTop: '-170px', marginLeft: '335px', zIndex: '300', float: 'left'}}></div>
            </div>
          </div>
          <li>Cities. A city is a settlement that will give you twice the cards a settlement does. To build a city costs 3 ore and 2 wheat. A city has to be built on top of an already existing settlement. When you opt to build a city, you click on a settlement that is not already a city to be your city.</li>
          <div style={{textAlign: 'center'}}>
            <div style={{marginLeft: '264px'}} >
              <Hexagon id={0} commodityType={1} letter={'J'} />
            </div>
            <HexagonRow id={[0, 0]}  handler = {() => {return false}} id = {[0, 0]} commodityArray = {[3, 2]} letterArray = {['K', 'L']}/>
            <div style={{position: 'relative'}}>
              <div style={{ width: '8px', height: '90px', marginTop: '-223px', marginLeft: '305px', float: 'left', transform: 'rotate(120deg)', backgroundColor: 'blue', marginRight: '2px', cursor: 'crosshair'}} ></div>
              <div style = {{backgroundColor: 'blue', border: '3px solid blue', boxShadow: '2px 2px 5px 0px blye', height: '30px', width: '30px', display: 'flex', marginTop: '-170px', marginLeft: '335px', zIndex: '300', float: 'left'}}></div>
            </div>
          </div>
        </ul>
        The concept of victory points is how you win the game. Each settlement gives you 1 victory point, and each city gives you 2 victory points. To win, you must have at least 10 victory points.
        <br style={{lineHeight: '4'}} />
        <div style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center'}} id="goToGameButton">
          <FancyButton style={{display: 'inline-block'}} />
        </div>
      </div>
    );
  }
}

export default HowToPlay;
