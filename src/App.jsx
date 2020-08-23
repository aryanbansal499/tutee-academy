import React from 'react';
import Course from './Components/Course.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './custom.css'
import Navbar from './Components/NavBar';

const App =() => {
    return (
        <>
           
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/about" component = {About}/>
                <Route exact path = "/courses" component = {Course}/>
                <Route exact path = "/contact" component = {Contact}/>
                <Redirect to = "/"/>  

            </Switch>
    
        </>
    );
};

export default App;