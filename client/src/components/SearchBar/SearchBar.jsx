import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(props){
    const [character, setCharacter] = useState('');

    function handleChange(e){
        setCharacter(e.target.value)
    }

    return (
        <div className='containerSearchBar'>
            <input className='inputCharacter' type ='search' placeholder='Character number...' value={character} onChange={handleChange}/>
            <button className='inputButton' onClick={() => props.onSearch(character)}>Mira la magia...</button>
        </div>
    );
}