import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Link to='/'>
            <h1 className="header" data-cy="header">🌳 Tree Pal 🌳</h1>
        </Link>
    )
}

export default Header;