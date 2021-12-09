import React from "react";
import { Link } from "react-router-dom";

import './styles.css'

const Navigation = (props) => (
    <nav className="nav-bar">
        <div className="left-div">
            <div className="content">
                <Link to="portfolio">
                    <h1>ARCHIVE</h1>
                </Link>
            </div>
        </div>
        
        <div className="content">
            <Link to="portfolio"><h5>Home(photo)</h5></Link>
            <Link to="portfolio/About"><h5>About</h5></Link>
            <Link to="portfolio/Works"><h5>Works / Reel</h5></Link>
            <Link to="portfolio/Buyaladdin"><h5 style={{color: 'red'}}>Buyaladdin</h5></Link>
            <Link to="portfolio/Contact"><h5>Contact</h5></Link>
        </div>
    </nav>
)

export default Navigation;