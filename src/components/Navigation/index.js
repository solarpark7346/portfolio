import React from "react";
import { Link } from "react-router-dom";

import './styles.css'

const Navigation = (props) => (
    <nav className="nav-bar">
        <div className="left-div">
            <div className="content">
                <Link to="/">
                    <h1>ARCHIVE</h1>
                </Link>
            </div>
        </div>
        
        <div className="content">
            <Link to="/"><h5>Home(photo)</h5></Link>
            <Link to="About"><h5>About</h5></Link>
            <Link to="Works"><h5>Works / Reel</h5></Link>
            <Link to="Features"><h5>Features</h5></Link>
            <Link to="Contact"><h5>Contact</h5></Link>
        </div>
    </nav>
)

export default Navigation;