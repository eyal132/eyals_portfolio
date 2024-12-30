import React from 'react';
import Navbar from './Nav';
import phone from '../media/phoneIMG.png';
import email from '../media/emailIMG.png';
import Linkedin from '../media/linkedin_icon.png';

function ContactPage() {

    return (
        <section>
            <div className='App'>
            <Navbar />
            <div className="eyal-logo">
            <span className="name">Eyal's </span><span className="second_word"> Portfolio</span>
            </div>
            
            <table className = "contact-table">
                    <tbody>
                        <tr>
                            <td><div><img className="contactIMG" src={phone} alt="Phone" /><br></br>Phone Number:<br></br>0225981334</div></td>
                            <td><div><img className="contactIMGEmail" src={email} alt="Email" /><br></br>Email:<br></br>eyalglraz@gmail.com</div></td>
                            <td><div><img className="contactIMGLinkedin" src={Linkedin} alt="Linkedin" /><br></br><a className="linkedInLink" href="https://www.linkedin.com/in/eyal-blumental-erez-b6ba4627b" rel="noopener noreferrer" target="_blank">Linkedin</a></div></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>
        
    );
}

export default ContactPage;