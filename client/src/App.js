import './App.css';
import Navbar from './components/Nav';
import Arrow from './media/arrow_white.png';
import eyalIMG from './media/eyal-portrait.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>
        <span class="name">Eyal's </span><span class="second_word"> Portfolio</span>
      </p>
      <header className="App-header">
        <h1>Explore my history of projects.</h1>
        <button class="contactbtn">Contact</button>

        <h3>My Journey</h3>
        <img class="arrowIMG" src={Arrow} />
        <img class="eyalIMG" src={eyalIMG} />
      </header>
    </div>
  );
}

export default App;
