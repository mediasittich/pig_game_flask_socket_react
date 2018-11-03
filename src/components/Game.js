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
            dieValue: 0,
            playerOneScore: 0,
            playerTwoScore: 0
        }
        this.hold = this.hold.bind(this);
    }

    newGame() {
        console.log('New Game!');
    }

    rollDice() {
        console.log('Roll Dice!');
        let dieValue = Math.floor(Math.random() * 6) + 1;
        console.log(dieValue);
    }

    hold() {
        console.log('Hold!');
        this.state.currentPlayer === 'Player 1' ?
        this.setState({
            currentPlayer: 'Player 2',
        }) :
        this.setState({
            currentPlayer: 'Player 1',
        })
    }

    render() {
        console.log(this.state.currentPlayer)
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

                <Dice value={4}/>
            </div>
        );
    }
}

export default Game;