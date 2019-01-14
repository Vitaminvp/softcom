import React from 'react';
import './menu.scss';

export default class Menu extends React.Component{
    render(){
        return <ul className="menu">
            <li><a href="#" className="menu_link">About me</a></li>
            <li><a href="#" className="menu_link">Relationships</a></li>
            <li><a href="#" className="menu_link">Requirements</a></li>
            <li><a href="#" className="menu_link">Users</a></li>
            <li><a href="#" className="menu_link">Sign Up</a></li>
        </ul>;
    };
};