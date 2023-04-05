import React from "react";
import '../components/NavBar.css'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {



    return (
        <nav>

            <label className="logo"> <img src="" alt="" /></label>

            <img src="./images/frontline" alt="" />
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
            <Outlet />
        </nav>
    )
}

export default NavBar;