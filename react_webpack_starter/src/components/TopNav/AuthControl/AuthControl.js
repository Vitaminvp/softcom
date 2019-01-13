import React from 'react';
import {Link} from 'react-router-dom';
import './authcontrol.scss';
import avatar from '../../../assets/img/avatar.png';

export default class AuthControl extends React.Component{
    render(){
        return  <React.Fragment>
            <div className="auth__info">
                <a href="#" className="auth__info_name">Superstar</a>
                <a href="#" className="auth__info_email">Superstar@gmail.com</a>
            </div>
            <div className="auth__avatar"><img src={avatar} alt="avatar"/></div>
            <div className="auth__icon"><span className="icon-sign-out"></span></div>
        </React.Fragment>;
    };
};