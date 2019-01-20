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
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    componentDidMount() {
        Ajax.get(URL1, (response) => {
            console.log("response", response);
            this.setState( {user: response.user} );
        });
    }
    toggleMenu(e){
        e.preventDefault();
        const target = e.target.closest('.toggle-menu');
        if(target.classList.contains('on')){
            target.classList.remove('on');
        }else{
            target.classList.add('on');
        }
    }
    render() {
        return <div className="topnav">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-10 col-lg-2">
                            <Logo />
                        </div>
                        <div className="col-4 col-md-2 col-lg-7">
                            <Menu />
                        </div>
                        <div className="col-lg-3">
                            <AuthControl user={ this.state.user } />
                        </div>
                        <div className="topnav__hamburger">
                            <a href="#" class="toggle-menu" onClick={this.toggleMenu}><span></span></a>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default TopNav;
