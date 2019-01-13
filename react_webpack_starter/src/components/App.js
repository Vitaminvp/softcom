import React, {Component} from 'react';
import 'bootstrap-4-grid/css/grid.min.css';
import '../style/style.scss';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopNav from "./TopNav/TopNav";
import For0For from "./For0For/For0For";
import GetAcquainted from "./GetAcquainted/GetAcquainted";
import Requirements from "./Requirements/Requirements";
import Users from "./Users/Users";
import Register from "./Register/Register";


class App extends Component {
    render() {
        return  <BrowserRouter>
                    <React.Fragment>
                        <TopNav />
                        <Header/>
                        <GetAcquainted />
                        <Requirements />
                        <Users />
                        <Register/>
                        {/*<Switch location={location}>*/}
                            {/*<Route exact path="/" component={Header}/>*/}
                            {/*<Route path="/history" component={Header}/>*/}
                            {/*<Route path="/exchange" component={Header}/>*/}
                            {/*<Route path="/news" component={Header}/>*/}
                            {/*<Route component={For0For}/>*/}
                        {/*</Switch>*/}
                        <Footer/>
                    </React.Fragment>
                </BrowserRouter>;
    }
}

export default App;
