import React from 'react';
import './FileDrop.css';

class FileDrop extends React.Component {
    constructor(props) {
        super(props);
        this.dropRef = React.createRef();
        this.state = {
            drag: false,
            filename: ''
        }
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragIn = this.handleDragIn.bind(this);
        this.handleDragOut = this.handleDragOut.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrag(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragIn(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0)
            this.setState({ drag: true });
    }

    handleDragOut(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0)
            this.setState({ drag: false });
    }

    handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ drag: false });
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files[0]);
            this.setState({ filename : e.dataTransfer.files[0].name});
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    }

    componentDidMount() {
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }

    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }

    render() {
        return (
            <div ref={this.dropRef} className={this.state.drag ? 'filedrop drag' : this.state.filename ? 'filedrop ready' : 'filedrop'}>
                {this.state.filename && !this.state.drag ?
                    <div>{this.state.filename}</div>
                    : <div>Drop files here!</div>
                }
            </div>
        )
    }
}

export default FileDrop;
