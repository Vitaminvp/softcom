import React from 'react';
import './user.scss';
import Btn from "../button/button";
import user from '../../assets/img/user-noah-2x.jpg';


const Requirements = () => {
        return <section className="users">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Our cheerful users</h2>
                        <h4>Attention! Sorting users by registration date</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="user">
                            <div className="user__img"><img src={user} alt="user"/></div>
                            <div className="user__info">
                                <div className="user__info_name">Noah</div>
                                <div className="user__info_position">Leading specialist of the Control Department </div>
                                <div className="user__info_email">noah.controldepartment@gmail</div>
                                <div className="user__info_phone">+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="user">
                            <div className="user__img"><img src={user} alt="user"/></div>
                            <div className="user__info">
                                <div className="user__info_name">Noah</div>
                                <div className="user__info_position">Leading specialist of the Control Department </div>
                                <div className="user__info_email">noah.controldepartment@gmail</div>
                                <div className="user__info_phone">+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="user">
                            <div className="user__img"><img src={user} alt="user"/></div>
                            <div className="user__info">
                                <div className="user__info_name">Noah</div>
                                <div className="user__info_position">Leading specialist of the Control Department </div>
                                <div className="user__info_email">noah.controldepartment@gmail</div>
                                <div className="user__info_phone">+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="user">
                            <div className="user__img"><img src={user} alt="user"/></div>
                            <div className="user__info">
                                <div className="user__info_name">Noah</div>
                                <div className="user__info_position">Leading specialist of the Control Department </div>
                                <div className="user__info_email">noah.controldepartment@gmail</div>
                                <div className="user__info_phone">+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="users__show_more">
                            <Btn url={'#'} class={'btn btn__border'} value="Show more"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
};

export default Requirements;
