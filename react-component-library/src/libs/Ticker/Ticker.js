import React from 'react';

class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ticker: 0};
        this.interval = null;
    }

    tick(){
        this.reset();
        this.interval = setInterval(() => {
            if (this.state.ticker < this.props.times) {
                this.setState(({ ticker }) => ({ticker: ticker + 1}))
            }else{
                clearInterval(this.interval)
            }
        }, this.props.interval)
    }

    reset(){
        this.setState({ticker: 0})
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <span style={{fontSize: 100}}>{this.state.ticker}</span>
                <button onClick={this.tick.bind(this)}>Tick!</button>
                <button onClick={this.reset.bind(this)}>Reset</button>
            </div>
        );
    }
}

export default Ticker;
