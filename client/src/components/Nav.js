import React from 'react';


function Navbar() {
    return (
        <section className="nav">
        <ul>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </section>
    );
}

export default Navbar;

