import React from 'react';

class PasswordRevealer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: false
        };
        this.toggleShown = this.toggleShown.bind(this);
    }

    toggleShown() {
        this.setState(state => ({ shown: !state.shown }));
    }

    render() {
        return (
            <div>
                <input
                    type={this.state.shown ? 'text' : 'password'}
                    value={this.props.value}
                />
                <button onClick={this.toggleShown}>Show/Hide</button>
            </div>
        );
    }
}
export default PasswordRevealer;
