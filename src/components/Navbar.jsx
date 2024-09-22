import React from "react";
import { Link } from "react-router-dom";

function NavBar({ current }) {
    return (
        <nav className="sidebar">
            <Link 
                to="/dashboard" 
                className={current === "Dashboard" ? "nav-link active" : "nav-link link-body-emphasis"}
            >
                Dashboard
            </Link>
            <Link 
                to="/statistics" 
                className={current === "Statistics" ? "nav-link active" : "nav-link link-body-emphasis"}
            >
                Statistics
            </Link>
            <Link 
                to="/transaction" 
                className={current === "Transaction" ? "nav-link active" : "nav-link link-body-emphasis"}
            >
                Transaction
            </Link>
            <Link 
                to="/setting" 
                className={current === "Setting" ? "nav-link active" : "nav-link link-body-emphasis"}
            >
                Setting
            </Link>
        </nav>
    );
}

export default NavBar;
