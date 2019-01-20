import React from 'react';
import './authcontrol.scss';

export default class AuthControl extends React.Component{
    render(){
        const { name, email, photo } = this.props.user;
        return  <div className="auth">
            <div className="auth__info">
                <a href="#" className="auth__info_name">{name}</a>
                <a href="#" className="auth__info_email">{email}</a>
            </div>
            <div className="auth__avatar"><img src={photo} alt="avatar"/></div>
            <div className="auth__icon"><span className="icon-sign-out"></span></div>
        </div>;
    };
};