import React from 'react';

function Player(props) {
    return(
        <div className="panel">
            <div className={"player-label " + (props.active ? 'active' : '')}>Player {props.playerNumber}</div>
            <div className="player-score">{props.playerScore}</div>
            <div className="player-current">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">{props.currentScore}</div>
            </div>
        </div>
    );
}

export default Player;