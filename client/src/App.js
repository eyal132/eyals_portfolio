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
    <body> 
    <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div>
</body> 
    </section>
  );
}

export default App;
