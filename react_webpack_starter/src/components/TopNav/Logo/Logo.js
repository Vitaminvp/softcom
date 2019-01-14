import React from 'react';
import logo_black from '../../../assets/img/icons/logo.svg';
import logo_white from '../../../assets/img/icons/logo_white.svg';
import './logo.scss';

export default class Logo extends React.Component{
    render(){
        return <div className="logo">
                <img src={this.props.color ? logo_white : logo_black } alt="logo"/>
            </div>;
    };
};