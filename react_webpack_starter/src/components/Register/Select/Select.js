import React, {Component} from 'react';
import {Ajax} from '../../../utils/ajax';
const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

class Select extends Component {
    constructor(){
        super();
        this.state = {
            positions: []
        }
    }
    componentDidMount(){
        Ajax.get(URL, (response) => {
            this.setState( {positions: response.positions} );
            console.log("this.state.positions", this.state.positions);
        });
    }
    render() {
        return (
            <React.Fragment>
                <select id="inputPosition" name="register__form_select">
                    <option value="">Select your position</option>
                    {this.state.positions.map(position => <option key={position.id} value={position.name}>{position.name}</option>)}
                </select>
            </React.Fragment>
        );
    }
}


export default Select;
