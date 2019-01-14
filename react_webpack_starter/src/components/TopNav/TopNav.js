import React, {Component} from 'react';
import './topnav.scss';
import AuthControl from "./AuthControl/AuthControl";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

class TopNav extends Component {
    render() {
        return <div className="topnav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <Logo />
                        </div>
                        <div className="col-md-7">
                            <Menu />
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
