import React, {Component} from 'react';
import './button.scss';

class Btn extends Component {
    click(e){
        e.preventDefault();
        if(this.props.addUser !== undefined){
            this.props.addUser();
        }
    }
    render() {
        const {url, classString, value} = this.props;
        return <a href={url} className={ classString } onClick={(e) => this.click(e)}>{value}</a>;
    }
}





export default Btn;