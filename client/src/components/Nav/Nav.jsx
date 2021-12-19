import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <li>
                <Link to = '/home'>  Logo</Link>
            </li>
            <li>
                <Link to = '/activity'>
                    Create Activity
                </Link>
            </li>
            
        </ul>
    )
} 
export default Nav;