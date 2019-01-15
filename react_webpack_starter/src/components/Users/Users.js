import React from 'react';
import User from './User/User';
import './user.scss';
import Btn from "../button/button";

import {Ajax} from '../../utils/ajax';
const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=60';
const URL1 = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1';

class Requirements extends React.Component{
    constructor(){
        super();
        this.state = {
            users: [],
            user: {}
        };
    }
    componentDidMount() {
        Ajax.get(URL, (response) => {
            this.setState( {users: response.users} );
            console.log("this.state.users", this.state.users);
        });
        Ajax.get(URL1, (response) => {
            this.setState( {user: response.user} );
            console.log("this.state.user", this.state.user);
        });
    }
    addComment(title, comment){
        Ajax.post(URL, {
            author: title,
            text: comment
        }, (response) => {
            this.setState({
                list: response
            });
        });

    }
    onConfirmChange(task){
        Ajax.put(`${URL}/${task.id}`, task, (response) => {
            this.setState((state) => {
                state.list.forEach((item, i, arr) => {
                    if(item.id == response.id){
                        arr[i] = response;
                    }
                });
                return state;
            });
        });
    }
    onDelete(task){
        Ajax.delete(`${URL}/${task.id}`,  (response) => {
            this.setState({
                list: response
            });
        });
    }
    render(){
        return <section className="users">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Our cheerful users</h2>
                        <h4>Attention! Sorting users by registration date</h4>
                    </div>
                </div>
                <div className="row">
                    {this.state.users.length > 0 ? this.state.users.map(item =>  <User user={item} key={item.id}/> ) : null}
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
    }

};

export default Requirements;
