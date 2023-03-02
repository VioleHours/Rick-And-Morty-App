import { useEffect, useState } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Form from './components/Form/Form.jsx';


function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const username = 'rick@morty.com';
  const password = 'serie1234';
  
  const Login = (userData) =>{
    if(userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
  }

    useEffect(() => {
      !access && navigate('/');
    }, [access]);

  const onSearch = (character) => {
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

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className="App" style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} /> 
        <div>
          <Routes>
            <Route path='/' element={ <Form Login={Login} /> }/>
            <Route path='/home' element={ <Cards onClose={onClose} characters={characters} /> }/>
            <Route path='/about' element={ <About /> }/>
          {/* <Route path='/detail/:detailId' element={ <Detail />}/> */}
          {/* <Route path='/favorites' element={ <Favorites />}/> */}
          {/* <Route path='*' element={ <Error /> }/> */}
          </Routes>
        </div>
    </div>
  );
}

export default App;
