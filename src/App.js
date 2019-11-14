import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path = '/' component  = {Home}/>
                    <Route exact path = '/rooms' component = {Rooms}/>
                    <Route exact path = '/rooms/:slug' component = {SingleRoom}/>s
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;