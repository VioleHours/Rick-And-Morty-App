import './Card.css'; 
import { Link } from 'react-router-dom'

export default function Card (props) {
    return (
        <div className='cardContainer'>
            <button className='button' onClick={props.onClose}>
                <span className='x'>X</span>
            </button>
            <Link to={`/detail/${props.id}`}>
                <h2 className='name'><em>{props.name}</em></h2>
            </Link>
            <img className='photoCharacter' src={props.image} alt='' />
            <div className='columns'>
            <h3 className='description'>{props.species}</h3>
            <h3 className='description'>{props.gender}</h3>
            </div>
        </div>
    );
}