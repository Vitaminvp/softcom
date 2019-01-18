import React from 'react';
import './register.scss';
import Select from "./Select/Select";
import {Ajax} from '../../utils/ajax';
import { URL_POST, URL_TOKEN } from "../constants"


class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            response: '',
            isDisabled: true
        };
        this.inputName = document.getElementById('inputName');
        this.inputEmail = document.getElementById('inputEmail');
        this.inputPhone = document.getElementById('inputPhone');
        this.inputPosition = document.getElementById('inputPosition');
        this.inputFile = document.getElementById('inputFile');

        this.addUser = this.addUser.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e){
        const nameReg = /\b\w{3,60}\b/g;  //Строка длинной от 2-х до 60-ти символов.
        const phoneReg = /^[\+]{0,1}380[\(]{0,1}([0-9]{9})[\)]{0,1}$/;
        const emailReg = /\b\w{3,60}\b/g;
        const target = e.target;
        if(target.name='name'){
            if( !nameReg.test(target.value) && !target.classList.contains('danger') ) {
                target.classList.add('danger');
            }else if(target.classList.contains('danger')){
                target.classList.remove('danger');
            }
        }else if(target.name='email'){
            if( !emailReg.test(target.value) && !target.classList.contains('danger') ) {
                target.classList.add('danger');
            }else if(target.classList.contains('danger')){
                target.classList.remove('danger');
            }
        }else if(target.name='phone'){
            if( !phoneReg.test(target.value) && !target.classList.contains('danger') ) {
                target.classList.add('danger');
            }else if(target.classList.contains('danger')){
                target.classList.remove('danger');
            }
        }


        // if(e.target.value.length < 2 && e.target.value.length > 60 ){
        //     e.target.classList.add('danger');
        // }else{
        //     e.target.classList.remove('danger');
        // }
    }
    addUser(e){

        e.preventDefault();

        // const inputName = document.getElementById('inputName');
        // const inputEmail = document.getElementById('inputEmail');
        // const inputPhone = document.getElementById('inputPhone');
        // const inputPosition = document.getElementById('inputPosition');
        // const inputFile = document.getElementById('inputFile');

        const formData = new FormData();

        formData.append('name', this.inputName.value);
        formData.append('email', this.inputEmail.value);
        formData.append('phone',  this.inputPhone.value);
        formData.append('position_id', this.inputPosition.value);
        formData.append('photo', this.inputFile.files[0]);

        Ajax.get(URL_TOKEN, (response) => {
            if(response.success){
                this.setState( {token: response.token} );
                console.log("this.state.token", this.state.token);
                Ajax.post(URL_POST, formData, this.state.token, (response) => {
                    console.log("response", response);
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
                                <input id="inputName" type="text" name="name" placeholder="Your name" onChange={(e)=>this.onInputChange(e)} required />
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
                                <button className="btn btn__submit" onClick={this.addUser} type="submit" disabled={ this.state.isDisabled }>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>;
    }
};

export default Register;
