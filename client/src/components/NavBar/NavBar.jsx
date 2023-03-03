import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({onSearch}) => {
    const url = useLocation()
    if (url.pathname !== '/'){
        return (
            <nav>
                <SearchBar onSearch={onSearch}/>
                <Link to={`/about`}>
                    <span>About</span>
                </Link>
                <Link to={`/home`}>
                    <span>Home</span>
                </Link>
                <Link to={`/favorites`}>
                    <span>Favorite</span>
                </Link>
            </nav>
        )     
    }
    return 
}

export default NavBar;