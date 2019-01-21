import React from 'react';
import User from './User/User';
import './user.scss';
import {Ajax} from '../../utils/ajax';
import { NumUsers, URL } from "../constants";
import { connect } from 'react-redux';
import { appendUsers, incPage, setPage, buttonFalse, buttonTrue } from '../../AC';

class Requirements extends React.Component{
    constructor(){
        super();
        this.isButton = true;
        this.addUsers = this.addUsers.bind(this);
    }
    addUsers(e){
        e.preventDefault();

        Ajax.get(`${URL}${this.props.storePage+1}&count=${NumUsers}`, (response) => {
            if(response.users && (response.users.length < 6)){
                this.props.buttonFalse();
                this.props.setPage();

            }else{
                this.props.appendUsers(response.users);
                this.props.incPage();
            }

        });
    }
    componentDidMount() {
        this.props.buttonTrue();
        Ajax.get(`${URL}${this.props.storePage}&count=${NumUsers}`, (response) => {
            this.props.appendUsers(response.users);
        });
    }
    render(){
        return <section className="users" id="users">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Our cheerful users</h2>
                        <h4>Attention! Sorting users by registration date</h4>
                    </div>
                </div>
                <div className="row">
                    {this.props.storeUsers.length > 0 ? this.props.storeUsers
                        .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
                        .map(item =>  <User user={item} key={item.id}/>)
                        : null}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="users__show_more">
                            <a href='#' className={this.props.storeButton ? 'btn btn__border' : 'hidden'} onClick={this.addUsers}>Show more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }
}


export default connect((state) => ({
    storeUsers: state.users,
    storePage: state.page,
    storeButton: state.button
}), { appendUsers, incPage, setPage, buttonFalse, buttonTrue })(Requirements);
