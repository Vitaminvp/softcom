import React from 'react';
import './getacquainted.scss';
import Btn from "../button/button";
import acquainted__img from '../../assets/img/man-mobile.svg';
import html from '../../assets/img/html.svg';
import css from '../../assets/img/css.svg';
import js from '../../assets/img/javascript.svg';

const GetAcquainted = () => {
        return <section className="acquainted">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Let's get acquainted</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="acquainted__img"><img src={acquainted__img} alt=""/></div>
                    </div>
                    <div className="col-md-8">
                        <h3>I am cool frontend developer</h3>
                        <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                        <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. </p>
                        <Btn url={'#'} classString={'btn btn__transparent'} value="Sign Up"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>About my relationships with<br/> web-development</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={html} alt="HTML5"/>
                        <h3>I'm in love with HTML</h3>
                        <p>Hypertext Markup Language (HTML) is the standard markup language
                            for creating web pages and web applications.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={css} alt="CSS"/>
                        <h3>CSS is my best friend</h3>
                        <p>Cascading Style Sheets (CSS)
                            is a style sheet language used for describing the presentation of a document
                            written in a markup language like HTML.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={js} alt="JAVASCRIPT"/>
                        <h3>JavaScript is my passion</h3>
                        <p>JavaScript is a high-level, interpreted programming language.
                            It is a language which is also characterized as dynamic, weakly typed,
                            prototype-based and multi-paradigm.</p>
                    </div>
                </div>
            </div>
        </section>;
};

export default GetAcquainted;
