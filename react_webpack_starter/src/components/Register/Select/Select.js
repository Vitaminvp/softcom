import React, {Component} from 'react';
import {Ajax} from '../../../utils/ajax';
const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
import './select.scss';

class Select extends Component {
    constructor(){
        super();
        this.state = {
            positions: []
        };
        this.changeSelect = this.changeSelect.bind(this);
    }
    componentDidMount(){
        Ajax.get(URL, (response) => {
            this.setState( {positions: response.positions} );
        });
    }
    changeSelect(e){
        this.props.onChange(e);
    }
    render() {
        return (<select id="inputPosition" name="register__form_select" className="inputPosition" onChange={(e)=> this.changeSelect(e)}>
                <option value={0}>Select your position</option>
                {this.state.positions.map(position => <option key={position.id} value={position.id}>{position.name}</option>)}
            </select>);
    }
}

export default Select;
