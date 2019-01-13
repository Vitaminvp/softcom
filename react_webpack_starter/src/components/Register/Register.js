import React from 'react';
import './register.scss';
import Btn from "../button/button";

class Register extends React.Component {
    render(){
        return <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Register to get a work</h2>
                        <h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
                    </div>
                </div>
                <form action="" className="register__form">
                    <div className="row">
                        <div className="col-md-4"><label htmlFor="name" className="register__form_label">Name</label><input type="text" name="name" placeholder="Your name" required /></div>
                        <div className="col-md-4"><label htmlFor="name" className="register__form_label">Email</label><input type="email" name="email" placeholder="Your email" required /></div>
                        <div className="col-md-4"><label htmlFor="name" className="register__form_label">Phone</label><input type="phone" name="phone" placeholder="+380(__) ___ __ __" required /></div>
                        <div className="col-md-6">
                            <select name="register__form_select">
                                <option value="" >Select your position</option>
                                <option value="Frontend developer">Frontend developer</option>
                                <option value="Backend developer">Backend developer</option>
                                <option value="Lead designer">Lead designer</option>
                                <option value="QA">QA</option>
                                <option value="The contextual advertising specialist">The contextual advertising specialist</option>
                                <option value="Leading specialist of the Control Department">Leading specialist of the Control Department</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select name="register__form_select">
                                <option value="" >Select your position</option>
                                <option value="Frontend developer">Frontend developer</option>
                                <option value="Backend developer">Backend developer</option>
                                <option value="Lead designer">Lead designer</option>
                                <option value="QA">QA</option>
                                <option value="The contextual advertising specialist">The contextual advertising specialist</option>
                                <option value="Leading specialist of the Control Department">Leading specialist of the Control Department</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </section>;
    }

};

export default Register;
