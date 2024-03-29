import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    /*setTimeout(() => {
        props.history.push('/about')
    }, 2000)*/
    return (
        <nav className="nav-wrapper red bg-darken-3">
            <div className="container">
                <a href=" " className="brand-logo">Pokemon Page</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)