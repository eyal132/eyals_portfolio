import React from 'react';
import Linkedin from '../media/linkedin_icon.png';

function Navbar() {
    return (
        <section className="nav">
        <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="about.asp">About</a></li>
        <li><a href="news.asp">Contact</a></li>
        <img className="linkedInIcon" src={Linkedin} />
        </ul>
        </section>
    );
}

export default Navbar;

