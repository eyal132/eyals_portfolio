import React from 'react';
import { Link } from "react-router-dom";
import CV from '../media/CV.pdf';

function Navbar() {
    return (
        <section className="nav">
        <ul>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href = { CV } target = "_blank" rel="noreferrer">CV</a></li>
        </ul>
        </section>
    );
}

export default Navbar;

