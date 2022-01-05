import React from "react";
import { Link } from "react-router-dom";

import './styles.scss';

import menu_icon from "../../assets/icons/menu_black_24dp.svg";

const Navigation = (props) => (
    <nav className="nav-bar">
        <Link to="portfolio">
            <h1>ARCHIVE</h1>
        </Link>
        
        <div className="content">
            <Link to="portfolio"><h5>Home</h5></Link>
            <Link to="portfolio/About"><h5>About</h5></Link>
            <Link to="portfolio/Works"><h5>Works / Reel</h5></Link>
            <Link to="portfolio/Buyaladdin"><h5 style={{color: 'red'}}>Buyaladdin</h5></Link>
            <Link to="portfolio/Contact"><h5>Contact</h5></Link>
        </div>

        <div className="dropdown">
            <button className="dropdown-button">
                MENU
                </button>

            <div className="dropdown-content">
                <Link to="portfolio">Home</Link>
                <Link to="portfolio/About">About</Link>
                <Link to="portfolio/Works">Works / Reel</Link>
                <Link to="portfolio/Buyaladdin">Buyaladdin</Link>
                <Link to="portfolio/Contact">Contact</Link>
            </div>
        </div>
    </nav>
)

export default Navigation;