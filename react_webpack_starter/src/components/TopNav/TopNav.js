import React, {Component} from 'react';
import logo from '../../assets/img/icons/logo.svg';
import './topnav.scss';
import AuthControl from "./AuthControl/AuthControl";

class TopNav extends Component {
    render() {
        return <div className="topnav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="topnav__logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <ul className="topnav__menu">
                                <li><a href="#" className="topnav__menu_link">About me</a></li>
                                <li><a href="#" className="topnav__menu_link">Relationships</a></li>
                                <li><a href="#" className="topnav__menu_link">Requirements</a></li>
                                <li><a href="#" className="topnav__menu_link">Users</a></li>
                                <li><a href="#" className="topnav__menu_link">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="auth"><AuthControl/></div>
                        </div>

                    </div>
                </div>
            </div>;
    }
}

export default TopNav;
