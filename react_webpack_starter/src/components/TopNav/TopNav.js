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
            user: {},
            toggleMenu: true
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    componentDidMount() {
        Ajax.get(URL1, (response) => {
            this.setState( {user: response.user} );
        });
    }
    toggleMenu(e){
        e.preventDefault();
        const target = e.target.closest('.toggle-menu');
        if(target.classList.contains('on')){
            this.setState({toggleMenu: true});
        }else{
            this.setState({toggleMenu: false});
        }
    }
    render() {
        return <div className={this.state.toggleMenu ? 'topnav' : 'topnav menu-visible' }>
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-10 col-lg-2">
                            <Logo />
                        </div>
                        <div className="order-sm-1 col-sm-12 col-md-1 col-lg-3">
                            <AuthControl user={ this.state.user } />
                        </div>
                        <div className="col-12 col-sm-12 col-md-11 col-lg-7">
                            <Menu />
                        </div>
                        <div className="topnav__hamburger">
                            <a href="#" className={this.state.toggleMenu ? 'toggle-menu' : 'toggle-menu on'} onClick={this.toggleMenu}><span></span></a>
                        </div>
                    </div>
                </div>
            </div>;
    }
}

export default TopNav;
