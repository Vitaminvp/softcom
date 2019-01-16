import React from 'react';
import './button.scss';

const Btn = (props) => <a href={props.url} className={props.class} onClick={props.addUser}>{props.value}</a>;

export default Btn;