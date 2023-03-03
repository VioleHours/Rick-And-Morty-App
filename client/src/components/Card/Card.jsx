import './Card.css'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../actions/index.js';


export default function Card ({name, species, gender, image, onClose, id}) {
    const dispatch = useDispatch(); 
    const favorites = useSelector(state => state.favorites);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        favorites.forEach((fav) => {
            if (fav.id === id) setIsFav(true)
        })
    }, [favorites])

    const handleFavorite = () => {
        if(isFav){
            setIsFav(false)
            dispatch(deleteFavorite(id))
        }
        else{
            setIsFav(true)
            dispatch(addFavorite({name, species, gender, image, onClose, id}))
        }
    }
    return (
        <div className='cardContainer'>
            <div className='icon'>
            {
               isFav ? (
                           <button onClick={handleFavorite} className='botoFav' >💚</button>
                        ) : (
                           <button onClick={handleFavorite} className='botoFav'>🤍</button>
                        )
            }
            </div>
            <button className='button' onClick={onClose}>
                <span className='x'>X</span>
            </button>
            <Link to={`/detail/${id}`}>
                <h2 className='name'><em>{name}</em></h2>  
            </Link>
            <img className='photoCharacter' src={image} alt='' />
            <div className='columns'>
            <h3 className='description'>{species}</h3>
            <h3 className='description'>{gender}</h3>
            </div>
        </div>
    ); 
}