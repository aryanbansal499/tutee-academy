import React from 'react';
import Course from './Components/CS-Course.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './custom.css'
import Navbar from './Components/NavBar';
import Carousel from './Components/Carousel.jsx';
import { Container } from 'react-bootstrap';
import Consulting from './Components/Consulting.jsx';
import Careers from './Components/Careers.jsx';
import Credit from './Components/Credit-Courses.jsx';
import Test from './Components/Test-Prep.jsx';

const App =() => {
    return (
        <>
           
            <Navbar/>
           
        
           
            
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/about" component = {About}/>
                <Route exact path = "/consulting" component = {Consulting}/>
                <Route exact path = "/contact" component = {Contact}/>
                <Route exact path = "/careers" component = {Careers}/>
                <Route exact path = "/credit" component = {Credit}/> 
                <Route exact path = "/testprep" component = {Test}/>
                <Route exact path = "/cs" component = {Course}/>
                <Redirect to = "/"/>  

            </Switch>
    
        </>
    );
};

export default App;