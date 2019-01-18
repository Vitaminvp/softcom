import React from 'react';
import User from './User/User';
import './user.scss';
import {Ajax} from '../../utils/ajax';
import { NumUsers, URL, URL1 } from "../constants";

class Requirements extends React.Component{
    constructor(){
        super();
        this.isButton = true;
        this.page = 1;
        this.state = {
            users: [],
            user: {}
        };
        this.addUsers = this.addUsers.bind(this);
    }
    addUsers(e){
        e.preventDefault();
        this.page +=1;
        Ajax.get(`${URL}${this.page}&count=${NumUsers}`, (response) => {
            if(response.users && (response.users.length >= 6)){
                this.setState( {users: [...this.state.users, ...response.users]} );
            }else{
                this.isButton = false;
                this.setState( {users: [...this.state.users, ...response.users]} );
            }

        });
    }
    componentDidMount() {
        Ajax.get(`${URL}${this.page}&count=${NumUsers}`, (response) => {
            console.log("response.users", response.users);
            this.setState( {users: [...this.state.users, ...response.users]} );
        });
        Ajax.get(URL1, (response) => {
            this.setState( {user: response.user} );
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
                    {this.state.users.length > 0 ? this.state.users
                        .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
                        .map(item =>  <User user={item} key={item.id}/>)
                        : null}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="users__show_more">
                            <a href='#' className={this.isButton ? 'btn btn__border' : 'hidden'} onClick={this.addUsers}>Show more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }

};

export default Requirements;
