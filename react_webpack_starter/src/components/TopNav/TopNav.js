import React, {Component} from 'react';
import './topnav.scss';
import AuthControl from "./AuthControl/AuthControl";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import { URL1 } from "../constants";
import { Ajax } from "../../utils/ajax";

class TopNav extends Component {
    constructor(){
        super();
        this.state = {
            user: {}
        };
    }
    componentDidMount() {
        Ajax.get(URL1, (response) => {
            console.log("response", response);
            this.setState( {user: response.user} );
        });
    }
    render() {
        return <div className="topnav">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-2">
                            <Logo />
                        </div>
                        <div className="col-md-7">
                            <Menu />
                        </div>
                        <div className="col-md-3">
                            <AuthControl user={ this.state.user } />
                        </div>

                    </div>
                </div>
            </div>;
    }
}

export default TopNav;
