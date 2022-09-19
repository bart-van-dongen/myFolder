import React from 'react';
import logo from './logo.svg';
import './App.css';



const guitar = {
  id: 'guitar',
  model: 'jesus',
 manufacturer: 'god',
 released: '0',
 construction: 'body head arms legs'
}

const guitars = [guitar];

function App() {
  
  const guitarList = guitars.map ((guitar) => {
   return (
     <li key = {guitar.id}>
      <h1>{guitar.manufacturer} - {guitar.model}</h1>
    <h2>Released {guitar.released}</h2>
      <section>
          <h4>Materials</h4>
          <p> {guitar.construction }</p>
      </section>
      </li>
    )
 })


 

//const hasGuitars = guitar.length > 0

return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    
      <ul>
        {guitarList}
      </ul>
    

      </header>
    </div>
  );
}

export default App;
