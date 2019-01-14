import React from 'react';
import './register.scss';
import Btn from "../button/button";

class Register extends React.Component {
    constructor(){
        super();
    }

    render(){
        const app = document.getElementById("app");
        app.onchange = function (e) {
            if(e.target.classList.contains('register__form_upload-div_input')){
                const closestInput = document.querySelector('.register__form_upload-input');
                closestInput.value = e.target.value.replace("C:\\fakepath\\", "");
            }
        };
        return <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/*<h2>Register to get a work</h2>*/}
                        <h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
                    </div>
                </div>
                <form action="" className="register__form">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Name</label>
                                <input type="text" name="name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Email</label>
                                <input type="email" name="email" placeholder="Your email" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Phone</label>
                                <input type="phone" name="phone" placeholder="+380(__) ___ __ __" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_select">
                                <select name="register__form_select">
                                    <option value="">Select your position</option>
                                    <option value="Frontend developer">Frontend developer</option>
                                    <option value="Backend developer">Backend developer</option>
                                    <option value="Lead designer">Lead designer</option>
                                    <option value="QA">QA</option>
                                    <option value="The contextual advertising specialist">The contextual advertising specialist</option>
                                    <option value="Leading specialist of the Control Department">Leading specialist of the Control Department</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_upload">
                                <input className="register__form_upload-input" placeholder="Upload your photo"/>
                                <div className="register__form_upload-div">
                                    <span>Upload</span>
                                    <input type="file" className="register__form_upload-div_input" name="upload-input"/>
                                </div>
                                <label className="register__form_label" htmlFor="upload-input">File format jpg  up to 5 MB, the minimum size of 70x70px</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="register__form_submit">
                                <Btn url={'#'} class={'btn btn__submit'} value="Sign Up"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>;
    }

};

export default Register;
