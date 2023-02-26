import { useEffect, useState } from 'react'; 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'rick@morty.com';
  const password = 'serie1234';

  const Location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function login(userData) {
    if(userData.username === username && userData.password === password) {
       setAccess(true);
       navigate('/home');
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  function onClose(id){
    setCharacters(oldCharacters => 
      oldCharacters.filter(char => char.id !== id)
      );
  }

  return (
    <div className="App" style={{ padding: '25px' }}>
      <NavBar />
      { Location.pathname === '/' ? null : <NavBar onSearch={onSearch} /> }
      <Routes>
        {/* <Route path='/' element={ <Form onLogin={login} /> }/> */}
        <Route path='/home' element={ <Cards onClose={onClose} characters={characters} /> }/>
        {/* <Route path='/about' element={ <About /> }/>
        <Route path='/detail/:detailId' element={ <Detail />}/>
        <Route path='*' element={ <Error /> }/> */}
      </Routes>
      </div>
  );
}

export default App;
