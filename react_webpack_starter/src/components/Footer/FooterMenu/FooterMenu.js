import React from 'react';
import './footermenu.scss';
const FooterMenu = (props) => {
    return (
        <ul className="social_menu">
            {props.menu.map(item => <li key={item.key}><a href={item.url}>{item.name}</a></li>)}
        </ul>
    );
};

export default FooterMenu;
