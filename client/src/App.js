// import { useEffect, useState } from 'react'; 
import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js'

function App() {
  return (
    <div className="App" style={{ padding: '25px' }}>
      <div>
        <Cards
          characters = { characters }
          onClose = {() => window.alert('emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch = {(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  );
}

export default App;
