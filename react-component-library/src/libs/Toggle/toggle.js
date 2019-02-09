import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.style = {
            on: {
                backgroundColor: 'green'
            },
            off: {
                backgroundColor: 'grey'
            }
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const { isToggleOn } = this.state;
        const { on, off } = this.style;

        return (
            <button
                onClick={this.handleClick}
                style={isToggleOn ? on : off}
            >
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;