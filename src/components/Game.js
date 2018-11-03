import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
// import './App.css';
import Player from './Player';
import Dice from './Dice';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: 'Player 1',
            currentEyes: [],
            playerOneScore: 0,
            playerTwoScore: 0
        }
        this.newGame = this.newGame.bind(this);
        this.rollDice = this.rollDice.bind(this);
        this.hold = this.hold.bind(this);
    }

    newGame() {
        console.log('New Game!');
        this.setState({
            currentPlayer: 'Player 1',
            currentEyes: [],
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
        console.log(this.state.currentPlayer)
        console.log(currentEyes);
        this.setState({
            currentEyes: currentEyes
        })

        // if none of the dice = 1, add sum of eyes to currentPlayer's score
        // else set currentPlayer's score = 0, other player's turn
    }

    hold() {
        console.log('Hold!');
        // Add currentEyes to currentPlayer's score

        // Switch turns between players
        this.state.currentPlayer === 'Player 1' ?
        this.setState({
            currentPlayer: 'Player 2',
        }) :
        this.setState({
            currentPlayer: 'Player 1',
        })
    }

    render() {
        // console.log(this.state.currentPlayer)
        return (
            <div className="container">
                <Player
                    playerNumber={1}
                    playerScore={43}
                    currentScore={11}
                    active={true}
                />

                <Player
                    playerNumber={2}
                    playerScore={72}
                    currentScore={0}
                    active={false}
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