import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
/*
  Components:
  - Game: has state
  - Player: get's props from Game
  - Dice: 
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header> */}
        <main>
          <Game />
        </main>
      </div>
    );
  }
}

export default App;
