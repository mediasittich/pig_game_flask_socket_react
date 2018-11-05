import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Player from './components/Player';
import Dice from './components/Dice';

import './App.css';

/*
  Components:
  - Game: has state
  - Player: get's props from Game
  - Dice: 
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0, 0],
      roundScore: 0,
      activePlayer: 0,
      diceValue: 0,
      winner: null,
      gameOn: true,
    }

    this.initGame = this.initGame.bind(this);
    this.rollDice = this.rollDice.bind(this);
    this.hold = this.hold.bind(this);

    this.switchPlayer = this.switchPlayer.bind(this);
  }

  initGame() {
    this.setState({
      scores: [0, 0],
      roundScore: 0,
      activePlayer: 0,
      diceValue: 0,
      winner: null,
      gameOn: true,
    })
  }

  rollDice() {
    if (this.state.gameOn) {
      // Generate random number between 1 - 6
      let dice = Math.floor(Math.random() * 6) + 1;

      // Display the result
      this.setState({
        diceValue: dice,
      });

      // Update roundScore IF rolled number was NOT a 1
      if (dice !== 1) {
        // Add score
        this.setState({
          roundScore: this.state.roundScore + dice
        });
      } else {
        this.switchPlayer();
      }
    }
  }

  hold() {
    if (this.state.gameOn) {
      // Add roundScore to global score
      let updatedScores = this.state.scores;
      updatedScores[this.state.activePlayer] += this.state.roundScore

      this.setState({
        scores: updatedScores,
      });

      // check if activePlayer won the game
      if (updatedScores[this.state.activePlayer] >= 20) {
        this.setState({
          winner: this.state.activePlayer,
          gameOn: false,
        });
      } else {
        this.switchPlayer();
      }
    }
  }

  // Helpers
  switchPlayer() {
    // Next player
    // Next Player
    this.state.activePlayer === 0 ?
    this.setState({
      activePlayer: 1,
    }) :
    this.setState({
      activePlayer: 0,
    });
    // Reset roundScore
    this.setState({
      roundScore: 0,
    });
  }

  render() {
    const players = [0, 1];
    const playerItems = players.map((number) => 
      <Player
        key={number}
        playerNumber={number}
        playerScore={this.state.scores[number]}
        roundScore={this.state.roundScore}
        activePlayer={this.state.activePlayer}
        winner={this.state.winner}
      />
    );
    console.log(this.state)
    return (
      <main className="App">
        <div className="player-panels">
          { playerItems }
        </div>
        
        <button className="btn btn-reset" onClick={this.initGame}>
          <Ionicon icon="ios-add-circle-outline" /> New game
        </button>
        <button className="btn btn-roll" onClick={this.rollDice}>
          <Ionicon icon="ios-sync" /> Roll dice
        </button>
        <button className="btn btn-hold" onClick={this.hold}>
          <Ionicon icon="ios-download-outline" /> Hold
        </button>
        
        
        <div className="dice-box">
          <Dice
            eyes={this.state.diceValue}
          />
        </div>
        
      </main>
    );
  }
}

export default App;
