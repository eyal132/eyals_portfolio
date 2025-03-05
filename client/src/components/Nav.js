import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section className="nav">
            <table>
                <tr>
               <td>📧eyalglraz@gmail.com</td>
                </tr>
                <tr>
                <td>📍Auckland, New Zealand</td>
                </tr>
            </table>
            <div className="eyal-logo" id="about">
        <span className="name">EYAL BLUMENTAL EREZ </span>
        <span className="subText">Software Engineer | Full-Stack Developer</span>
      </div>
        </section>
    );
}

export default Navbar;

