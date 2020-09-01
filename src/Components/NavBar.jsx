import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => 
{
    return (

        <>

        <div className = "container-fluid nav bg">
            <div className = 'row'>
                <div className = "col-12 mx-auto">
                
                    <nav className="navbar navbar-expand-lg  navbar-dark flex-column flex-md-row bd-navbar">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="#">Tutee Academy</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">

                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/college">College Consulting</NavLink>
                                </li>
                                

                                <li className="nav-item">
                                <NavLink className="nav-link" to="/careers">Careers</NavLink>
                                </li>
                                
                                
                                <li className="nav-item dropdown">
                                   <NavDropdown href= "/credit" title = "Credit Courses" id = "basic">
                                       

                                   <NavDropdown.Item href="/consulting">Go to Counselling Page</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/">Separated link</NavDropdown.Item>

                                   </NavDropdown>
                                    
                                </li>

                                <li className="nav-item dropdown">
                                   <NavDropdown href= "/cs" title = "CS Courses" id = "basic">
                                       

                                   <NavDropdown.Item href="/cs">Go to Counselling Page</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/">Separated link</NavDropdown.Item>

                                   </NavDropdown>
                                    
                                </li>

                                <li className="nav-item dropdown">
                                   <NavDropdown href= "/test" title = "Test-Prep" id = "basic">
                                       

                                   <NavDropdown.Item href="/test">Go to Counselling Page</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/">Separated link</NavDropdown.Item>

                                   </NavDropdown>
                                    
                                </li>
                                
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>                                        
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                               
                            </ul>
                            
                            </div>
                        </div>
                    </nav>
            
                </div>
            </div>
        </div> 
        </>
    );
};

export default Navbar;
