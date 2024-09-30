import React from 'react';
import '../App.css';
import Navbar from './Nav';
import Arrow from '../media/arrow_white.png';
import eyalIMG from '../media/eyal-portrait.png';
import spaceIMG from '../media/space_game.png';

function Home() {
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
    <table>
      <tr>
      <th colspan="2" className='tableTitle'>2024</th>
      </tr>
  <tr>
    <th>Capstone Website "Cornerstone"</th>
    <th>Space Game</th>
  </tr>
  <tr>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></td>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing dfgoidfgsdfoijsdoifjsd oisdj oisdj f oisdj oisd oi sdoif jsdoi sdoi odf josdf osd oisd f oisdj f oisd joi oif jsodjf oisdf oisd f jthis thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdsdfosdf sod jfosd ois ofjsdo fosd fosdf osdjoif sd ffsgi jfdogo dfgoi foigjdfoi fdg oifdj oifdoi gdf oi dfo dofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj foidsj foisdj foisd f</p></td>
  </tr>
  <tr>
    <th>Radiation Game</th>
    <th>Cloud Storage</th>
  </tr>
  <tr>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></td>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing dfgoidfgsdfoijsdoifjsd oisdj oisdj f oisdj oisd oi sdoif jsdoi sdoi odf josdf osd oisd f oisdj f oisd joi oif jsodjf oisdf oisd f jthis thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdsdfosdf sod jfosd ois ofjsdo fosd fosdf osdjoif sd ffsgi jfdogo dfgoi foigjdfoi fdg oifdj oifdoi gdf oi dfo dofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj foidsj foisdj foisd f</p></td>
  </tr>
  <tr>
      <th colspan="2" className='tableTitle'>2023</th>
      </tr>
  <tr>
    <th>PLACEHOLDER</th>
    <th>Space Game</th>
  </tr>
  <tr>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></td>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing dfgoidfgsdfoijsdoifjsd oisdj oisdj f oisdj oisd oi sdoif jsdoi sdoi odf josdf osd oisd f oisdj f oisd joi oif jsodjf oisdf oisd f jthis thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdsdfosdf sod jfosd ois ofjsdo fosd fosdf osdjoif sd ffsgi jfdogo dfgoi foigjdfoi fdg oifdj oifdoi gdf oi dfo dofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj foidsj foisdj foisd f</p></td>
  </tr>
  <tr>
      <th colspan="2" className='tableTitle'>2022</th>
      </tr>
  <tr>
    <th>PLACEHOLDER</th>
    <th>Space Game</th>
  </tr>
  <tr>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></td>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing dfgoidfgsdfoijsdoifjsd oisdj oisdj f oisdj oisd oi sdoif jsdoi sdoi odf josdf osd oisd f oisdj f oisd joi oif jsodjf oisdf oisd f jthis thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdsdfosdf sod jfosd ois ofjsdo fosd fosdf osdjoif sd ffsgi jfdogo dfgoi foigjdfoi fdg oifdj oifdoi gdf oi dfo dofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj foidsj foisdj foisd f</p></td>
  </tr>
  <tr>
      <th colspan="2" className='tableTitle'>2020</th>
      </tr>
  <tr>
    <th>Java TicTacToe</th>
    <th>Older Java Projects</th>
  </tr>
  <tr>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing this thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj dfogj fdoigjf ojgoifd oifdj oigfdj  oigdjroig df oi gjfdoig fdo jfodj oifdj oifd oifd go idf oi gfdoig jfdoi foidsj foisdj foisd f</p></td>
    <td><img className="tableIMG" src={spaceIMG} /><p>Some test describing dfgoidfgsdfoijsdoifjsd oisdj oisdj f oisdj oisd oi sdoif jsdoi sdoi odf josdf osd oisd f oisdj f oisd joi oif jsodjf oisdf oisd f jthis thing and how I made it sdfuiosdjhf s sdfois dof sopfi jsdsdfosdf sod jfosd ois ofjsdo fosd fosdf osdjoif sd ffsgi jfdogo dfgoi foigjdfoi fdg oifdj oifdoi gdf oi dfo dofij o sdof sdof jsodfj sodf jsodjfos djfsod fjsd fijsdfo isdjfoisdjfoisd jfoisd fo sfoisdj foidsj foisdj foisd f</p></td>
  </tr>
</table>
    </body>

    </section>
  );
}

export default Home;

