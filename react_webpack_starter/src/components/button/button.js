import React, {Component} from 'react';
import './button.scss';

const Btn = (props) => {
    const click = () =>{
        if(props.addUser !== undefined){
            props.addUser();
        }
    };
    const {url, classString, value} = props;
    return <a href={url} className={ classString } onClick={() => click()}>{value}</a>;
};

export default Btn;