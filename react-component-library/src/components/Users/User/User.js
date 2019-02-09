import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './user.scss';
import {limit} from "../../functions";




const StarRating = (function() {
    function Star({ marked, starId }) {
        return (
            <span star-id={starId} style={{ color: '#ff9933' }} role='button'>
        {marked ? '\u2605' : '\u2606'}
      </span>
        );
    }

    return class StarRating extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                rating: typeof props.rating == 'number' ? props.rating : 0,
                selection: 0
            };
            this.hoverOver = this.hoverOver.bind(this);
            this.hoverOut = this.hoverOver.bind(this, null);
            this.handleClick = this.handleClick.bind(this);
        }
        hoverOver(event) {
            let val = 0;
            if (event && event.target && event.target.getAttribute('star-id'))
                val = event.target.getAttribute('star-id');
            this.setState(state => ({ selection: val }));
        }
        handleClick(event) {
            const val = event.target.getAttribute('star-id') || this.state.rating;
            this.setState(state => ({ rating: val }));
        }
        render() {
            return (
                <div
                    onMouseOut={this.hoverOut}
                    onClick={this.handleClick}
                    onMouseOver={this.hoverOver}
                >
                    {Array.from({ length: 5 }, (v, i) => (
                        <Star
                            starId={i+1}
                            key={`star_${i+1} `}
                            marked={
                                this.state.selection
                                    ? this.state.selection >= i+1
                                    : this.state.rating >= i+1
                            }
                        />
                    ))}
                </div>
            );
        }
    };
})();






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
        if (left < 0) left = 0;
        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) {
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
        const newPhone = phone.replace(/(^\+380)(\d{2})(\d{3})(\d{2})(\d{2}$)/, "$1 ($2) $3 $4 $5");
        return (
            <CSSTransitionGroup
                component="div" className="col-md-4"
                transitionName="csstransition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <StarRating rating={3}  />
                <div className="user">
                    <div className="user__img"><img src={photo} alt={name}/></div>
                    <div className="user__info">
                        <div className="user__info_name" data-tooltip={name} onMouseOver={(e)=>this.onMouseOver(e, name)} onMouseLeave={(e)=>this.onMouseLeave(e, name)}>{limit(name)}</div>
                        <div className="user__info_position">{position}</div>
                        <div className="user__info_email" data-tooltip={email} onMouseOver={(e)=>this.onMouseOver(e, email)} onMouseLeave={(e)=>this.onMouseLeave(e, email)}>{limit(email)}</div>
                        <div className="user__info_phone" >{newPhone}</div>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default User;
