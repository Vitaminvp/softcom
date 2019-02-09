import React from 'react';

class LimitedTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.value,
            characterCount: props.value.length,
            limit: props.limit
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let newContent = event.target.value;
        if(newContent.length >= this.state.limit) newContent = newContent.slice(0, this.state.limit);
        this.setState(state => ({ content: newContent, characterCount: newContent.length }));
    }
    render() {
        return (
            <div>
        <textarea
            rows={this.props.rows}
            cols={this.props.cols}
            onChange={this.handleChange}
            value={this.state.content}
        >
        </textarea>
                <p>{this.state.characterCount}/{this.props.limit}</p>
            </div>
        );
    }
}

export default LimitedTextarea;
