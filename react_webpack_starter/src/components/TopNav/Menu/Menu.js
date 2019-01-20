import React from 'react';
import './menu.scss';
import { MENU } from '../../data';

const Menu = () => {
    return <ul className="menu">
        { MENU.map(item => <li key={item.key}><a href={item.url} className="menu_link" alt={item.name} >{item.name}</a></li>) }
    </ul>;
};

export default Menu;