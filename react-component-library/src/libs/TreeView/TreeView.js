import React from 'react';
import './TreeView.css';


class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: props.toggled
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ toggled: !state.toggled }));
    }

    render() {
        return (
            <div
                style={{ marginLeft: this.props.isChildElement ? 16 : 4 + "px" }}
                className={
                    this.props.isParentToggled ? "tree-element" : "tree-element collapsed"
                }
            >
        <span
            className={this.state.toggled ? "toggler" : "toggler closed"}
            onClick={this.toggle}
        />
                {this.props.name ? (
                    <strong>&nbsp;&nbsp;{this.props.name}: </strong>
                ) : (
                    <span>&nbsp;&nbsp;</span>
                )}
                {Array.isArray(this.props.data) ? "[" : "{"}
                {!this.state.toggled && "..."}
                {Object.keys(this.props.data).map(
                    (v, i, a) =>
                    typeof this.props.data[v] == "object" ? (
                    <TreeView
                    data={this.props.data[v]}
                    isLast={i === a.length - 1}
                    name={Array.isArray(this.props.data) ? null : v}
                    isChildElement
                    isParentToggled={
                    this.props.isParentToggled && this.state.toggled
                }
                    />
                    ) : (
                    <p
                    style={{ marginLeft: 16 + "px" }}
                    className={
                    this.state.toggled ? "tree-element" : "tree-element collapsed"
                }
                    >
                    {Array.isArray(this.props.data) ? "" : <strong>{v}: </strong>}
                    {this.props.data[v]}
                    {i === a.length - 1 ? "" : ","}
                    </p>
                    )
                    )}
                {Array.isArray(this.props.data) ? "]" : "}"}
                {!this.props.isLast ? "," : ""}
            </div>
        );
    }
}

TreeView.defaultProps = {
    isLast: true,
    toggled: true,
    name: null,
    isChildElement: false,
    isParentToggled: true
};

export default TreeView;
