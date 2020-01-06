import React from 'react';
import './Dice.css';

class Dice extends React.Component {
    render() {
        return(
            <div className={"die eyes-" + (this.props.eyes)}>
                <span className="eye"></span>
            </div>
        );
    }
}

export default Dice;