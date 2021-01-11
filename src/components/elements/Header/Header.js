import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
const Header = () => (
    <div className="rmdb-header">
        <div className="rmdb-header-content">
            <Link to="/">
                <h1 className="rmdb-logo">Movie Finder</h1>
            </Link>

            <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" />
        </div>
    </div>
)

export default Header;
