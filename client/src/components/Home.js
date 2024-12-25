import React from 'react';
import '../App.css';
import Navbar from './Nav';
import eyalIMG from '../media/eyal.png';
import spaceIMG from '../media/space_game.png';
import spaceIMG2 from '../media/space_game2.png';
import Cornerstone1 from '../media/Cornerstone1.png';
import Cornerstone2 from '../media/Cornerstone2.png';
import Cloud1 from '../media/Cloud1.png';
import Cloud2 from '../media/Cloud2.png';
import Radiation1 from '../media/radiation1.png';
import Radiation2 from '../media/radiation2.png';

function Home() {

  const contactPage = () => {
    window.location.href = "Contact";
  }

  return (
    <section className="page">
    <div className="App" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <p>
        <span className="name">Eyal's </span><span className="second_word"> Portfolio</span>
      </p>
      <header className="App-header">
        <div className="mainContainer">
        <h1>Explore my history of projects.</h1>
        <button className="contactbtn" onClick={contactPage}>Contact</button>
        </div>

        <h3 id="my-journey"><a href="#projects">My Journey</a></h3>
        <img className="eyalIMG" src={eyalIMG} alt="Eyal"/>
      </header>
    </div>
    <body>
    <table id="projects">
      <tr>
      </tr>
  <div className = "project-container">
  <tr>
    <th>Capstone Website: "Cornerstone"</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={Cornerstone1} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">HTML</p>
        <p class="techCard">CSS</p>
        <p class="techCard">MySQL</p>
        <p class="techCard">AWS</p>
        <p class="techCard">OAuth 2.0</p>
        <p class="techCard">Github</p></div>
        </div>
        <img className="tableIMG" src={Cornerstone2} alt="Project" />
        <div id="aboutProject"><h2 id="aboutTitle">About the Project</h2><p id="aboutText">Cornerstone was a final-year group project designed to address a real-world challenge faced by our lecturers: the need for an improved project management and allocation system for the course. Following the successful deployment of the website, the project was honored with the title of "Best Computer Science Capstone Project 2024" at the University of Auckland.</p></div></td>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Cloud Backup Webapp</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={Cloud1} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">HTML</p>
        <p class="techCard">CSS</p>
        <p class="techCard">Github</p></div>
        </div>
        <img className="tableIMG" src={Cloud2} alt="Project" />
        <div id="aboutProject"><h2 id="aboutTitle">About the Project</h2><p id="aboutText">This web application was a personal initiative, developed to reduce reliance on cloud storage services such as Google Photos. It operates and stores data locally on my personal computer, while providing remote access, functioning similarly to a traditional cloud-based system.</p></div></td>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Radiation Game</th>
  </tr>
  <tr>
    <p id="date">In Devlopment Since: 2023</p>
    <td><img className="tableIMG" src={Radiation1} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>
    <div class="tech-items">
        <p class="techCard">Unity</p>
        <p class="techCard">C#</p></div>
        </div>
        <img className="tableIMG" src={Radiation2} alt="Project" />
        <div id="aboutProject"><h2 id="aboutTitle">About the Project</h2><p id="aboutText">This project is a horror-themed game designed to immerse players in a chilling and eerie atmosphere. With haunting sound effects and a focus on creating an unsettling environment, the game aims to deliver a linear, story-driven experience set in an abandoned nuclear power plant. The primary objective is to evoke a sense of suspense and dread, making the atmospheric design a central element of the gameplay.</p></div></td>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Space Game</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2023</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">Unity</p>
        <p class="techCard">C#</p>
        <p class="techCard">Blender</p></div>
        </div>
        <img className="tableIMG" src={spaceIMG2} alt="Project" />
        <div id="aboutProject"><h2 id="aboutTitle">About the Project</h2><p id="aboutText">This project is an action-packed, story-driven space game that takes players on a journey through time and space. Players will engage in combat against enemies while uncovering the mystery behind an alien invasion of Earth. As the game progresses, players will advance through levels and their spaceship will become more powerful.</p></div></td>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Java TicTacToe</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2020</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">Netbeans</p>
        <p class="techCard">Java</p></div>
        </div>
        <img className="tableIMG" src={spaceIMG} alt="Project" />
        <div id="aboutProject"><h2 id="aboutTitle">About the Project</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div></td>
  </tr>
  </div>
</table>
    </body>

    </section>
  );
}

export default Home;

