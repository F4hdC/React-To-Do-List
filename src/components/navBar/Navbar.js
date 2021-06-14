import React from 'react'
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import Home from '../home/Home';
import './Navbar.css'

function Navbar() {
    return (
        <Router>
            <div className="b-example-divider p-3"></div>
            <header className="d-flex justify-content-center py-1">
                <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" exact className="nav-link ">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/data-api" className="nav-link">DataApi</NavLink></li>
                <li className="nav-item"><NavLink to="/contact-us" className="nav-link">Contact</NavLink></li>
                </ul>
            </header>

        {/*  Para definir las rutas  */}
        <Route path="/" exact component={Home} />
        
        </Router>
    )
}export default Navbar;
