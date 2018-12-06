import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="tm-sidebar">
            <nav className="tm-main-nav">
                <ul className="tm-main-nav-ul">

                    <li className="tm-nav-item">
                    <NavLink to="/" className="tm-nav-item-link tm-button" exact> <i className="fa fa-smile-o tm-nav-fa"></i> Welcome </NavLink>
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/gallery" className="tm-nav-item-link tm-button"> <i className="fa fa-image tm-nav-fa"></i> Image Gallery </NavLink>
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/services" className="tm-nav-item-link tm-button"> <i className="fa fa-tasks tm-nav-fa"></i> Our Services </NavLink>
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/resources" className="tm-nav-item-link tm-button"> <i className="fa fa-list tm-nav-fa"></i> Resources </NavLink>
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/about" className="tm-nav-item-link tm-button"> <i className="fa fa-sitemap tm-nav-fa"></i> About Company </NavLink>
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/contact" className="tm-nav-item-link tm-button"> <i className="fa fa-envelope tm-nav-fa"></i> Contact Us </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;