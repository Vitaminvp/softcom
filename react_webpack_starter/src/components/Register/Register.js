import React from 'react';
import './register.scss';
import Select from "./Select/Select";
import {Ajax} from '../../utils/ajax';
import { REG, URL, URL_POST, URL_TOKEN, TOKENTIME, NumUsers } from "../constants";
import { connect } from 'react-redux';
import { overwriteUsers, setPage, buttonTrue } from '../../AC';

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            response: null,
            isDisabled: true,
            timeStamp: 0
        };
        this.addUser = this.addUser.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount(){
        this.inputName = document.getElementById('inputName');
        this.inputEmail = document.getElementById('inputEmail');
        this.inputPhone = document.getElementById('inputPhone');
        this.inputPosition = document.getElementById('inputPosition');
        this.inputFile = document.getElementById('inputFile');
    }
    onInputChange(e){
        const target = e.target;
        if( !REG[target.id]().test(target.value) ) {
            target.classList.add('danger');
        }else{
            target.classList.remove('danger');
        }

        if( REG['inputName']().test(this.inputName.value)
            && REG['inputEmail']().test(this.inputEmail.value)
            && REG['inputPhone']().test(this.inputPhone.value)
            && REG['inputPosition']().test(this.inputPosition.value)
            && REG['inputFile']().test(this.inputFile.value) )
        {
            this.setState({isDisabled: false});
        } else{
            this.setState({isDisabled: true});
        }
    }
    modalWindow(){
        const mydiv = document.createElement("DIV");
        mydiv.className = 'modal';
        mydiv.innerHTML = `<p>${this.state.response?this.state.response.message:''}</p>`;
        document.forms.register__form.appendChild(mydiv);
        setTimeout(()=> document.forms.register__form.removeChild(mydiv), 2000);
    }
    postAndGetUsers(formData){
        Ajax.post(URL_POST, formData, this.state.token, (response) => {
            this.setState({
                response: response
            });
            Ajax.get(`${URL}1&count=${NumUsers}`, (response) => {
                this.props.overwriteUsers(response.users);
                this.props.setPage();
                this.props.buttonTrue();
                this.modalWindow();
            });
        });
    }
    addUser(e){

        e.preventDefault();
        const formData = new FormData();

        formData.append('name', this.inputName.value);
        formData.append('email', this.inputEmail.value);
        formData.append('phone',  this.inputPhone.value);
        formData.append('position_id', this.inputPosition.value);
        formData.append('photo', this.inputFile.files[0]);

        if((new Date() - this.state.timeStamp) > TOKENTIME){
            Ajax.get(URL_TOKEN, (response) => {
                if(response.success){
                    this.setState({
                        token: response.token,
                        timeStamp: new Date()
                    });
                    this.postAndGetUsers(formData);
                }else{
                    console.error(error);
                }
            });
        }else{
            this.postAndGetUsers(formData);
        }
        document.forms.register__form.reset();
        this.setState({isDisabled: true});

    }
    render(){
        const app = document.getElementById("app");
        app.onchange = function (e) {
            if(e.target.classList.contains('register__form_upload-div_input')){
                const closestInput = document.querySelector('.register__form_upload-input');
                closestInput.value = e.target.value.replace("C:\\fakepath\\", "");
            }
        };
        return <section className="register" id="add">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Register to get a work</h2>
                        <h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
                    </div>
                </div>
                <form action="POST" className="register__form" name="register__form">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <input id="inputName" type="text" name="name" placeholder="Your name" onChange={(e)=>this.onInputChange(e)} required />
                                <label htmlFor="name" className="register__form_label">Name</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <input id="inputEmail" type="email" name="email" placeholder="Your email" onChange={(e)=>this.onInputChange(e)} required />
                                <label htmlFor="name" className="register__form_label">Email</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="register__form_input">
                                <input id="inputPhone" type="phone" name="phone" placeholder="+380(__) ___ __ __" onChange={(e)=>this.onInputChange(e)} required />
                                <label htmlFor="name" className="register__form_label">Phone</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_select">
                                    <Select onChange={this.onInputChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register__form_upload">
                                <input className="register__form_upload-input" placeholder="Upload your photo"/>
                                <div className="register__form_upload-div">
                                    <span>Upload</span>
                                    <input id="inputFile" type="file" className="register__form_upload-div_input" name="upload-input" onChange={(e)=>this.onInputChange(e)} required/>
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
}
export default connect((state) => ({
    storeUsers: state.users
}), { overwriteUsers, setPage, buttonTrue })(Register);

