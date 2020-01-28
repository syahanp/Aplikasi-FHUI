import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/global.scss';
import Navbar from './components/nav/Navbar';
import HomeFte from './page/fte/HomeFTE';

class App extends Component {
    render() { 

        // const isLogin = true;
        
        return (
            <Router>
                
                <Navbar/>

                <Switch>
                    
                    <Route exact path='/' component={HomeFte}/>

                    
                </Switch>
            </Router>
        );
    }
}
 
export default App;