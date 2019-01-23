import React from 'react';
import './header.scss';
import Btn from "../button/button";
const Header = () => {
    return <header className="header" >
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-6">
                        <h1>Test assignment for Frontend Developer position</h1>
                        <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</span></p>
                        <Btn url={'#add'} classString={'btn'} value="Sign Up"/>
                    </div>

                </div>
            </div>
        </header>;
};


export default Header;