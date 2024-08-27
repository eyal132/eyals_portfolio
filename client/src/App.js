import './App.css';
import Navbar from './components/Nav';
import Arrow from './media/arrow_white.png';
import eyalIMG from './media/eyal-portrait.png'

function App() {
  return (
    <section>
    <div className="App" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <p>
        <span className="name">Eyal's </span><span className="second_word"> Portfolio</span>
      </p>
      <header className="App-header">
        <div className="mainContainer">
        <h1>Explore my history of projects.</h1>
        <button className="contactbtn">Contact</button>
        </div>

        <h3>My Journey</h3>
        <img className="arrowIMG" src={Arrow} />
        <img className="eyalIMG" src={eyalIMG} />
      </header>
    </div>
    <div className="timeline">
  <div className="container right">
    <div className="content">
      <h2>2024</h2>
      <p>Developed A Cloud Storage Website</p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>2024</h2>
      <p>Capstone Project</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>2024</h2>
      <p>Developed My Second Unity Game</p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>2023</h2>
      <p>Learning more advanced OOP, LC3-Assembly</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>2022</h2>
      <p>Learning Matlab, Java, C++, Python</p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>2021</h2>
      <p>Developed My First Unity Game</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>2017-2020</h2>
      <p>Highschool Programming Projects</p>
    </div>
  </div>
</div>
<p className="start-date">2017</p>
    </section>
  );
}

export default App;
