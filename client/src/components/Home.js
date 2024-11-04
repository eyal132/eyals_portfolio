import React from 'react';
import '../App.css';
import Navbar from './Nav';
import eyalIMG from '../media/eyal-portrait.png';
import spaceIMG from '../media/space_game.png';

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
    <th>Capstone Website "Cornerstone"</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">Express</p>
        <p class="techCard">MongoDB</p></div></div></td>
    <div id="aboutProject"><h2 id="aboutTitle">About the Project:</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Radiation Game</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">Express</p>
        <p class="techCard">MongoDB</p></div></div></td>
    <div id="aboutProject"><h2 id="aboutTitle">About the Project:</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>PLACEHOLDER</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">Express</p>
        <p class="techCard">MongoDB</p></div></div></td>
    <div id="aboutProject"><h2 id="aboutTitle">About the Project:</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div>
  </tr>
  </div>
    <div className = "project-container">
  <tr>
    <th>PLACEHOLDER</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">Express</p>
        <p class="techCard">MongoDB</p></div></div></td>
    <div id="aboutProject"><h2 id="aboutTitle">About the Project:</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div>
  </tr>
  </div>
  <div className = "project-container">
  <tr>
    <th>Java TicTacToe</th>
  </tr>
  <tr>
    <p id="date">Completion Year: 2024</p>
    <td><img className="tableIMG" src={spaceIMG} alt="Project" /><div className='tech-stack-container'><h2 id="techStack">Tech Stack: </h2>    
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">Express</p>
        <p class="techCard">MongoDB</p></div></div></td>
    <div id="aboutProject"><h2 id="aboutTitle">About the Project:</h2><p id="aboutText">Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></div>
  </tr>
  </div>
</table>
    </body>

    </section>
  );
}

export default Home;

