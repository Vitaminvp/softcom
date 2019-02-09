import React from 'react';
import './Tab.css';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bindIndex: props.defaultIndex
        };
    }
    changeTab(newIndex) {
        if (typeof this.props.onTabClick === "function")
            this.props.onTabClick(newIndex);
        this.setState({
            bindIndex: newIndex
        });
    }
    buttonClass(index) {
        return this.state.bindIndex === index ? "focus" : "";
    }
    itemStyle(index) {
        return {
            display: this.state.bindIndex === index ? "block" : "none"
        };
    }
    render() {
        const items = this.props.children.filter(
            item => item.type.name === "TabItem"
        );
        return (
            <div className="wrapper">
                <div className="tab-menu">
                    {items.map(({ props: { index, label } }) => (
                        <button
                            onClick={() => this.changeTab(index)}
                            className={this.buttonClass(index)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="tab-view">
                    {items.map(({ props }) => (
                        <div
                            {...props}
                            className="tab-view_item"
                            key={props.index}
                            style={this.itemStyle(props.index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export function TabItem(props) {
    return <div {...props} />;
}

export default Tab;
