import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar()
{

    const navStyle = {
        backgroundColor: "#222",
        padding: "15px",
        display: "flex",
        gap: "20px",
        alignItems: "center"
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500"
    };

    const activeStyle = {
        color: "#4CAF50",   // Green highlight for active link
        borderBottom: "2px solid #4CAF50",
        paddingBottom: "4px"
    };

    return (
        <nav style={navStyle}>
            <NavLink
                to="/"
                style={({ isActive }) => isActive ? activeStyle : linkStyle}
            >
                Login
            </NavLink>

            <NavLink
                to="/HomePage"
                style={({ isActive }) => isActive ? activeStyle : linkStyle}
            >
                HomePage
            </NavLink>

            <NavLink
                to="/dashboard"
                style={({ isActive }) => isActive ? activeStyle : linkStyle}
            >
                Dashboard
            </NavLink>
        </nav>
    );
}

export default Navbar;
