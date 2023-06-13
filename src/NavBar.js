import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <h2 id="Logo">LOGO</h2>
            <ul className="NavLinks">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
