import React, { useEffect } from "react";
import '../App.css';
import Navbar from './Nav';
import anime from "animejs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cornerstone1 from '../media/Cornerstone1.png';
import Part1 from '../media/part1.png';
import Part2 from '../media/part2.png';
import IMGProcessing1 from '../media/IMGProcessing1.png';
import Radiation2 from '../media/radiation2.png';
import spaceIMG from '../media/space_game.png';
import TicTacToe1 from '../media/JavaTicTacToe1.png';
import Cloud1 from '../media/Cloud1.png';
import EyalIMG from '../media/eyal.png';
import CV from '../media/EyalCV.pdf';
import Arrow from '../media/arrow.png';

function Home() {

console.log(document.readyState);

  //If document has loaded, then start animations
  if (document.readyState !== 'loading') {

    console.log("Document is ready");

    // Get all elements with class 'scrollFade'
    const items = document.getElementsByClassName("scrollFade");
  
    // Function to check visibility and animate the element
    function checkScrollAndAnimate() {
      for (let item of items) {
        const rect = item.getBoundingClientRect();
        if (rect.top <= 450) {
          // Element is in the viewport, trigger animation here
          console.log('Element in view:', item);
          // Aniamte item
          if(item.classList.contains("left")) {
          anime({
            targets: item,
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 650,
            easing: "easeInOutSine"
          });
        } else {
          anime({
            targets: item,
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 650,
            easing: "easeInOutSine",
          });
        }
          item.classList.remove("scrollFade");
        }
      }
    }
      // Check on scroll
    window.onscroll = checkScrollAndAnimate;
  } else {
    console.log("Waiting for document");
  document.addEventListener('DOMContentLoaded', function() {
    console.log("PAGE LOADED");
  });
}
  


  
          // Register GSAP Plugins
          gsap.registerPlugin(ScrollTrigger);

          useEffect(() => {
            // Log elements before setting up ScrollTrigger
            const elements = document.querySelectorAll('[data-parallax-layers]');
            console.log(elements);  // Should log an array of elements with this attribute
            
            elements.forEach((triggerElement) => {
              console.log(triggerElement);  // Check if individual elements are selected
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: triggerElement,
                  start: "0% 0%",
                  end: "100% 0%",
                  scrub: 0,
                  markers: false,
                },
              });
              const layers = [
                { layer: "1", yPercent: 70 },
                { layer: "2", yPercent: 55 },
                { layer: "3", yPercent: 40 },
                { layer: "4", yPercent: 10 },
              ];
              layers.forEach((layerObj, idx) => {
                tl.to(
                  triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
                  {
                    yPercent: layerObj.yPercent,
                    ease: "none"
                  },
                  idx === 0 ? undefined : "<"
                );
              });
            });
          }, []);

  useEffect(() => {
    anime({
      targets: '.viewWorkButton',
      marginTop: ['80px', '0px'],
      opacity: ['0', '1'],
      easing: 'easeInOutQuad',
      duration: 800,
      delay: 800,
    });
  }, []);

  return (
    <section className="page">
    <div className="App" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <section className="landingPage" id="landingPage">
        <div className="parallax">
  <section className="parallax__header">
    <div className="parallax__visuals">
      <div className="parallax__black-line-overflow"></div>
      <div data-parallax-layers className="parallax__layers">
        <img src={Part2} loading="eager" data-parallax-layer="1" alt="" className="parallax__layer-img"></img>
        <img src={Part1} loading="eager" data-parallax-layer="3" alt="" className="parallax__layer-img-person"></img>
        <div data-parallax-layer="2" className="parallax__layer-title">
          <h2 className="parallax__title">Hi, I'm Eyal</h2>
        </div>
        <div data-parallax-layer="2" className="parallax__layer-subTitle">
          <h2 className="parallax__subTitle">Software & Full-Stack Web Developer</h2>
        </div>
        <div data-parallax-layer="2" className="viewWorkButton">
        <a className="myWorksButton" href="#about" >View My Work</a>
        </div>
      </div>
      <div className="parallax__fade"></div>
    </div>
  </section>
</div>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>
      </section>
      <body>
      </body>
      <Navbar />
      <div className="navBarStick">

      <section className="CVInfo">
      <table className="linksList">
        <tr>
          <a className = "topLink" href="#uniProjects">University Projects</a>
        </tr>
        <tr>
          <a className = "normalLink" href="#gameProjects">Game Development</a>
        </tr>
        <tr>
        <a className = "normalLink" href="#softwareProjects">Software Development</a>
        </tr>
        <tr>
        <p className="title">CAREER OVERVIEW</p>
        </tr>
        <tr>
        <a className = "CVLink" href={CV} target="_blank">CV</a>
        </tr>
      </table>
      <table className="CVInfoTable">
        <tr>
          <th className="middleTable">
            <h2 className="aboutTitle">ABOUT</h2>
            <img src={EyalIMG} className="eyalIMG"></img>
            <p>I believe in continuous learning and keeping an open mind to new ideas. I am always expanding my knowledge of technologies, frameworks, and programming languages. With a strong passion for software and full-stack web development. When I'm away from the computer I enjoy reading, powerlifting, and snowboarding.</p>
          </th>
          <th className="limitWidth">
          <div className="side-categories">
                    <div className="profile-category">
                      <h3 className="addLine">EDUCATION</h3>
                      <div class="education-item">
                        <div class="education-degree">Bachelor of Science</div>
                        <div class="education-school">University of Auckland</div>
                        <div class="education-details">Major: Computer Science</div>
                        <div class="education-date">Graduating: May 2025</div>
                        <br></br>
                    </div>
                    <div class="education-item">
                        <div class="education-degree">NCEA Level 3</div>
                        <div class="education-details">Excellence Endorsement for Digital Technology</div>
                        <div class="education-details">Merit Endorsement for Calculus</div>
                        <div class="education-details">Overall Merit Endorsement</div>
                    </div>
                    </div>
                    <div className="profile-category">
                      <h3 className="addLine">INTERESTS</h3>
                      <ul className="skill-list">
                        <li>Game Development</li>
                        <li>Full-Stack Web Development</li>
                        <li>Computer Hardware</li>
                        <li>Software Architecture</li>
                        <li>UI/UX Design</li>
                      </ul>
                    </div>
                    </div>
          </th>
        </tr>
      </table>
              <section>
                  <table>
                  </table>
                </section>
              </section>
    </div>
    <section className="projectsContainer">
     <h1 className="projectsTitle" id="uniProjects">UNIVERSITY PROJECTS</h1>
     <div className="projectContainer right scrollFade">
      <table>
        <tr>
        <h2>Capstone Website: "Cornerstone"</h2>
        </tr>
        <tr>
        <p>Cornerstone was a final-year group project designed to address a real-world challenge faced by our lecturers: the need for an improved project management and allocation system for the course. Following the successful deployment of the website, the project was honored with the title of "Best Computer Science Capstone Project 2024 Semester 2" at the University of Auckland. My role included tasks such as implementing password hashing, designing API routes, structuring the database, creating queries, User authentication and Google OAuth, aswell as handling various other backend-related tasks.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
    <div class="tech-items">
        <p class="techCard">React</p>
        <p class="techCard">NodeJS</p>
        <p class="techCard">HTML</p>
        <p class="techCard">CSS</p>
        <p class="techCard">MySQL</p>
        <p class="techCard">AWS</p>
        <p class="techCard">OAuth 2.0</p>
        <p class="techCard">Github</p>
        </div>
        </tr>
      </table>
     
     
    <img src={Cornerstone1} alt="" />
  </div>

  <div className="projectContainer left scrollFade">
  <img src={IMGProcessing1} alt="" />
      <table>
        <tr>
        <h2>Coin Detection Image Processing</h2>
        </tr>
        <tr>
        <p>This university project was undertaken to improve our understanding of implementing image processing techniques for coin detection. The techniques applied included filtering, adaptive thresholding, erosion, and dilation.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
    <div class="tech-items">
        <p class="techCard">Python</p>
        </div>
        </tr>
      </table>
  </div>
    </section>
        <section className="projectsContainer">
  <h1 className="projectsTitle" id="gameProjects">GAME DEVELOPMENT</h1>
     <div className="projectContainer right scrollFade">
      <table>
        <tr>
        <h2>Space Game</h2>
        </tr>
        <tr>
        <p>This project is an action-packed, story-driven space game that takes players on a journey through time and space. Players will engage in combat against enemies while uncovering the mystery behind an alien invasion of Earth. As the game progresses, players will advance through levels and their spaceship will become more powerful.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
    <div class="tech-items">
        <p class="techCard">Unity</p>
        <p class="techCard">C#</p>
        <p class="techCard">Blender</p>
        </div>
        </tr>
      </table>
    <img src={spaceIMG} alt="" />
  </div>

  <div className="projectContainer left scrollFade">
  <img src={Radiation2} alt="" />
      <table>
        <tr>
        <h2>Abandoned Nuclear Powerplant</h2>
        </tr>
        <tr>
        <p>This project is a horror-themed game designed to immerse players in a chilling and eerie atmosphere. With a focus on creating an unsettling environment, the game aims to deliver a story-driven experience set in an abandoned nuclear power plant. The primary objective is to discover why it was abandoned and take evidence of any anomolies along the way. This journey will evoke a sense of suspense and dread, making the atmospheric design a central element of the gameplay.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
    <div class="tech-items">
        <p class="techCard">Unity</p>
        <p class="techCard">C#</p>
        </div>
        </tr>
      </table>
  </div>
    </section>
    <section className="projectsContainer">
  <h1 className="projectsTitle" id="softwareProjects">SOFTWARE DEVELOPMENT</h1>
     <div className="projectContainer right scrollFade">
      <table>
        <tr>
        <h2>Java TicTacToe</h2>
        </tr>
        <tr>
        <p>My first major project, completed during high school, played a significant role in earning the Wallace Cup & Book Award for first-equal in Digital Technology. This project was one of the earliest endeavors that ignited my passion for programming and computer science.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
        <div class="tech-items">
        <p class="techCard">Netbeans</p>
        <p class="techCard">Java</p>
        </div>
        </tr>
      </table>
    <img src={TicTacToe1} alt="" />
  </div>

  <div className="projectContainer left scrollFade">
  <img src={Cloud1} alt="" />
      <table>
        <tr>
        <h2>Cloud Backup Web Application</h2>
        </tr>
        <tr>
        <p>This web application was a personal initiative, developed to reduce reliance on cloud storage services such as Google Photos. It operates and stores data locally on my personal computer, while providing remote access, functioning similarly to a traditional cloud-based system. Whenver I go overseas for a trip I enable this server as a personal cloud storage system.</p>
        </tr>
        <tr>
        <h2 id="techStack">Tech Stack </h2>
    <div class="tech-items">
    <p class="techCard">React</p>
        <p class="techCard">HTML</p>
        <p class="techCard">CSS</p>
        <p class="techCard">Github</p>
        </div>
        </tr>
      </table>
  </div>
  <div className="spacer"></div>
  <div className="scrollUpContainer">
    <a className="scrollUpLink" href="#landingPage"><img src={Arrow} className="scrollUpArrow"></img></a>
  </div>
    </section>

    <footer></footer>
    </div>
  </section>

  );
}
export default Home;

