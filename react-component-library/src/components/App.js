import React, {Component} from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import '../style/style.scss';
import Header from './Header/Header';
import Users from "./Users/Users";

class App extends Component {
    render() {
        return  <React.Fragment>
                    <Header/>
                    <Users />
                </React.Fragment>;
    }
}

export default App;
