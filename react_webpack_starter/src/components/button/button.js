import React, {Component} from 'react';
import './button.scss';

const Btn = (props) => {
    const click = (e) =>{
        e.preventDefault();
        if(props.addUser !== undefined){
            props.addUser();
        }
    };

    const {url, classString, value} = props;
    return <a href={url} className={ classString } onClick={(e) => click(e)}>{value}</a>;
};





export default Btn;