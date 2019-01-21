import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './user.scss';
import {limit} from "../../functions";

class User extends Component {
    constructor(){
        super();
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    onMouseOver(e, string) {
        const target = e.target;
        const tooltip = target.getAttribute('data-tooltip');
        if (!tooltip) return;

        const tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = string;
        document.body.appendChild(tooltipElem);

        const coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; // не вылезать за левую границу окна

        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) { // не вылезать за верхнюю границу окна
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

        this.showingTooltip = tooltipElem;
    };
    onMouseLeave(){
        if (this.showingTooltip) {
            document.body.removeChild(this.showingTooltip);
            this.showingTooltip = null;
        }
    }
    render() {
        const {name, email, phone, position, photo} = this.props.user;
        return (
            <CSSTransitionGroup
                component="div" className="col-md-4"
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className="user">
                    <div className="user__img"><img src={photo} alt={name}/></div>
                    <div className="user__info">
                        <div className="user__info_name" data-tooltip={name} onMouseOver={(e)=>this.onMouseOver(e, name)} onMouseLeave={(e)=>this.onMouseLeave(e, name)}>{limit(name)}</div>
                        <div className="user__info_position">{position}</div>
                        <div className="user__info_email" data-tooltip={email} onMouseOver={(e)=>this.onMouseOver(e, email)} onMouseLeave={(e)=>this.onMouseLeave(e, email)}>{limit(email)}</div>
                        <div className="user__info_phone" >{phone}</div>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default User;
