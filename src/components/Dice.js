import React from 'react';

class Dice extends React.Component {
    render() {
        return(
            <div>
                <div>Die: {this.props.eyes}</div>
            </div>
        );
    }
}

export default Dice;