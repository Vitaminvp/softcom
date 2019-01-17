import React from 'react';
import './register.scss';
import Select from "./Select/Select";
import {Ajax} from '../../utils/ajax';
const URL_POST = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const URL_TOKEN = 'https://frontend-test-assignment-api.abz.agency/api/v1/token\n';


class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            response: ''
        };
        this.addUser = this.addUser.bind(this);
    }
    addUser(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', document.getElementById('inputName').value);
        formData.append('email', document.getElementById('inputEmail').value);
        formData.append('phone',  document.getElementById('inputPhone').value);
        formData.append('position_id', document.getElementById('inputPosition').value);
        formData.append('photo', document.getElementById('inputFile').files[0]);

        Ajax.get(URL_TOKEN, (response) => {
            if(response.success){
                this.setState( {token: response.token} );
                console.log("this.state.token", this.state.token);
                Ajax.post(URL_POST, formData, this.state.token, (response) => {
                    this.setState({
                        response: response
                    });
                    console.log("this.state.response", this.state.response);
                });
            }else{
                console.log("errr");
            }
        });


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
                <form action="POST" className="register__form" name="register__form">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Name</label>
                                <input id="inputName" type="text" name="name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Email</label>
                                <input id="inputEmail" type="email" name="email" placeholder="Your email" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <label htmlFor="name" className="register__form_label">Phone</label>
                                <input id="inputPhone" type="phone" name="phone" placeholder="+380(__) ___ __ __" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_select">
                                    <Select />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_upload">
                                <input className="register__form_upload-input" placeholder="Upload your photo"/>
                                <div className="register__form_upload-div">
                                    <span>Upload</span>
                                    <input id="inputFile" type="file" className="register__form_upload-div_input" name="upload-input" required/>
                                </div>
                                <label className="register__form_label" htmlFor="upload-input">File format jpg  up to 5 MB, the minimum size of 70x70px</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="register__form_submit">
                                <button className="btn btn__submit" onClick={this.addUser} type="submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>;
    }
};

export default Register;
