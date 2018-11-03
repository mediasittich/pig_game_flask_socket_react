import React from 'react';

class Dice extends React.Component {
    render() {
        return(
            <div>Here go the dice! {this.props.value}</div>
        );
    }
}

export default Dice;