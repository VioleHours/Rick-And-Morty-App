import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

export default function NavBar(props){
    return (
        <div>
            <Link to={`/home`}>
                <span>Home</span>
            </Link>
            <Link to={`/about`}>
                <span>About</span>
            </Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}