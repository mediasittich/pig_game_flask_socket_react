import React from 'react';

class Dice extends React.Component {
    render() {
        return(
            <div>
                <div>Die one: {this.props.eyes[0]}</div>
                <div>Die two: {this.props.eyes[1]}</div>
            </div>
        );
    }
}

export default Dice;