import React from 'react';

function Player(props) {
    console.log(props)
    return(
        <div className="panel">
            <div className={"player-label " + (props.activePlayer === props.playerNumber ? 'active' : '')}>Player {props.playerNumber + 1}</div>
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