import React, {Component} from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import '../style/style.scss';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import TopNav from "./TopNav/TopNav";
import GetAcquainted from "./GetAcquainted/GetAcquainted";
import Requirements from "./Requirements/Requirements";
import Users from "./Users/Users";
import Register from "./Register/Register";

class App extends Component {
    render() {
        return  <React.Fragment>
                    <TopNav />
                    <Header/>
                    <GetAcquainted />
                    <Requirements />
                    <Users />
                    <Register/>
                    <Footer/>
                </React.Fragment>;
    }
}

export default App;
