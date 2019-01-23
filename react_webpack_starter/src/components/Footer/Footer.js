import React, {Component} from 'react';
import Logo from "../TopNav/Logo/Logo";
import "./footer.scss";
import Menu from "../TopNav/Menu/Menu";
import FooterMenu from "./FooterMenu/FooterMenu";
import {SOCIAL_MENU} from '../data';
import id from 'uniqid';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row footer__nav">
                    <div className="col-md-2">
                        <Logo color={true}/>
                    </div>
                    <div className="col-md-10">
                        <Menu/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="footer__links">
                            <li><a href="mailto:+38 (095) 556 08" className="footer__links-email">work.of.future@gmail.com</a></li>
                            <li><a href="tel:+380507892498" className="footer__links-tel1">+38 (050) 789 24 98</a></li>
                            <li><a href="tel:+380955560845" className="footer__links-tel2">+38 (095) 556 08 45</a></li>
                        </ul>
                    </div>
                    {SOCIAL_MENU.map(item => {
                        return <div className="col-sm-3 col-md-2" key={id()}>
                                <FooterMenu menu={item} />
                            </div>;
                    })}
                </div>
                <div className="footer__icons">
                    <div className="row">
                        <div className="order-md-1 col-md-6 col-lg-9">
                            <ul className="footer__icons-menu">
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer__icons-credits">
                                © abz.agency specially for the test task
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;


