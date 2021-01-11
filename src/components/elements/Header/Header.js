import React from 'react';
import './Header.css';

const Header = () => (
    <div className="rmdb-header">
        <div className="rmdb-header-content">
            <h1 className="rmdb-logo">Movie Finder</h1>
            <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" />
        </div>
    </div>
)

export default Header;
