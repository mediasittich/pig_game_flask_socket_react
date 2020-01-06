import React from 'react';
import './Player.css';

function Player(props) {
    console.log(props)
    return(
        <div className={"panel " + (props.winner === props.playerNumber ? 'winner' : (props.activePlayer === props.playerNumber ? 'active' : ''))}>
            <div className="player-label ">
                {(props.winner === props.playerNumber ? 'winner!' : 'Player ' + props.playerNumber)}
            </div>
            <div className="player-score">{props.playerScore}</div>
            <div className="player-current">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">
                    { props.activePlayer === props.playerNumber ? props.roundScore : '0'}
                </div>
            </div>
        </div>
    );
}

export default Player;