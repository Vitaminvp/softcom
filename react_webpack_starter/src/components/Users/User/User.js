import React, {Component} from 'react';
import './user.scss';
import user from '../../../assets/img/default-user-img.jpg';
import {limit} from "../../functions";

class User extends Component {
    render() {
        const {name, email, phone, position, photo} = this.props.user;
        return (
            <div className="col-md-4">
                <div className="user">
                    <div className="user__img"><img src={photo ? photo : user} alt={name}/></div>
                    <div className="user__info">
                        <div className="user__info_name" title={name}>{limit(name)}</div>
                        <div className="user__info_position">{position}</div>
                        <div className="user__info_email" title={email}>{limit(email)}</div>
                        <div className="user__info_phone">{phone}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
