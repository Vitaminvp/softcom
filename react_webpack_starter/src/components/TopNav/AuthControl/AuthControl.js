import React from 'react';
import './authcontrol.scss';

const AuthControl = (props) => {
    const { name, email, photo } = props.user;
    return  <div className="auth">
        <div className="auth__info">
            <a href="#" className="auth__info_name">{name}</a>
            <a href="#" className="auth__info_email">{email}</a>
        </div>
        <div className="auth__avatar"><img src={photo} alt="avatar"/></div>
        <div className="auth__icon"><span className="icon-sign-out"></span></div>
    </div>;
};

export default  AuthControl;