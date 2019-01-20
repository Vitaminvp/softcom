import React from 'react';
import logo_black from '../../../assets/img/icons/logo.svg';
import logo_white from '../../../assets/img/icons/logo_white.svg';
import './logo.scss';

const Logo = (props) => {
    return <div className="logo">
            <img src={props.color ? logo_white : logo_black } alt="logo"/>
        </div>;
};
export default Logo;