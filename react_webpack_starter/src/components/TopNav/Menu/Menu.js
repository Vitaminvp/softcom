import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './menu.scss';
import { MENU } from '../../data';

const Menu = () => {
    return <CSSTransitionGroup
            component="ul" className="menu"
            transitionName="csstransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
        { MENU.map(item => <li key={item.key}><a href={item.url} className="menu_link" alt={item.name}  >{item.name}</a></li>) }
        </CSSTransitionGroup>;
};

export default Menu;