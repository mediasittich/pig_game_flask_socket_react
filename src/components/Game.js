import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
// import './App.css';
import Player from './Player';
import Dice from './Dice';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: true,
            currentEyes: [],
            currentSum: 0,
            playerOneScore: 0,
            playerTwoScore: 0
        }
        this.newGame = this.newGame.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.hold = this.hold.bind(this);
        this.checkForWinner = this.checkForWinner.bind(this);
    }

    newGame() {
        console.log('New Game!');
        this.setState({
            playerOne: true,
            currentEyes: [], // display on dice
            currentSum: 0,
            playerOneScore: 0,
            playerTwoScore: 0
        })
    }

    rollDice() {
        console.log('Roll Dice!');
        let currentEyes = [];
        for (let i = 0; i < 2; i++) {
            const eyes = Math.floor(Math.random() * 6) + 1;
            currentEyes.push(eyes);
        }
        console.log(currentEyes);
        this.setState({
            currentEyes: currentEyes
        })

        let sum = 0;
        // if nne of the dice = 1, set currentPlayer's score = 0, other player's turn
        if (currentEyes[0] === 1 || currentEyes[1] === 1) {
            sum = 0;
            let currentPlayer = this.state.playerOne ? false : true
            this.setState({
                currentSum: 0,
                playerOne: currentPlayer
            })
            
        } else {
            // else add sum of eyes to currentPlayer's score
            sum = sum + currentEyes[0] + currentEyes[1]
            this.setState({
                currentSum: this.state.currentSum + sum,
            })
        }
    }

    hold() {
        console.log('Hold!');
        // Add currentEyes to currentPlayer's score
        // Switch turns between players
        this.state.playerOne ?
        this.setState({
            playerOneScore: this.state.playerOneScore + this.state.currentSum,
            currentSum: 0,
            playerOne: false,
        }, () => {this.checkForWinner(this.state.playerOneScore)}) :
        this.setState({
            playerTwoScore: this.state.playerTwoScore + this.state.currentSum,
            currentSum: 0,
            playerOne: true,
        }, () => {this.checkForWinner(this.state.playerTwoScore)})
    }

    checkForWinner() {
        if (this.state.playerOneScore >= 100) {
            console.log('Player 1: ' + this.state.playerOneScore)
        } else if (this.state.playerTwoScore >= 100) {
            console.log('Player 2: ' + this.state.playerTwoScore)
        } 

        // GAME OVER
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <Player
                    player={'Player 1'}
                    playerScore={this.state.playerOneScore}
                    currentScore={this.state.currentSum}
                    active={this.state.playerOne}
                />

                <Player
                    player={'Player 2'}
                    playerScore={this.state.playerTwoScore}
                    currentScore={this.state.currentSum}
                    active={!this.state.playerOne}
                />
                <button onClick={this.newGame}>
                    <Ionicon icon="ios-add-circle-outline" />New Game
                </button>
                <button onClick={this.rollDice}>
                    <Ionicon icon="ios-sync" />Roll dice
                </button>
                <button onClick={this.hold}>
                    <Ionicon icon="ios-download-outline" />Hold
                </button>

                <Dice eyes={this.state.currentEyes}/>
            </div>
        );
    }
}

export default Game;