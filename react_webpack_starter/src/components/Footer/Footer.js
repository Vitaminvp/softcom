import React, {Component} from 'react';
import Logo from "../TopNav/Logo/Logo";
import "./footer.scss";
import Menu from "../TopNav/Menu/Menu";

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer__nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <Logo color={true}/>
                            </div>
                            <div className="col-md-10">
                                <Menu/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__social">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">1515</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Footer;


