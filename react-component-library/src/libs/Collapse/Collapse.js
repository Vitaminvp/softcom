import React from 'react';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: !!props.collapsed
        };
        this.style = {
            collapsed: {
                display: 'none'
            },
            expanded: {
                display: 'block'
            },
            buttonStyle: {
                display: 'block',
                width: '100%'
            }
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState(state => ({ collapsed: !state.collapsed }));
    }

    render() {
        return (
            <div>
                <button style={this.style.buttonStyle} onClick={this.toggleCollapse}>
                    Show/Hide Content
                </button>
                <div
                    style= {this.state.collapsed ? this.style.collapsed : this.style.expanded}
                    aria-expanded = {this.state.collapsed}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Collapse;
