import React, {Component} from 'react';
import './footermenu.scss';
class FooterMenu extends Component {
    render() {
        return (
            <ul className="social_menu">
                {this.props.menu.map(item => <li key={item.key}><a href={item.url}>{item.name}</a></li>)}
            </ul>
        );
    }
}


export default FooterMenu;
